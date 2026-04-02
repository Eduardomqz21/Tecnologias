# Presentación de Tecnologías Web

Este repositorio está pensado para enseñar desarrollo web paso a paso, desde lo más básico hasta una pequeña integración entre frontend y backend.

## ¿Qué vas a encontrar aquí?

La idea es que una persona que empieza pueda abrir el proyecto y entenderlo por partes:

1. Qué es el desarrollo web.
2. Cómo funciona HTML y CSS.
3. Cómo se usa Bootstrap para construir interfaces responsivas.
4. Cómo se muestran alertas modernas con SweetAlert2.
5. Cómo se conecta el frontend con un servidor hecho en Node.js.

## Requisitos

- Node.js 18 o superior.
- Git.

## Cómo ejecutar el proyecto

1. Instala dependencias:

```bash
npm install
```

2. Inicia el servidor:

```bash
npm start
```

3. Abre el navegador en:

```text
http://localhost:3000
```

Si el puerto 3000 ya está ocupado, puedes usar otro:

```powershell
$env:PORT=3001
npm start
```

Y luego abrir:

```text
http://localhost:3001
```

## Estructura general

```text
Tecnologias-1/
|-- backend/
|   `-- src/
|       `-- server.js
|-- frontend/
|   `-- public/
|       `-- index.html
|       `-- html5-seleccion.html
|       `-- bootstrap-seleccion.html
|       `-- sweetalert2-seleccion.html
|-- docs/
|   |-- 00-introduccion/
|   |   `-- README.md
|   |-- 01-html-css/
|   |   `-- README.md
|   |-- 02-frontend-frameworks/
|   |   `-- README.md
|   `-- 03-backend-nodejs/
|       `-- README.md
|-- scripts/
|-- package.json
`-- README.md
```

## Ruta recomendada de estudio

1. Empieza por [docs/00-introduccion/README.md](docs/00-introduccion/README.md).
2. Sigue con [docs/01-html-css/README.md](docs/01-html-css/README.md).
3. Después revisa [docs/02-frontend-frameworks/README.md](docs/02-frontend-frameworks/README.md).
4. Continúa con [docs/03-backend-nodejs/README.md](docs/03-backend-nodejs/README.md).
5. Abre la portada en [frontend/public/index.html](frontend/public/index.html) para ver los accesos directos.

## Qué incluye la demo actual

- Un servidor Node.js que sirve los archivos de `frontend/public`.
- Un endpoint JSON en `/api/tecnologias`.
- Una portada principal moderna con Bootstrap.
- Una guía interactiva de HTML5.
- Una guía interactiva de Bootstrap 5.
- Una guía interactiva de SweetAlert2.

## Idea del proyecto

La intención no es solo mostrar código, sino enseñar cómo se conectan las piezas:

- HTML define la estructura.
- CSS y Bootstrap dan forma visual.
- SweetAlert2 mejora la experiencia de usuario.
- Node.js entrega datos y contenido.

## Próximos pasos sugeridos

- Agregar más páginas interactivas por cada tema.
- Incluir ejemplos de formularios con validación.
- Conectar más acciones visuales con el backend.
- Convertir cada tema en una sección lista para exponer en clase.
