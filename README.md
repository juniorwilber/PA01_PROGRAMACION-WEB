# MYS Sistemas

Tienda virtual de productos tecnológicos (laptops, monitores, mouse, teclados y audífonos) hecha con **HTML5, CSS3, JavaScript y Bootstrap 5**.

> Proyecto académico del curso **Programación Web**, Universidad Continental.
> Consolidado 1 · Producto Académico N.º 1 · Unidad 1 · Actividad individual.
> Docente: Christian Alonso Vega Cervantes · NRC: 39409.

**Ver la página:** https://juniorwilber.github.io/PA01_PROGRAMACION-WEB/

## Cómo abrir el proyecto

- **Opción 1:** abrir `index.html` con doble clic en el navegador.
- **Opción 2 (recomendada para exponer):** en Visual Studio Code, instalar la extensión *Live Server*, hacer clic derecho en `index.html` y elegir **Open with Live Server**.

Se necesita conexión a internet porque Bootstrap y sus íconos se cargan desde un CDN.

## Secciones de la página

1. **Encabezado y menú:** logo de la tienda, enlaces y botón del carrito con contador.
2. **Bienvenida:** banner con la mascota, mensaje y botones.
3. **Productos:** 12 productos en tarjetas (Laptops, Monitores, Mouse, Teclados y Audífonos), con buscador y filtro por categoría.
4. **Sobre nosotros:** misión, visión, garantía y la mascota.
5. **Sucursales:** Brasil y La Cultura (Pichari) y Kimbiri, con enlace "Cómo llegar" a Google Maps.
6. **Contacto:** formulario validado con JavaScript y la mascota.
7. **Pie de página:** dirección, teléfono (965 213 718), correo (gerencia@myssistemas.com) y horario.
8. **Modal del carrito:** lista de productos, total, eliminar, vaciar y finalizar compra.

## Funcionalidades con JavaScript

| Funcionalidad | Función |
|---|---|
| Mostrar productos | `mostrarProductos()` |
| Buscar por nombre y filtrar por categoría | `buscarProductos()` |
| Agregar al carrito | `agregarAlCarrito()` |
| Calcular el total | `calcularTotal()` |
| Eliminar del carrito | `eliminarDelCarrito()` |
| Validar el formulario | `validarFormulario()` |
| Mostrar mensajes de confirmación | `mostrarMensaje()` |

El carrito se guarda en `localStorage`, así no se pierde al recargar la página. La compra es simulada: no se realiza ningún pago.

## Estructura de archivos

```
MYS-SISTEMAS/
├── index.html            → estructura de la página (todas las secciones)
├── css/
│   └── estilos.css       → estilos propios de la página
├── js/
│   └── script.js         → productos, búsqueda, carrito, formulario y mensajes
├── img/
│   ├── logo/             → logo-mys.png, favicon.png
│   ├── mascota/          → mascota-laptop.png (banner), mascota-brazos.png (nosotros), mascota-celular.png (contacto)
│   └── productos/        → 12 fotos: laptop-*, monitor-*, mouse-*, teclado-*, audifonos-*
└── README.md
```

Las fotos de productos se nombran como `categoria-marca-modelo.jpg` (ej.: `laptop-lenovo-v15.jpg`). Para agregar un producto, se copia su foto en `img/productos/` y se añade un objeto al array `productos` de `js/script.js`.

## Tecnologías

- **HTML5:** `header`, `nav`, `main`, `section`, `article`, `form` y `footer`.
- **CSS3:** variables de color, márgenes, bordes, sombras, Flexbox, Grid, hover y media queries.
- **JavaScript:** variables, arrays, objetos, funciones, condicionales, bucles, eventos y manipulación del DOM.
- **Bootstrap 5.3:** navbar, sistema de columnas, tarjetas, botones, formulario, tabla y modal, más Bootstrap Icons.

## Datos para probar el formulario

- Nombre: mínimo 3 letras.
- Correo: formato `nombre@dominio.com`.
- Celular: 9 dígitos que empiecen con 9 (por ejemplo, 965213718).
- Mensaje: mínimo 10 caracteres.

## Autor

**Wilber Quichua Puelles** – Ingeniería de Sistemas, cuarto ciclo, Universidad Continental.
