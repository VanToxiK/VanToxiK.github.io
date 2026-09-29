# Portfolio · Iván Marcos Couso

Web personal de una sola página, estática (HTML + CSS + un poco de JS),
pensada para publicarse en GitHub Pages.

## Estructura

```
index.html       Contenido de la página principal
guias/           Guías de soporte IT N1: índice con buscador y 12 guías
                 (una página HTML por guía, todas con la misma estructura)
css/styles.css   Estilos y variables de tema (claro/oscuro)
js/main.js       Lógica del botón de cambio de tema
js/guias.js      Buscador del índice de guías
```

## Guías de soporte IT N1

Base de conocimiento en `guias/` con 12 guías para Windows 10/11 y Microsoft 365
(red, hardware y periféricos, sistema, cuentas y correo, seguridad). El índice
(`guias/index.html`) tiene un buscador que funciona con `js/guias.js`; sin
JavaScript se ve la lista completa. Todas las guías siguen la misma plantilla
(ver `CLAUDE.md`).

## Cómo verla en local

Abre el archivo `index.html` directamente con tu navegador (doble clic, o
clic derecho → Abrir con → tu navegador).

## Publicación

Pensada para GitHub Pages. Sin dependencias ni pasos de compilación: basta
con subir estos archivos a un repositorio.
