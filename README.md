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
│   ├── layout/      # Navbar, Footer, PageHeader
│   └── ui/          # Piezas reutilizables: Button, Card
├── config/
│   └── brand.js     # Nombre, textos, contacto y menú del negocio
├── layouts/         # Plantillas de página (MainLayout)
├── pages/           # Una vista por ruta: Home, Services, About, Contact
├── styles/
│   ├── tokens.css   # Colores, tipografía, espaciado (identidad visual)
│   └── global.css   # Estilos base
├── router.jsx       # Definición de rutas
└── main.jsx         # Punto de entrada
```

## Personalizar el estilo del negocio

1. **Colores y tipografía:** edita las variables de [`src/styles/tokens.css`](src/styles/tokens.css). Todos los componentes las usan, así que un cambio ahí se refleja en toda la app.
2. **Nombre, eslogan y contacto:** edita [`src/config/brand.js`](src/config/brand.js).
3. **Logo:** reemplaza [`public/favicon.svg`](public/favicon.svg) (o agrega tu logo en `public/` y cámbialo en el `Navbar`).
4. **Contenido de cada página:** edita los archivos en `src/pages/`.
5. **Fuente personalizada:** agrega el `<link>` de Google Fonts en `index.html` y cambia `--font-heading` / `--font-body` en `tokens.css`.

## Convenciones

- Estilos con **CSS Modules** (`Componente.module.css`) para que las clases no choquen entre componentes.
- Imports con alias `@/` → `src/` (por ejemplo `import Button from '@/components/ui/Button'`).
- Variables de entorno: copia `.env.example` a `.env.local`. Solo las que empiezan con `VITE_` llegan al navegador.
