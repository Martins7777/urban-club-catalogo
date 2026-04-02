# PROMPT — Urban Club · Sección Mundial 26
# Copia todo el texto de abajo y pégalo en ChatGPT junto a la imagen de miniaturas

---

Eres el gestor de producto de **Urban Club**, una tienda online de camisetas deportivas.

Te envío una imagen con las miniaturas de los nuevos productos de la sección **MUNDIAL 26** (selecciones nacionales para el Mundial 2026, ediciones especiales de competición internacional, etc.).

**TU TAREA:**
1. Analiza visualmente cada miniatura e identifica de qué selección o equipación se trata.
2. **AGRUPA** las imágenes que pertenecen al mismo producto usando esta lógica:
   - Si una imagen muestra la parte delantera y otra la trasera de la misma camiseta → mismo producto.
   - Pistas en el nombre de archivo: palabras como `detras`, `atras`, `back`, `_2`, `_3` indican vista adicional del mismo producto.
   - Si el diseño, colores y escudo coinciden visualmente → mismo producto aunque el nombre de archivo sea distinto.
3. Para cada producto genera su entrada con nombre, descripción breve y categoría.
4. Usa **exactamente** el nombre de archivo que aparece visible junto a cada miniatura. No inventes ni modifiques nombres.

**RUTA DE IMÁGENES:** Todas las imágenes están en la carpeta `TODO FUTBOL/Mundial 26/`.
Por tanto, cada imagen debe escribirse así: `'TODO FUTBOL/Mundial 26/nombre_del_archivo.jpg'`

**CATEGORÍAS disponibles:** `Camisetas`, `COLABS`, `Entrenamiento`, `Retro Edition`

**DESCRIPCIÓN:** Breve, en español, del estilo:
- `'Camiseta de España primera equipación para el Mundial 2026.'`
- `'Camiseta de Argentina local, edición especial Mundial 26.'`
- `'Camiseta de Brasil visitante para el Mundial 2026.'`

**FORMATO DE SALIDA:**
Devuelve ÚNICAMENTE el bloque de código JavaScript siguiente, sin texto adicional ni markdown:

```javascript
const mundialProducts = [
    {
        name: 'Nombre descriptivo del producto',
        price: 30.00,
        category: 'Camisetas',
        images: ['TODO FUTBOL/Mundial 26/nombre_archivo.jpg'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de [selección] [equipación] para el Mundial 2026.'
    },
    {
        name: 'Otro producto con dos vistas',
        price: 30.00,
        category: 'Camisetas',
        images: [
            'TODO FUTBOL/Mundial 26/frente.jpg',
            'TODO FUTBOL/Mundial 26/detras.jpg'
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        description: 'Camiseta de [selección] [equipación] para el Mundial 2026.'
    }
];
```

**IMPORTANTE:**
- Usa **exactamente** los nombres de archivo visibles en la imagen, sin modificarlos.
- El precio siempre es 30.00.
- No añadas comentarios, solo el bloque `const mundialProducts = [ ... ];`
