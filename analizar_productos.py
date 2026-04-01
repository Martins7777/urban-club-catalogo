#!/usr/bin/env python3
"""
Urban Club - Analizador de productos con IA
--------------------------------------------
Coloca las nuevas imágenes en la carpeta 'nuevos/' y ejecuta:
    python analizar_productos.py

El script analizará las imágenes, las agrupará por producto y añadirá
las nuevas entradas al final de productos.js para que las revises.
"""

import anthropic
import base64
import json
import os
import re
import sys
from pathlib import Path

# --- Configuración ---
CARPETA_NUEVOS = Path(__file__).parent / "nuevos"
PRODUCTOS_JS   = Path(__file__).parent / "productos.js"
SALIDA_REVISION = Path(__file__).parent / "nuevos_productos_revision.js"
BATCH_SIZE = 15        # máx imágenes por llamada a la API
PRECIO_DEFAULT = 30.00

EXTENSIONES = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
MEDIA_TYPES = {
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".png": "image/png",  ".webp": "image/webp",
    ".gif": "image/gif",
}


def imagen_a_base64(ruta: Path) -> tuple[str, str]:
    """Devuelve (base64_data, media_type)."""
    ext = ruta.suffix.lower()
    data = base64.standard_b64encode(ruta.read_bytes()).decode("utf-8")
    return data, MEDIA_TYPES.get(ext, "image/jpeg")


def obtener_imagenes(carpeta: Path) -> list[Path]:
    """Devuelve lista de imágenes en la carpeta."""
    return sorted([
        f for f in carpeta.iterdir()
        if f.is_file() and f.suffix.lower() in EXTENSIONES
    ])


def analizar_batch(cliente: anthropic.Anthropic, imagenes: list[Path]) -> list[dict]:
    """Envía un batch de imágenes a Claude y devuelve los productos detectados."""
    nombres = [f.name for f in imagenes]

    bloques = [
        {
            "type": "text",
            "text": (
                f"Analiza estas {len(imagenes)} imágenes de camisetas y ropa deportiva "
                f"de la tienda Urban Club.\n\n"
                "TU TAREA:\n"
                "1. AGRUPA las imágenes que pertenecen al MISMO producto "
                "   (ej: delantera y trasera de la misma camiseta, distintos ángulos).\n"
                "2. Para cada producto genera la información de la tienda.\n\n"
                "PAUTAS PARA AGRUPAR:\n"
                "- 'detras', 'atras', 'back', '2', '3' en el nombre suelen ser "
                "  vistas adicionales del mismo producto.\n"
                "- Nombres muy similares indican el mismo producto.\n"
                "- Las colabs (con 'x' en el nombre) suelen tener 2-4 fotos.\n\n"
                "CATEGORÍAS disponibles: Camisetas, COLABS, Streetwear, Entrenamiento, "
                "Pantalones Cortos\n"
                "SECCIONES disponibles: futbol, gym\n\n"
                "Devuelve ÚNICAMENTE un JSON array con este formato exacto "
                "(sin texto adicional, sin markdown):\n"
                "[\n"
                "  {\n"
                '    "name": "Nombre del producto",\n'
                f'    "price": {PRECIO_DEFAULT},\n'
                '    "category": "Camisetas",\n'
                '    "section": "futbol",\n'
                '    "images": ["nombre_archivo.jpg"],\n'
                '    "sizes": ["S", "M", "L", "XL", "XXL"],\n'
                '    "description": "Descripción atractiva en español."\n'
                "  }\n"
                "]\n\n"
                "Nombres de archivos (en el mismo orden que las imágenes):\n"
                + "\n".join(f"{i+1}. {n}" for i, n in enumerate(nombres))
            )
        }
    ]

    for ruta in imagenes:
        b64, media_type = imagen_a_base64(ruta)
        bloques.append({
            "type": "image",
            "source": {"type": "base64", "media_type": media_type, "data": b64}
        })

    respuesta = cliente.messages.create(
        model="claude-opus-4-6",
        max_tokens=8000,
        messages=[{"role": "user", "content": bloques}]
    )

    texto = respuesta.content[0].text.strip()

    # Intentar parsear el JSON de la respuesta
    try:
        return json.loads(texto)
    except json.JSONDecodeError:
        match = re.search(r'\[[\s\S]*\]', texto)
        if match:
            return json.loads(match.group())
        raise ValueError(f"No se pudo parsear la respuesta de Claude:\n{texto[:500]}")


