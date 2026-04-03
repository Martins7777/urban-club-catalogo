# Urban Club — Contexto del proyecto

## Qué es
Catálogo web de camisetas deportivas para clientes conocidos. El flujo es:
1. Cliente navega el catálogo → selecciona talla → añade a cesta
2. Rellena nombre y dirección → copia pedido al portapapeles
3. Pega en WhatsApp y lo envía al vendedor

Un solo fichero HTML sin build, sin servidor, sin base de datos. Se sirve desde GitHub Pages.

---

## Archivos clave

| Fichero | Propósito |
|---|---|
| `index.html` | Toda la app React (609 líneas, Babel standalone) |
| `productos.js` | Catálogo de productos — único fichero a tocar para añadir/editar productos (868 líneas) |
| `prompt_chatgpt_mundial26.md` | Prompt para generar productos de Mundial 26 con ChatGPT |

---

## Estructura de carpetas de imágenes

```
TODO FUTBOL/
  Real Madrid CF/   — camisetas y streetwear del Madrid
  Barcelona FC/     — equipaciones Barça
  Malaga CF/        — equipaciones Málaga CF
  Colabs/           — colaboraciones club × artista
  Mundial 26/       — selecciones nacionales Mundial 2026
TODO GYM/           — ropa deportiva gym
```

---

## productos.js — estructura

Tres arrays exportados al scope global (los consume index.html):

```javascript
const footballProducts = [ ... ];   // Real Madrid, Barça, Málaga, Colabs
const gymProducts      = [ ... ];   // Gym / Streetwear
const mundialProducts  = [ ... ];   // Selecciones nacionales Mundial 26
```

**Estructura de cada producto:**
```javascript
{
    name: 'Nombre del producto',
    price: 30.00,
    category: 'Camisetas',          // Camisetas | COLABS | Streetwear | Entrenamiento | Retro Edition
    images: ['TODO FUTBOL/Carpeta/archivo.jpg'],  // puede tener varias imágenes
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Descripción breve.'
}
```

**Prefijos de ruta obligatorios según sección:**
- Real Madrid → `TODO FUTBOL/Real Madrid CF/`
- Barcelona → `TODO FUTBOL/Barcelona FC/`
- Málaga → `TODO FUTBOL/Malaga CF/`
- Colabs → `TODO FUTBOL/Colabs/`
- Mundial 26 → `TODO FUTBOL/Mundial 26/`
- Gym → `TODO GYM/`

---

## index.html — mapa de líneas críticas

### Configuración de datos (líneas 60–70)
```
L60  withGeneratedIds()        — asigna IDs numéricos a productos
L66  footballProductsWithIds   — footballProducts con IDs
L67  gymProductsWithIds        — gymProducts con IDs
L68  mundialProductsWithIds    — mundialProducts + _section:'Mundial 26'
L70  allFootballProducts       — merge futbol + mundial (va a la vista Fútbol)
```

### Lógica de secciones de fútbol (líneas 94–108 y 364–378)
```
L94   detectClubName()         — asigna producto a sección por nombre
L97   'real madrid' → 'Real Madrid CF'
L98   'barcelona'  → 'Barcelona FC'
L99   'malaga'     → 'Málaga FC'
L102  'alemania'   → 'Alemania'
L103  'mundial'    → 'Mundial 26'
L104  'x'          → 'Colabs'            ← todos los colabs llevan 'x'
L368  product._section || detectClubName  ← mundialProducts usa _section directo

L374  preferredOrder           — orden de secciones en nav y página
L375  alwaysVisible            — secciones que aparecen aunque estén vacías (Mundial 26)
```

**Para añadir una nueva sección de fútbol:**
1. Añadir keyword en `detectClubName` (L94–108)
2. Añadir nombre en `preferredOrder` (L374)

### Componentes React
```
L134  Navbar          — barra superior con título, flecha atrás y carrito
L153  CartPanel       — panel lateral de cesta + formulario de pedido
L232  ProductCard     — tarjeta de producto en el grid
L245  App             — componente raíz, gestiona todo el estado
```

### Estado principal (App, L246–254)
```
L246  view            — 'landing' | 'futbol' | 'gym' | 'product'
L247  selectedProduct — producto abierto en detalle
L248  cart            — array de items en cesta
L252  activeSize      — talla seleccionada en vista detalle
L253  currentImgIdx   — índice de imagen activa en carrusel
```

### Flujo de pedido (L272–344)
```
L272  copyOrder()     — genera texto plano + HTML enriquecido con imágenes inline
L325  ClipboardItem   — copia al portapapeles en formato rich (con miniaturas)
L335  alert()         — confirmación al usuario tras copiar
```

### Vistas (L394–600)
```
L394  landing         — pantalla partida Fútbol / Gym
L466  product         — detalle de producto con carrusel y selector de talla
L522  lista futbol    — grid por secciones con nav sticky de clubs
L577  lista gym       — grid simple sin secciones
```

### Nav de clubs (sticky, L537–548)
```
L537  nav sticky      — aparece solo en vista 'futbol'
L540  footballSections.map — un botón por sección
L381  scrollToClubSection() — scroll suave con offset 170px por la doble navbar
```

---

## Cómo añadir productos

**Añadir un producto nuevo a una sección existente:**
1. Copiar la imagen a la carpeta correcta (`TODO FUTBOL/Colabs/`, etc.)
2. Añadir entrada en el array correspondiente de `productos.js`
3. Commit + push

**Añadir productos de Mundial 26:**
1. Copiar imágenes a `TODO FUTBOL/Mundial 26/`
2. Usar `prompt_chatgpt_mundial26.md` con ChatGPT para generar el bloque JS
3. Pegar el resultado en el array `mundialProducts` de `productos.js`

**Añadir una sección nueva en Fútbol:**
1. Crear carpeta en `TODO FUTBOL/NombreSeccion/`
2. Añadir keyword en `detectClubName` → `index.html:L94`
3. Añadir nombre en `preferredOrder` → `index.html:L374`
4. Añadir productos con path correcto en `footballProducts`

---

## Notas técnicas importantes

- **Sin build**: React y Babel se cargan desde CDN. Editar directamente los ficheros.
- **Precios**: Siempre 30.00 €.
- **Tallas por defecto**: `['S', 'M', 'L', 'XL', 'XXL']`.
- **Imágenes múltiples**: El primer elemento de `images[]` es la miniatura del grid. El resto aparecen en el carrusel del detalle.
- **Case sensitivity**: GitHub Pages corre en Linux. Los nombres de fichero deben coincidir exactamente (tildes incluidas: `PERÚ.jpg` ≠ `PERU.jpg`).
- **Espacios en rutas**: Los nombres de carpeta con espacios (`TODO FUTBOL`, `Mundial 26`) funcionan correctamente en src de imágenes.
- **mundialProducts usa `_section`** en vez de `detectClubName` para garantizar que todos sus productos caigan siempre en "Mundial 26" independientemente del nombre del producto.
