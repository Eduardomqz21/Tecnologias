# Presentacion de Tecnologias Web

Repositorio base para explicar desarrollo web de forma progresiva: desde HTML basico hasta conexion frontend-backend con Node.js.

## Objetivo

Construir una presentacion tipo tutorial que muestre:
- Fundamentos de HTML/CSS
- Uso de un framework frontend (Bootstrap)
- Conceptos de backend con Node.js
- Comunicacion entre frontend y backend

## Requisitos

- Node.js 18 o superior
- Git

## Como clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/Tecnologias-1.git
cd Tecnologias
```

## Como ejecutar el proyecto

1. Instalar dependencias (en este caso no hay dependencias externas, pero se deja el flujo estandar):

```bash
npm install
```

2. Levantar el servidor:

```bash
npm start
```

3. Abrir en el navegador:

```text
http://localhost:3000
```

## Modo desarrollo

```bash
npm run dev
```

## Si el puerto 3000 esta ocupado

En PowerShell puedes iniciar en otro puerto asi:

```powershell
$env:PORT=3001
npm start
```

Luego abre:

```text
http://localhost:3001
```

## Estructura del proyecto

```text
Tecnologias-1/
|-- backend/
|   `-- src/
|       `-- server.js
|-- frontend/
|   `-- public/
|       `-- index.html
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
|-- .gitignore
|-- package.json
`-- README.md
```

## Flujo recomendado para la presentacion

1. Empezar con `docs/00-introduccion`
2. Pasar a fundamentos en `docs/01-html-css`
3. Mostrar componentes y layout en `docs/02-frontend-frameworks`
4. Explicar servidor y API en `docs/03-backend-nodejs`
5. Demostrar la integracion en `frontend/public/index.html` consumiendo `/api/tecnologias`

## Que incluye la demo actual

- Un servidor en Node.js puro (`http`) que:
  - Sirve archivos estaticos desde `frontend/public`
  - Expone endpoint JSON: `/api/tecnologias`
- Una pagina HTML de prueba con Bootstrap que:
  - Muestra interfaz inicial
  - Consulta datos del backend usando `fetch()`

## Proximos pasos sugeridos

- Agregar diapositivas o guiones en cada carpeta de `docs/`
- Crear ejemplos practicos por tema (ej: formularios, tablas, rutas)
- Agregar una rama por modulo para mostrar la evolucion del proyecto
