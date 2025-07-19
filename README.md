## 🛍️ Ecommerce Beauty Shop - Proyecto Final React

Este proyecto es una tienda online de productos de belleza desarrollada como entrega final para el curso de React. El objetivo fue aplicar conceptos avanzados como Context API, rutas protegidas, CRUD con Firebase, diseño responsivo y funcionalidades de búsqueda y paginación.

## 🚀 Tecnologías utilizadas

- ⚛️ React
- 🔥 Firebase (Firestore, Auth)
- 🎨 Bootstrap 5
- 💅 Styled-components
- 🔐 React Router DOM
- ☁️ React Helmet
- 🛎️ React Toastify
- 🔍 React Icons

---

## 🎯 Funcionalidades principales

### 1️⃣ Gestión del Carrito y Autenticación de Usuarios

#### 🛒 Carrito de Compras con Context API

- Uso de `CarritoContext` para mantener estado global.
- Agregar, eliminar o vaciar productos del carrito.
- Persistencia del carrito en la sesión actual.

#### 🔐 Autenticación de Usuarios

- `AuthContext` para manejar el estado de login.
- Login simulado con Firebase Auth.
- Almacenamiento del usuario autenticado en `localStorage`.
- Rutas protegidas para acceder al carrito y otras vistas privadas.

---

### 2️⃣ CRUD de Productos con Firebase

#### ➕ Formulario para Agregar Productos

- Formulario controlado con `useState`.
- Validaciones:
  - Nombre obligatorio.
  - Precio mayor a 0.
  - Descripción mínima de 10 caracteres.
- Envío de datos a Firestore con `addDoc`.

#### ✏️ Edición y Eliminación de Productos

- Actualización de productos con `updateDoc`.
- Eliminación de productos con `deleteDoc`.
- Modal de confirmación antes de eliminar.
- Mensajes de confirmación y error usando `React Toastify`.

#### ⚠️ Manejo de Errores

- Indicadores de carga mientras se consulta Firebase.
- Mensajes de error si ocurre un fallo al cargar o modificar datos.

---

### 3️⃣ Optimización de Diseño y Responsividad

#### 📱 Diseño Responsivo

- Sistema de grillas de **Bootstrap** para diferentes tamaños de pantalla.
- Uso de **styled-components** para personalización modular de estilos.

#### 💡 Interactividad Mejorada

- Uso de **React Icons** en botones y enlaces.
- **React Toastify** y **Sweet Alert** para notificaciones (éxito, error, info).

#### 🌐 SEO y Accesibilidad

- **React Helmet** para modificar dinámicamente el `<title>` y las etiquetas `<meta>`.
- Uso de etiquetas `aria-*` en botones interactivos para mejorar la accesibilidad.

---

### 4️⃣ Búsqueda y Paginación

#### 🔎 Barra de Búsqueda

- Búsqueda dinámica de productos por **nombre** o **categoría**.
- Resultados actualizados en tiempo real conforme el usuario escribe.

#### 📄 Paginación de Productos

- División del catálogo en páginas para mejorar la navegación.
- Controles para avanzar o retroceder entre páginas.

---

## 📁 Estructura del Proyecto

/src
/components
/contexts
/pages
/services (Firebase config)
App.js
index.js


---

## 🛠 Instalación y uso

1. Clonar el repositorio:

```bash
git clone https://DanielaG85/Entrega-Final-Ecommerce-React



