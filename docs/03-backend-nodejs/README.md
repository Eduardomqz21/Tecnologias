# 03 - Backend con Node.js

Aquí se explica la parte que corre en el servidor.

## ¿Qué hace el backend?

El backend recibe peticiones, prepara respuestas y entrega información al frontend.

## Temas principales

1. Qué es un servidor HTTP.
2. Cómo responder texto o JSON.
3. Cómo servir archivos estáticos.
4. Cómo conectar el frontend con `fetch()`.

## Explicación simple

- El navegador hace una petición.
- El servidor la recibe.
- El servidor decide qué responder.
- El frontend muestra esa respuesta al usuario.

## Qué muestra este proyecto

- Un servidor hecho con `http` nativo de Node.js.
- Una ruta JSON en `/api/tecnologias`.
- Archivos estáticos dentro de `frontend/public`.
- Una demo en la portada que usa `fetch()` para traer datos.

## Qué debería entender una persona principiante

- Qué diferencia hay entre una página estática y una respuesta JSON.
- Por qué el servidor vive en otra carpeta.
- Cómo una interfaz puede pedir datos sin recargar toda la página.
