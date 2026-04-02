# 02 - Frontend Frameworks (Bootstrap)

Objetivo del modulo:
- Entender que problema resuelven los frameworks CSS/JS en proyectos reales.
- Dominar Bootstrap 5 para construir interfaces modernas y responsivas.
- Preparar base visual consistente para integrar alertas con SweetAlert2.

## Ruta sugerida de clase

1. Por que usar un framework frontend
- Estandariza layout, tipografia y componentes.
- Reduce tiempo de desarrollo visual.
- Mejora consistencia entre pantallas.

2. Bootstrap: mapa completo
- Getting started: CDN, doctype, viewport, mobile first.
- Layout: containers, grid, breakpoints, gutters.
- Content: tipografia, tablas, imagenes.
- Forms: controles, checks/radios, select, validacion.
- Components: accordion, alerts, badges, buttons, cards, carousel, collapse, dropdown,
	list group, modal, navbar, offcanvas, pagination, progress, spinners, toasts,
	tooltips y popovers.
- Helpers: ratio, position, visually-hidden, focus-ring, stretched-link.
- Utilities: spacing, flex, display, text, color, borders, shadow, sizing.

### Componentes oficiales Bootstrap 5 (lista completa para exposicion)

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

## Metodologia para cada componente en clase

Para mantener el mismo estilo de la documentacion oficial:

1. Definicion corta: para que sirve en UX/UI.
2. Ejemplo visual renderizado: para verlo en contexto.
3. Codigo minimo: para copiar y pegar.
4. Nota de uso real: cuando conviene usarlo y cuando no.

## Explicacion ampliada del formulario

Problema comun detectado:
- "No cambia nada" pasa cuando solo se usa `checkValidity()` sin aplicar clases visuales.

Solucion aplicada:
- Se agrega `needs-validation` y `novalidate` al formulario.
- En envio se aplica `was-validated`.
- En cada input/select se alterna `is-valid` / `is-invalid` en tiempo real.
- Se mantiene feedback con SweetAlert2 para exito/error.

Resultado:
- El usuario ahora ve cambios claros en campos (verde/rojo) al escribir y al enviar.

3. Comparacion breve con React, Vue y Angular
- Bootstrap: solucion UI inmediata basada en clases.
- React/Vue/Angular: solucion de arquitectura y estado para aplicaciones complejas.

4. Criterio de eleccion
- Sitio informativo o dashboard simple: Bootstrap + JS ligero.
- App compleja con estado y rutas avanzadas: framework completo.

## Recursos del proyecto

- Guia interactiva principal:
	- `frontend/public/bootstrap-seleccion.html`
- Portada actualizada:
	- `frontend/public/index.html`

## Convencion para paginas nuevas

- Todas las paginas deben ser modernas y responsivas por defecto.
- Incluir feedback visual claro en acciones del usuario.
- Priorizar SweetAlert2 para confirmaciones, errores y estado de procesos.
