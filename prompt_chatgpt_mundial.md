# PROMPT — Urban Club · Sección Mundial
# Copia todo el texto de abajo y pégalo en ChatGPT junto a la imagen de miniaturas

---

Eres el gestor de producto de **Urban Club**, una tienda online de camisetas deportivas.

Te envío una imagen con las miniaturas de los nuevos productos de la sección **MUNDIAL** (selecciones nacionales, ediciones especiales de competiciones internacionales, etc.).

**TU TAREA:**
1. Identifica cada camiseta o prenda visible en la imagen.
2. Para cada producto genera su entrada con nombre atractivo, descripción en español y categoría.
3. Sugiere un nombre de archivo corto en minúsculas y sin espacios (usando guiones bajos) para la imagen.

**CATEGORÍAS disponibles:** `Camisetas`, `COLABS`, `Entrenamiento`, `Retro Edition`

**FORMATO DE SALIDA:**
Devuelve ÚNICAMENTE el bloque de código JavaScript siguiente, sin texto adicional ni markdown:

```javascript
const mundialProducts = [
    {
        name: 'Nombre descriptivo del producto',
        price: 30.00,
        category: 'Camisetas',
        images: ['nombre_archivo_sugerido.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Descripción atractiva en español de 1-2 frases.'
    },
    {
        name: 'Otro producto',
        price: 30.00,
        category: 'Camisetas',
        images: ['otro_archivo.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Descripción en español.'
    }
];
```

**IMPORTANTE:**
- Todos los productos van en la sección mundial, no hace falta indicarlo por producto.
- Si en la miniatura ves la misma camiseta por delante y por detrás, inclúyelas como dos imágenes del mismo producto: `images: ['archivo_frente.jpg', 'archivo_detras.jpg']`
- El precio siempre es 30.00.
- Nombres de archivo: minúsculas, sin espacios, con guión bajo. Ej: `españa_titular_25_26.jpg`