def productos_a_js(productos: list[dict], seccion: str) -> str:
    """Convierte lista de productos a código JavaScript."""
    if not productos:
        return ""

    lineas = []
    for p in productos:
        imagenes_js = json.dumps(p.get("images", []), ensure_ascii=False)
        tallas_js   = json.dumps(p.get("sizes", ["S", "M", "L", "XL", "XXL"]))
        nombre      = p.get("name", "Producto").replace("'", "\\'")
        categoria   = p.get("category", "Camisetas").replace("'", "\\'")
        descripcion = p.get("description", "").replace("'", "\\'")
        precio      = p.get("price", PRECIO_DEFAULT)

        lineas.append(
            "    {\n"
            f"        name: '{nombre}',\n"
            f"        price: {precio},\n"
            f"        category: '{categoria}',\n"
            f"        images: {imagenes_js},\n"
            f"        sizes: {tallas_js},\n"
            f"        description: '{descripcion}'\n"
            "    }"
        )

    bloque = ",\n".join(lineas)
    return (
        f"\n\n    // --- NUEVOS PRODUCTOS ({seccion.upper()}) ---\n"
        + bloque
        + ","
    )


def main():
    # Verificar API key
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("❌ Falta la variable de entorno ANTHROPIC_API_KEY.")
        print("   Ejecuta: set ANTHROPIC_API_KEY=tu_clave_aqui")
        sys.exit(1)

    # Verificar carpeta de nuevos
    if not CARPETA_NUEVOS.exists():
        CARPETA_NUEVOS.mkdir()
        print(f"📁 Carpeta creada: {CARPETA_NUEVOS}")
        print("   Coloca las imágenes nuevas ahí y vuelve a ejecutar el script.")
        sys.exit(0)

    imagenes = obtener_imagenes(CARPETA_NUEVOS)
    if not imagenes:
        print(f"📂 La carpeta '{CARPETA_NUEVOS.name}/' está vacía.")
        print("   Añade imágenes y vuelve a ejecutar.")
        sys.exit(0)

    print(f"🖼️  {len(imagenes)} imágenes encontradas en '{CARPETA_NUEVOS.name}/'")
    print("🤖 Analizando con Claude Opus (puede tardar unos segundos)...\n")

    cliente = anthropic.Anthropic()

    # Procesar en batches
    todos_productos = {"futbol": [], "gym": []}
    batches = [imagenes[i:i+BATCH_SIZE] for i in range(0, len(imagenes), BATCH_SIZE)]

    for idx, batch in enumerate(batches):
        if len(batches) > 1:
            print(f"  Batch {idx+1}/{len(batches)}: {len(batch)} imágenes...")
        productos = analizar_batch(cliente, batch)
        for p in productos:
            seccion = p.pop("section", "futbol")
            todos_productos.setdefault(seccion, []).append(p)

    total = sum(len(v) for v in todos_productos.values())
    print(f"\n✅ Claude identificó {total} producto(s):\n")

    for seccion, productos in todos_productos.items():
        for p in productos:
            imgs = len(p.get("images", []))
            print(f"  [{seccion.upper()}] {p['name']}  ({imgs} imagen{'es' if imgs != 1 else ''})")

    # Generar el código JS
    codigo_futbol = productos_a_js(todos_productos.get("futbol", []), "futbol")
    codigo_gym    = productos_a_js(todos_productos.get("gym", []),    "gym")

    # Guardar archivo de revisión
    with open(SALIDA_REVISION, "w", encoding="utf-8") as f:
        f.write("// ============================================================\n")
        f.write("// REVISIÓN: Nuevos productos generados por IA\n")
        f.write("// Revisa y copia las entradas que quieras a productos.js\n")
        f.write("// ============================================================\n")
        if codigo_futbol:
            f.write("\n// ---- Para añadir a footballProducts[] ----")
            f.write(codigo_futbol)
        if codigo_gym:
            f.write("\n\n// ---- Para añadir a gymProducts[] ----")
            f.write(codigo_gym)

    print(f"\n📝 Código generado en: {SALIDA_REVISION.name}")
    print("   Revisa el archivo, corrige si es necesario y copia las entradas a productos.js")
    print("\n✨ ¡Listo!")


if __name__ == "__main__":
    main()
