# 📱 Guía de Compilación Android - Aprende Tarifit

Esta guía te ayudará a convertir la PWA de Tarifit en una aplicación Android nativa usando Capacitor.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### 1. Node.js y npm
- **Node.js 16 o superior**
- Descarga desde: https://nodejs.org/
- Verifica la instalación:
  ```bash
  node --version
  npm --version
  ```

### 2. Android Studio
- **Android Studio** (última versión)
- Descarga desde: https://developer.android.com/studio
- Durante la instalación, asegúrate de instalar:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device (para emulador)

### 3. Java Development Kit (JDK)
- **JDK 17** (recomendado)
- Android Studio incluye JDK, pero puedes instalarlo por separado si es necesario

### 4. Variables de Entorno (Windows)
Configura las siguientes variables de entorno:

```
ANDROID_HOME = C:\Users\TuUsuario\AppData\Local\Android\Sdk
JAVA_HOME = C:\Program Files\Android\Android Studio\jbr
```

Añade a PATH:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%JAVA_HOME%\bin
```

---

## 🚀 Paso 1: Instalación de Dependencias

Abre PowerShell o CMD en la carpeta del proyecto (`TAMAZIGHT`) y ejecuta:

```bash
npm install
```

Esto instalará:
- `@capacitor/core` - Core de Capacitor
- `@capacitor/cli` - Herramientas de línea de comandos
- `@capacitor/android` - Plataforma Android
- `@capacitor/splash-screen` - Plugin de splash screen
- `@capacitor/status-bar` - Plugin de barra de estado

**Tiempo estimado:** 2-3 minutos

---

## 🔧 Paso 2: Inicializar Capacitor

Ejecuta el siguiente comando para inicializar Capacitor:

```bash
npx cap init "Aprende Tarifit" "com.tarifit.app" --web-dir .
```

**Parámetros:**
- `"Aprende Tarifit"` - Nombre de la aplicación
- `"com.tarifit.app"` - Package ID (identificador único)
- `--web-dir .` - Directorio actual como carpeta web

> **Nota:** Si ya existe `capacitor.config.json`, este paso se saltará automáticamente.

---

## 📱 Paso 3: Añadir Plataforma Android

Añade la plataforma Android al proyecto:

```bash
npx cap add android
```

Esto creará una carpeta `android/` con todo el proyecto Android nativo.

**Tiempo estimado:** 1-2 minutos

---

## 🔄 Paso 4: Sincronizar Archivos

Cada vez que modifiques archivos web (HTML, CSS, JS), debes sincronizar:

```bash
npx cap sync
```

O específicamente para Android:

```bash
npx cap sync android
```

Este comando:
1. Copia todos los archivos web a la carpeta Android
2. Actualiza plugins nativos
3. Sincroniza configuración

---

## 🏗️ Paso 5: Abrir en Android Studio

Abre el proyecto en Android Studio:

```bash
npx cap open android
```

Android Studio se abrirá automáticamente con el proyecto.

**Primera vez:**
- Android Studio puede tardar varios minutos en indexar el proyecto
- Puede descargar dependencias de Gradle automáticamente
- Espera a que termine el proceso de "Gradle Build"

---

## ▶️ Paso 6: Ejecutar en Emulador o Dispositivo

### Opción A: Emulador Android

1. En Android Studio, haz clic en **Device Manager** (icono de teléfono)
2. Crea un nuevo dispositivo virtual (AVD):
   - Selecciona un dispositivo (ej: Pixel 5)
   - Selecciona una imagen del sistema (ej: Android 13 - API 33)
   - Finaliza la configuración
3. Inicia el emulador
4. Haz clic en el botón **Run** (▶️) en Android Studio

### Opción B: Dispositivo Físico

1. Activa **Opciones de Desarrollador** en tu Android:
   - Ve a Ajustes → Acerca del teléfono
   - Toca 7 veces en "Número de compilación"
2. Activa **Depuración USB**:
   - Ve a Ajustes → Opciones de desarrollador
   - Activa "Depuración USB"
3. Conecta tu dispositivo por USB
4. Acepta el mensaje de autorización en el teléfono
5. En Android Studio, selecciona tu dispositivo y haz clic en **Run** (▶️)

---

## 📦 Paso 7: Generar APK para Distribución

### APK de Debug (para pruebas)

```bash
cd android
./gradlew assembleDebug
```

La APK se generará en:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

### APK de Release (para producción)

#### 7.1. Crear Keystore (solo primera vez)

```bash
keytool -genkey -v -keystore tarifit-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias tarifit-key
```

Guarda el archivo `.jks` en un lugar seguro y **anota la contraseña**.

#### 7.2. Configurar Firma en Android Studio

1. En Android Studio: **Build → Generate Signed Bundle / APK**
2. Selecciona **APK**
3. Haz clic en **Create new...** o selecciona tu keystore existente
4. Completa los datos:
   - Key store path: ruta a tu `.jks`
   - Key store password: tu contraseña
   - Key alias: `tarifit-key`
   - Key password: tu contraseña
5. Selecciona **release** como Build Variant
6. Marca **V1 (Jar Signature)** y **V2 (Full APK Signature)**
7. Haz clic en **Finish**

La APK firmada se generará en:
```
android/app/release/app-release.apk
```

---

## 🧪 Paso 8: Probar Funcionalidad Offline

1. Instala la APK en tu dispositivo
2. Abre la app y navega por todas las secciones
3. **Desactiva WiFi y datos móviles**
4. Cierra y vuelve a abrir la app
5. Verifica que todo funcione correctamente:
   - ✅ Categorías carguen
   - ✅ Flashcards funcionen
   - ✅ Juego de memoria funcione
   - ✅ Progreso se guarde

---

## 🔍 Depuración con Chrome DevTools

Puedes depurar la app Android usando Chrome:

1. Conecta tu dispositivo o inicia el emulador
2. Ejecuta la app
3. Abre Chrome y ve a: `chrome://inspect`
4. Selecciona tu app de la lista
5. Haz clic en **Inspect**

