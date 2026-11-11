# casa-nube-frontend

Frontend de **Casa Nube**, hecho con React + Vite. Proyecto de práctica para aprender Git, GitHub y desarrollo frontend.

## Requisitos

- [Node.js](https://nodejs.org/) 20.19 o superior (recomendado: la versión LTS)

## Primeros pasos

```bash
npm install        # instala dependencias (solo la primera vez)
npm run dev        # levanta el servidor en http://localhost:5173
```

## Scripts

| Comando           | Qué hace                                       |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente |
| `npm run build`   | Genera la versión de producción en `dist/`     |
| `npm run preview` | Sirve localmente la versión de `dist/`         |
| `npm run lint`    | Revisa el código con ESLint                    |
| `npm run format`  | Formatea todo el código con Prettier           |

## Estructura

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Secciones de la landing: Hero, Essence, FeaturedProducts, Location
│   └── ui/          # Piezas reutilizables: Button, Logo, Photo, ProductCard, SectionHeading
├── config/
│   └── brand.js     # Nombre, eslogan, contacto, horarios, redes y menú
├── data/
│   └── products.js  # Productos destacados
├── layouts/         # Plantillas de página (MainLayout)
├── pages/           # Home (landing) y NotFound (404)
├── styles/
│   ├── tokens.css   # Colores, tipografía, espaciado (identidad visual)
│   └── global.css   # Estilos base
├── router.jsx       # Definición de rutas
└── main.jsx         # Punto de entrada
```

## Personalizar el estilo del negocio

1. **Colores y tipografía:** edita las variables de [`src/styles/tokens.css`](src/styles/tokens.css). Todos los componentes las usan, así que un cambio ahí se refleja en toda la app.
2. **Nombre, eslogan y contacto:** edita [`src/config/brand.js`](src/config/brand.js).
3. **Logo:** el logotipo provisional está en [`src/components/ui/Logo.jsx`](src/components/ui/Logo.jsx); el ícono de la pestaña es [`public/favicon.svg`](public/favicon.svg).
4. **Fotos:** guarda las imágenes en `public/images/` y pásalas con la prop `src` al componente `Photo` (o en el campo `image` de [`src/data/products.js`](src/data/products.js)). Mientras no haya foto, se muestra un marcador que dice qué imagen va ahí.
5. **Contenido de cada sección:** edita los archivos en `src/components/sections/`.
6. **Fuentes:** agrega el `<link>` de Google Fonts en `index.html` y cambia `--font-heading` / `--font-body` en `tokens.css`.

## Convenciones

- Estilos con **CSS Modules** (`Componente.module.css`) para que las clases no choquen entre componentes.
- Imports con alias `@/` → `src/` (por ejemplo `import Button from '@/components/ui/Button'`).
- Variables de entorno: copia `.env.example` a `.env.local`. Solo las que empiezan con `VITE_` llegan al navegador.
