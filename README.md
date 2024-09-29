![Logo de la aplicación](./assets/logo_ej_2.svg)

# Ejercicio 2: Estilos CSS - Sitio web sobre programación

El principal objetivo de este ejercicio es practicar el **CSS** para la creación de estilos visualmente atractivos y funcionales.

Puedes acceder a la aplicación en el siguiente enlace:
[]()

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Lógica de Programación en `main.js`](#lógica-de-programación-en-mainjs)
   - [Carga de Componentes HTML](#carga-de-componentes-html)
   - [Proceso Paso a Paso](#proceso-paso-a-paso)
   - [Ejemplo de Código](#ejemplo-de-código)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
   - [Secciones del Sitio Web](#secciones-del-sitio-web)
5. [Instalación](#instalación)
6. [Uso](#uso)
7. [Ignorar Archivos](#ignorar-archivos)
8. [Contribución](#contribución)
9. [Licencia](#licencia)

## Descripción

Este proyecto es un sitio web dedicado a contenido sobre lenguajes de programación, diseñado para practicar y perfeccionar **habilidades en CSS**. Abarca la evolución de las páginas web, herramientas tecnológicas esenciales, y conceptos como páginas web, sitios web y portales.

Construido con **Vanilla JavaScript**, integra dinámicamente sus secciones a través de fetch en **main.js**, incluyendo encabezado, introducción, herramientas, botones interactivos, y código **HTML/CSS**, todo con un enfoque en estilización adaptable y centrada en el usuario.

## Lógica de Programación en `main.js`

El archivo `main.js` se encarga de cargar dinámicamente diferentes secciones de la página web, dividiendo el código HTML en componentes modulares que se almacenan en archivos separados. Esta estructura modular facilita la gestión y el mantenimiento del código.

### Carga de Componentes HTML

Para cargar las secciones en la página principal, se utiliza la función `fetch()`, la cual realiza una solicitud HTTP a los archivos HTML ubicados en la carpeta de `components`. Una vez que el archivo es obtenido, su contenido se inserta dinámicamente en los elementos `div` correspondientes dentro del archivo `index.html`.

### Proceso Paso a Paso:

1. **Identificación del contenedor**:
   Cada componente de la página tiene un contenedor asignado con un `id` específico (por ejemplo, `header`, `introduction`, `tools`, etc.). Estos `div` están previamente definidos en el archivo `index.html`.

2. **Solicitud de contenido**:
   Con la función `fetch()`, el script solicita el contenido HTML de cada uno de los componentes ubicados en la carpeta `components`.

3. **Inserción dinámica**:
   Una vez recibido el contenido HTML mediante el método `.then()`, este se inserta en el contenedor correspondiente usando `innerHTML`.

### Ejemplo de Código:

```javascript
fetch("/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
```

## Estructura de Archivos

El proyecto está organizado en la siguiente estructura de archivos:

```plaintext
├── assets/
│ └── logo_ej_2.svg             # Ícono de la página
├── components/                 # Fragmentos de código html
│ ├── header.html
│ ├── introduction.html
│ ├── tools.html
│ ├── buttons.html
│ ├── html.html
│ ├── css.html
│ └── footer.html
├── scripts/                    # Archivo de lógica de carga de freagmentos y EventListeners
│ └── main.js
├── styles/                     # Archivo de estilos
│ └── styles.css
├── index.html                  # Página principal del sitio
├── README.md                   # Documentación del proyecto
└── .gitignore                  # Archivos a no ser incluido en git
```

## Tecnologías Utilizadas

- **HTML5**: La estructura de la aplicación.
- **CSS3**: Estilos y diseño de la interfaz.
- **JavaScript (Vanilla)**: Para la integración dinámica de las secciones.
- **Font Awesome**: Para los íconos en la interfaz.
- **Google Fonts**: Para importar la fuente "Titillium Web".
- **Assets**: Carpeta que contiene el logo del sitio web.
- **Components**: Carpetas con los diferentes fragmentos de código HTML.
- **Fetch**: Función utilizada para integrar dinámicamente los componentes en el `index.html`.

### Secciones del Sitio Web

1. **Header**: Contiene el logo y el menú de navegación.
2. **Introduction**: Breve introducción sobre la importancia de los lenguajes de programación.
3. **Tools**: Herramientas tecnológicas mencionadas.
4. **Buttons**: Sección con botones interactivos.
5. **HTML**: Explicación sobre el lenguaje HTML.
6. **CSS**: Descripción de CSS y su rol en el diseño web.
7. **Footer**: Información de contacto y enlaces adicionales.

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
```

Abre el archivo **index.html** en tu navegador para ver la página.

## Uso

La página es estática y no requiere instalación adicional de dependencias. Simplemente abre el archivo `index.html` en cualquier navegador para visualizar el contenido.

## Ignorar Archivos

El archivo `.gitignore` está configurado para ignorar:

- Archivos `.json`
- Archivos de configuración de **VSCode**

## Contribución

Si deseas contribuir, por favor realiza un fork del repositorio y crea un pull request con tus cambios.

## Licencia

Este proyecto está bajo la licencia **MIT**.
