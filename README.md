# DonaVida Web Application

DonaVida es una aplicación web creada como respuesta a la emergencia humanitaria provocada por los terremotos ocurridos en Venezuela. Su objetivo es centralizar información confiable sobre campañas de donación de sangre y bancos de sangre en todo el país, facilitando que las personas encuentren dónde y cómo donar cuando más se necesita.

Actualmente, el proyecto está siendo desarrollado por un equipo multidisciplinario como parte de la iniciativa **Build4Venezuela**.

---

# 🌍 Acerca del proyecto

Tras los terremotos ocurridos en Venezuela, acceder a información confiable sobre campañas de donación de sangre se convirtió en un desafío. En muchos casos, la información se encontraba dispersa entre publicaciones en redes sociales, dificultando localizar campañas activas, bancos de sangre y fuentes oficiales.

DonaVida busca solucionar este problema mediante una plataforma centralizada donde cualquier persona pueda encontrar oportunidades para donar sangre de forma rápida, sencilla y confiable.

Aunque el proyecto surge durante una emergencia, su arquitectura está pensada para servir como base para futuras iniciativas humanitarias que requieran gestionar campañas de donación.

---

# 🎯 Objetivos

El propósito principal de DonaVida es facilitar el acceso a información sobre donación de sangre mediante:

- Un directorio centralizado de campañas de donación.
- Un buscador de bancos de sangre en todo el territorio venezolano.
- Información de contacto y fuentes oficiales verificadas.
- Herramientas administrativas para mantener la información actualizada.
- Una interfaz responsiva accesible desde computadores, tablets y dispositivos móviles.

---

# ✨ Funcionalidades actuales

El proyecto se encuentra actualmente en desarrollo.

Hasta el momento cuenta con:

- Estructura base utilizando React + Vite.
- Arquitectura modular del frontend.
- Navegación mediante React Router.
- Componentes reutilizables.
- Interfaz responsiva construida con Bootstrap.
- Capa de servicios preparada para consumir la API.
- Uso de datos simulados (Mock Data) durante el desarrollo.

---

# 🚧 Funcionalidades planificadas

Entre las funcionalidades que actualmente se encuentran en desarrollo se incluyen:

- 🔍 Búsqueda de campañas de donación de sangre en Venezuela.
- 🩸 Consulta de bancos de sangre con información de contacto y horarios.
- 📍 Filtros por estado, ciudad y grupo sanguíneo.
- 📢 Visualización de campañas activas.
- 📖 Secciones de preguntas frecuentes y requisitos para donar.
- 🔐 Sistema de autenticación para administradores.
- 📊 Dashboard administrativo.
- 📁 Importación masiva de campañas mediante archivos CSV y XLSX.
- 🔗 Enlaces directos a fuentes oficiales de cada campaña.

---

# 🏛️ Arquitectura del Frontend

El proyecto sigue una arquitectura modular que separa las páginas, los componentes reutilizables y la comunicación con el backend.

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── AppNavbar.jsx
│   │   └── AppFooter.jsx
│   └── ui/
│       ├── SiteCard.jsx
│       ├── Bankfilter.jsx
│       ├── Hero.jsx
│       ├── Searchbarhero.jsx
│       └── LoadingSpinner.jsx
├── pages/
│   ├── PublicPage.jsx
│   ├── Login.jsx
│   └── AdminPage.jsx
├── services/
│   └── api.js
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

## Principios de la arquitectura

- Las páginas organizan el flujo principal de la aplicación.
- Los componentes de **Layout** contienen los elementos compartidos como la barra de navegación y el pie de página.
- Los componentes de **UI** son reutilizables y pueden utilizarse en diferentes vistas.
- Toda la comunicación con la API se concentra en la carpeta `services`.
- Durante el desarrollo se utilizan datos simulados para desacoplar el frontend del backend.

Esta organización facilita el mantenimiento y permite que la aplicación crezca de forma ordenada.

---

# ⚙️ Tecnologías utilizadas

## Frontend

- React
- Vite
- Bootstrap
- Bootstrap Icons
- React Router
- Axios

---

# 🧩 Retos técnicos

Uno de los principales desafíos durante el desarrollo ha sido diseñar una arquitectura frontend escalable que permita incorporar nuevas funcionalidades sin comprometer el mantenimiento del proyecto.

Desde el inicio se ha buscado mantener una estructura modular preparada para integrar posteriormente:

- Backend
- Autenticación
- Actualización de información en tiempo real
- Herramientas administrativas

---

# 🔄 Integración con el Backend

El backend del proyecto se encuentra actualmente en desarrollo.

Sin embargo, el frontend ya fue organizado para facilitar su integración mediante una capa de servicios (`services/api.js`), manteniendo desacoplada la lógica de comunicación con la interfaz gráfica.

Los desarrolladores interesados en colaborar con el backend son bienvenidos siguiendo la arquitectura definida para el proyecto.

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/ALYSONCASTIBLANCO/DonaVidaFrontend.git
```

## Ingresar al proyecto

```bash
cd DonaVidaFrontend
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

Actualmente el proyecto no requiere variables de entorno adicionales.

---

# 🤝 Cómo contribuir

Las contribuciones son bienvenidas.

Puedes colaborar en diferentes áreas como:

- Desarrollo Frontend
- Desarrollo Backend
- Mejoras de UI/UX
- Accesibilidad
- Documentación
- Optimización del rendimiento
- Corrección de errores

Si deseas participar, puedes abrir un **Issue** o enviar un **Pull Request**.

---

# 📸 Capturas de pantalla

> *(Agregar imágenes conforme avance el desarrollo.)*

Capturas sugeridas:

- Página principal
- Buscador de campañas
- Información de bancos de sangre
- Dashboard administrativo
- Login
- Vista responsive

---

# 👥 Equipo de desarrollo

Este proyecto está siendo desarrollado por un equipo multidisciplinario como parte de **Build4Venezuela**.

Las contribuciones son bienvenidas mediante **Issues** y **Pull Requests**.

---

# 📄 Aviso

Este proyecto se encuentra actualmente en fase de desarrollo y debe considerarse un **MVP (Minimum Viable Product)**.

Las funcionalidades, la arquitectura y la documentación podrán evolucionar conforme avance el desarrollo.