Ahora puedes usar las DevTools para ver console.log, inspeccionar elementos, etc.

---

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Sincronizar cambios web
npm run sync

# Abrir Android Studio
npm run open:android

# Sincronizar y abrir (todo en uno)
npm run build:android

# Actualizar Capacitor y plugins
npm run update

# Limpiar y reconstruir (si hay problemas)
cd android
./gradlew clean
cd ..
npx cap sync
```

---

## ❗ Solución de Problemas Comunes

### Error: "ANDROID_HOME not set"
**Solución:** Configura la variable de entorno ANDROID_HOME apuntando a tu SDK de Android.

### Error: "Gradle build failed"
**Solución:** 
1. Abre Android Studio
2. Ve a File → Invalidate Caches / Restart
3. Espera a que reindexe
4. Intenta de nuevo

### Error: "Unable to locate adb"
**Solución:** Añade `%ANDROID_HOME%\platform-tools` a tu PATH.

### La app no carga correctamente
**Solución:**
1. Verifica que `webDir` en `capacitor.config.json` sea `"."`
2. Ejecuta `npx cap sync` de nuevo
3. Limpia el proyecto: `cd android && ./gradlew clean`

### Service Worker no funciona
**Solución:** Los Service Workers funcionan automáticamente en Capacitor. Si hay problemas:
1. Verifica que las rutas en `sw.js` sean relativas (`./`)
2. Limpia caché de la app en Android: Ajustes → Apps → Aprende Tarifit → Almacenamiento → Borrar caché

### Cambios no se reflejan
**Solución:** Siempre ejecuta `npx cap sync` después de modificar archivos web.

---

## 📊 Tamaño de la APK

- **Debug APK:** ~7-10 MB
- **Release APK:** ~5-7 MB (después de optimización)

---

## 🚀 Publicar en Google Play Store

1. Genera APK de release firmada (Paso 7.2)
2. Crea una cuenta de desarrollador en Google Play Console
3. Crea una nueva aplicación
4. Completa la información de la tienda
5. Sube la APK firmada
6. Completa el cuestionario de contenido
7. Envía para revisión

**Costo:** $25 USD (pago único) para cuenta de desarrollador

---

## 📝 Notas Importantes

> **Package ID único:** `com.tarifit.app` debe ser único en Google Play. Si ya existe, cámbialo en `capacitor.config.json`.

> **Versionado:** Actualiza la versión en `android/app/build.gradle` antes de cada release:
> ```gradle
> versionCode 1
> versionName "1.0.0"
> ```

> **Permisos:** La app no requiere permisos especiales. Todo funciona offline con localStorage.

> **Iconos:** Capacitor genera iconos automáticamente, pero puedes personalizarlos en `android/app/src/main/res/`.

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] La app funciona en emulador
- [ ] La app funciona en dispositivo físico
- [ ] Funcionalidad offline confirmada
- [ ] Todas las categorías funcionan
- [ ] Juego de memoria funciona
- [ ] Progreso se guarda correctamente
- [ ] APK firmada generada
- [ ] Versión actualizada en build.gradle
- [ ] Iconos y splash screen correctos
- [ ] Probado en diferentes versiones de Android (mínimo API 22)

---

## 🎉 ¡Listo!

Tu app **Aprende Tarifit** está lista para ser distribuida. Si tienes problemas, revisa la sección de solución de problemas o consulta la documentación oficial de Capacitor: https://capacitorjs.com/docs

**¡Buena suerte con tu app!** 🌟
