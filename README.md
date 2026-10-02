# Alrededor de los EE.UU. — React

Proyecto del **Sprint 11** del bootcamp de Desarrollo Web Full Stack de **TripleTen**.

Es la migración a **React + TypeScript** de "Alrededor de los EE.UU.", una red social de fotos donde el usuario tiene un perfil y comparte tarjetas de lugares que ha visitado. La versión anterior estaba hecha con HTML, CSS y JavaScript con programación orientada a objetos (clases `Card`, `Popup`, `FormValidator`, `Section`); en esta versión toda la interfaz se reconstruyó con componentes.

## Funcionalidades

- Perfil de usuario con avatar, nombre y descripción.
- Tarjetas de lugares generadas dinámicamente a partir de un arreglo de datos.
- Un componente `Popup` reutilizable para todas las ventanas emergentes:
  - Editar perfil
  - Cambiar foto de perfil
  - Agregar un nuevo lugar
  - Ver la imagen de una tarjeta en tamaño grande
- Apertura y cierre de ventanas controlados con el estado de React (`useState`), sin manipular el DOM directamente.

## Tecnologías

- React
- TypeScript
- Vite
- CSS con metodología BEM
- ESLint

## Conceptos aplicados

- Componentes funcionales y composición (`Header`, `Main`, `Footer`, `Card`, `Popup`).
- Props, desestructuración y tipado con TypeScript (`type`, `interface`).
- Hook `useState` para manejar qué ventana emergente está abierta.
- Paso de funciones por props, para que un componente hijo (`Card`) abra un popup cuyo estado vive en el padre (`Main`).
- Renderizado condicional (`&&`, operador ternario) y de listas con `map` y `key`.
- `children` para reutilizar un mismo contenedor con contenidos distintos.

## Estructura

```
src/
├── components/
│   ├── App.tsx
│   ├── Header/
│   ├── Footer/
│   └── Main/
│       ├── Main.tsx
│       ├── Card/
│       └── Popup/
│           ├── Popup.tsx
│           ├── NewCard/
│           ├── EditProfile/
│           ├── EditAvatar/
│           └── ImagePopup/
├── types/
│   └── types.ts
├── blocks/      # estilos por bloque (BEM)
├── images/
└── vendor/      # normalize y fuentes
```

## Cómo ejecutarlo

```bash
git clone git@github.com:Pipesilvag99/web_project_around_react.git
cd web_project_around_react
npm install
npm run dev
```

El proyecto se abre en `http://localhost:3000`.

## Próximos pasos

- Conectar el proyecto con la API para cargar y guardar datos reales.
- Editar el perfil y el avatar, crear y eliminar tarjetas desde los formularios.
- Dar y quitar "me gusta" a las tarjetas.

## Autor

**Daniel Felipe Silva González** — Diseñador industrial en transición hacia el diseño UX/UI y el desarrollo web.

- GitHub: [Pipesilvag99](https://github.com/Pipesilvag99)