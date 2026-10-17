# Alrededor de los EE.UU. — React

Proyecto de los **Sprints 11 y 12** del bootcamp de Desarrollo Web Full Stack de **TripleTen**.

Es la migración a **React + TypeScript** de "Alrededor de los EE.UU.", una red social de fotos donde el usuario tiene un perfil y comparte tarjetas de lugares que ha visitado. En el Sprint 11 se reconstruyó toda la interfaz con componentes; en el Sprint 12 la aplicación se conectó a la API, de modo que los datos del perfil y las tarjetas son reales y se guardan en el servidor.

## Funcionalidades

- Perfil de usuario con avatar, nombre y descripción cargados desde la API.
- Tarjetas de lugares cargadas desde el servidor.
- Editar el perfil (el formulario se llena con los datos actuales) y cambiar el avatar.
- Agregar un nuevo lugar, que aparece al principio de la lista.
- Dar y quitar "me gusta" a las tarjetas.
- Eliminar las tarjetas propias, con una ventana de confirmación.
- Un componente `Popup` reutilizable para todas las ventanas emergentes.

## Tecnologías

- React
- TypeScript
- Vite
- CSS con metodología BEM
- ESLint

## Conceptos aplicados

- Componentes funcionales y composición (`Header`, `Main`, `Footer`, `Card`, `Popup`).
- Props, desestructuración y tipado con TypeScript (`type`, `interface`).
- Levantamiento de estado: `App` guarda el usuario, las tarjetas y la ventana abierta, y hace todas las peticiones a la API.
- Context API (`CurrentUserContext`) para compartir el usuario actual y sus funciones sin pasar props de componente en componente.
- `useEffect` para cargar el usuario y las tarjetas una sola vez, al montar la aplicación.
- Componentes controlados (`useState`) en los formularios de perfil y de nuevo lugar, y no controlados (`useRef`) en el de avatar.
- Actualización inmutable del estado con `map`, `filter` y el operador spread.
- Una clase `Api` que centraliza las peticiones `fetch`, exportada como una instancia ya configurada.

## Estructura

```
src/
├── components/
│   ├── App.tsx
│   ├── Header/
│   ├── Footer/
│   └── Main/
│       ├── Main.tsx
│       └── components/
│           ├── Card/
│           └── Popup/
│               ├── Popup.tsx
│               ├── NewCard/
│               ├── EditProfile/
│               ├── EditAvatar/
│               ├── ImagePopup/
│               └── RemoveCard/
├── contexts/    # CurrentUserContext
├── interfaces/  # UserData, CardData, CurrentUserContextType, ModalData
├── utils/       # clase Api
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

## Autor

**Daniel Felipe Silva González** 

- GitHub: [Pipesilvag99](https://github.com/Pipesilvag99)
