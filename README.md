# 🌟 Aprende Tarifit - PWA Educativa

Una Progressive Web App (PWA) moderna y colorida para aprender **Tarifit** (Tamazight Rifeño), el idioma bereber hablado en la región del Rif en Marruecos.

## ✨ Características

### 📚 Contenido Educativo
- **7 Categorías de Vocabulario:**
  - 🔢 Números (1-100)
  - 🦁 Animales
  - 🎨 Colores
  - 👨‍👩‍👧‍👦 Familia
  - 🏠 Casa y objetos del hogar
  - 🍽️ Comida y bebidas
  - 💬 Frases comunes y saludos

### 🎯 Funcionalidades

#### Flashcards Interactivas
- Tarjetas con palabra en español y traducción en Tarifit
- Guía de pronunciación fonética
- Sistema de seguimiento de progreso (Lo sé / Aprendiendo / No lo sé)
- Navegación con teclado (flechas, espacio, números)

#### Juego de Memoria
- Empareja palabras en español con su traducción en Tarifit
- Contador de movimientos y tiempo
- Sistema de puntos con bonificaciones
- 8 parejas aleatorias en cada partida

#### Sistema de Progreso
- Seguimiento individual por categoría
- Racha de días consecutivos 🔥
- Sistema de puntos ⭐
- Guardado automático en localStorage

### 🎨 Diseño

- **Interfaz moderna y minimalista** con gradientes vibrantes
- **Modo oscuro** por defecto con colores cuidadosamente seleccionados
- **Animaciones suaves** y micro-interacciones
- **Diseño responsive** para móvil, tablet y escritorio
- **Glassmorphism** y efectos visuales premium

### 📱 PWA Features

- ✅ Instalable en dispositivos móviles y escritorio
- ✅ Funciona offline (Service Worker)
- ✅ Carga rápida con caché inteligente
- ✅ Icono personalizado y splash screen

## 🚀 Uso

### Instalación Local

1. Abre `index.html` en tu navegador
2. La aplicación funciona directamente sin necesidad de servidor

### Instalación como PWA

1. Abre la aplicación en Chrome, Edge o Safari
2. Busca el icono de "Instalar" en la barra de direcciones
3. Haz clic en "Instalar"
4. ¡Listo! Ahora puedes usar la app como una aplicación nativa

## ⌨️ Atajos de Teclado (Flashcards)

- `←` / `→` - Navegar entre tarjetas
- `Espacio` - Voltear tarjeta
- `1` - Marcar como "Lo sé"
- `2` - Marcar como "Aprendiendo"
- `3` - Marcar como "No lo sé"

## 🎯 Sistema de Puntos

- **+10 puntos** - Marcar palabra como conocida
- **+5 puntos** - Marcar palabra como aprendiendo
- **+20 puntos** - Cada pareja correcta en el juego
- **Bonificación** - Completar el juego rápido y con pocos movimientos

## 📂 Estructura del Proyecto

```
TAMAZIGHT/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── app.js             # Lógica de la aplicación
├── data.js            # Base de datos de vocabulario
├── manifest.json      # Configuración PWA
├── sw.js             # Service Worker para offline
└── README.md         # Este archivo
```

## 🌍 Sobre el Idioma Tarifit

El **Tarifit** (también conocido como Tamazight Rifeño o Riffian) es una variante del bereber hablada principalmente en la región del Rif en el norte de Marruecos. Es parte de la familia de lenguas amazigh (bereberes) y es hablado por millones de personas en Marruecos y la diáspora.

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con variables CSS y animaciones
- **JavaScript ES6+** - Lógica de aplicación
- **PWA APIs** - Service Worker, Web App Manifest
- **LocalStorage** - Persistencia de datos
- **Capacitor** - Framework para convertir PWA en app nativa

## 📱 Compilar como App Android

Para convertir esta PWA en una aplicación Android nativa, consulta la guía detallada:

**[📖 Guía de Compilación Android](ANDROID_BUILD.md)**

La guía incluye:
- Instalación de dependencias (Node.js, Android Studio)
- Configuración de Capacitor
- Generación de APK
- Publicación en Google Play Store

**Comandos rápidos:**
```bash
npm install              # Instalar dependencias
npx cap add android      # Añadir plataforma Android
npx cap sync            # Sincronizar archivos
npx cap open android    # Abrir en Android Studio
```

## 📝 Notas

- El vocabulario y las pronunciaciones han sido investigadas y compiladas para proporcionar una introducción precisa al idioma
- La aplicación guarda tu progreso automáticamente en el navegador
- No se requiere conexión a internet después de la primera carga

## ❤️ Contribuciones

Este proyecto es educativo y de código abierto. Si encuentras errores en las traducciones o pronunciaciones, o tienes sugerencias para mejorar la aplicación, ¡las contribuciones son bienvenidas!

---

**Hecho con ❤️ para preservar y promover el idioma Tarifit**

*Azul! (¡Hola en Tarifit!)* 🌟
