# 02 - Frontend Frameworks (Bootstrap)

Esta sección explica Bootstrap de una forma práctica y fácil de seguir.

## ¿Qué es Bootstrap?

Bootstrap es una colección de clases y componentes que ayuda a construir interfaces modernas sin escribir todo el CSS desde cero.

## ¿Por qué usarlo?

- Ahorra tiempo.
- Da un diseño más uniforme.
- Ayuda a que la página se vea bien en móvil, tablet y escritorio.

## Qué debe aprender una persona nueva

1. Cómo incluir Bootstrap en una página.
2. Cómo usar el grid para ordenar contenido.
3. Cómo usar componentes listos como botones, alertas, tarjetas y formularios.
4. Cómo usar utilidades para ajustar espacio, color y alineación.

## Mapa de Bootstrap 5

- **Getting started**: cómo iniciar con CDN, doctype y viewport.
- **Layout**: contenedores, filas, columnas y breakpoints.
- **Content**: tipografía, tablas e imágenes.
- **Forms**: inputs, selects, checks, radios y validación.
- **Components**: accordion, alerts, badges, buttons, cards, carousel, collapse, dropdowns, list group, modal, navbar, offcanvas, pagination, placeholders, popovers, progress, scrollspy, spinners, toasts y tooltips.
- **Helpers**: helpers para accesibilidad, proporciones y enlaces extendidos.
- **Utilities**: clases rápidas para espaciado, flex, texto, color, bordes y más.

## Lista completa de componentes

- Accordion
- Alerts
- Badge
- Breadcrumb
- Buttons
- Button group
- Card
- Carousel
- Close button
- Collapse
- Dropdowns
- List group
- Modal
- Navs and tabs
- Navbar
- Offcanvas
- Pagination
- Placeholders
- Popovers
- Progress
- Scrollspy
- Spinners
- Toasts
- Tooltips

## Cómo estudiar cada componente

Para cada uno conviene repetir este orden:

1. Leer la idea general.
2. Ver el ejemplo visual.
3. Revisar el código mínimo.
4. Pensar en un caso real donde se usaría.

## Formularios y validación visual

En la práctica, un formulario no solo debe capturar datos. También debe decirle al usuario qué está bien y qué está mal.

La guía interactiva aplica este flujo:

- `needs-validation` para activar el estilo de validación.
- `novalidate` para controlar el comportamiento desde JavaScript.
- `was-validated` cuando se envía el formulario.
- `is-valid` y `is-invalid` para mostrar el estado de cada campo.
- SweetAlert2 para reforzar el mensaje final.

## Cuándo usar Bootstrap y cuándo no

- Sitio informativo, landing, panel simple o prototipo: Bootstrap funciona muy bien.
- Aplicación muy grande con lógica compleja de estado: probablemente necesites una arquitectura más completa.

## Recursos del proyecto

- Guía de Bootstrap: [frontend/public/bootstrap-seleccion.html](frontend/public/bootstrap-seleccion.html)
- Guía de SweetAlert2: [frontend/public/sweetalert2-seleccion.html](frontend/public/sweetalert2-seleccion.html)
- Portada general: [frontend/public/index.html](frontend/public/index.html)
