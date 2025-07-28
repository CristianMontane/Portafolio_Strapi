# Portafolio Personal - Full Stack con Strapi CMS y React

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Strapi](https://img.shields.io/badge/Strapi-5.19.0-2F2E8B?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.9-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x--22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/)

## Descripción del Proyecto

**Portafolio personal** construido con **React 19 + TypeScript** en el frontend y **Strapi CMS v5.19.0** como backend headless y arquitectura **atomica** en el frontend. 

### **Características Principales:**

#### 🏗️ **Arquitectura & Features**
![Atomic Design](https://img.shields.io/badge/Atomic_Design-Architecture-FF6B6B?style=flat-square&logo=react&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-4ECDC4?style=flat-square&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/Type-Safe-96CEB4?style=flat-square&logo=typescript&logoColor=white)

---

## 🤔 **REFLEXIONES SOBRE EL DESARROLLO**

### 💡 **1. ¿Qué aprendiste de nuevo durante esta prueba?**

![Strapi](https://img.shields.io/badge/First_Time-Strapi_CMS-2F2E8B?style=flat-square&logo=strapi&logoColor=white)
![Learning](https://img.shields.io/badge/Status-Learning-brightgreen?style=flat-square&logo=bookstack&logoColor=white)

Al ser mi primer acercamiento con un CMS como Strapi, pude entender todo su potencial y funcionalidad para futuros proyectos en los que necesite versatilidad y escalabilidad. Además, el entender cómo **los Content Types se auto-generan en endpoints RESTful** fue chevere - la capacidad de Strapi para crear automáticamente toda una API completa basada en los esquemas definidos elimina muchísimo código.


### 🚧 **2. ¿Qué obstáculos encontraste y cómo los resolviste?**

![Problem Solving](https://img.shields.io/badge/Skill-Problem_Solving-orange?style=flat-square&logo=stackoverflow&logoColor=white)
![TypeScript](https://img.shields.io/badge/Challenge-TypeScript_Types-3178C6?style=flat-square&logo=typescript&logoColor=white)

Tuve algunos problemas principalmente al momento de gestionar las respuestas de las llamadas a los endpoints y al tipar los mismos, debido a la enorme cantidad de información que retornan (campos anidados, relaciones, metadata). Sin embargo, lo logré solucionar gracias a videos de YouTube y documentación en la página oficial de Strapi. Tuve problemas también de tipos al renderizar Rich Text content, pero lo solucioné consultando la documentación oficial y creando interfaces TypeScript personalizadas


### 🔮 **3. ¿Qué mejorarías si tuvieras más tiempo?**

![Clean Architecture](https://img.shields.io/badge/Architecture-Clean_Architecture-blue?style=flat-square&logo=blueprint&logoColor=white)
![Testing](https://img.shields.io/badge/Testing-Jest_Cypress-red?style=flat-square&logo=testing-library&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-Multi_Language-green?style=flat-square&logo=google-translate&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Optimization-yellow?style=flat-square&logo=google&logoColor=white)

Implementaría una arquitectura más robusta como Clean Architecture, separando claramente las capas de presentación, casos de uso, y datos. 

En el aspecto técnico, agregaría internacionalización con react-i18next para soporte multi-idioma, implementaría testing completo con Jest/Cypress incluyendo unit tests, integration tests y E2E, mejoraría el SEO con server-side rendering usando Next.js o meta tags dinámicos. Desde Strapi, exploraría roles y permisos más granulares, implementaría webhooks para sincronización en tiempo real. 

En cuanto al contenido del portafolio, incluiría más información detallada de cada proyecto con tecnologías específicas y desafíos.

Finalmente, por cuestiones de tiempo no pude implementar una documentacion con **Storybook**, pero sería una excelente adición para documentar los componentes reutilizables y mejorar la experiencia de desarrollo.

### 🆕 **4. ¿Qué parte del stack no conocías antes?**

![New Tech](https://img.shields.io/badge/New_Tech-Strapi_CMS-2F2E8B?style=flat-square&logo=strapi&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Advanced-Framer_Motion_12-0055FF?style=flat-square&logo=framer&logoColor=white)
![TailwindCSS 4](https://img.shields.io/badge/Latest-TailwindCSS_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

Aunque antes había escuchado de Strapi, es la primera vez que lo uso en un proyecto real. Lo que más me impresionó fue el Content-Type Builder visual que permite crear esquemas complejos sin escribir código, el Admin Panel automático que genera una interfaz completa de administración. 

Además, trabajé con integraciones nuevas como Framer Motion 12 que proporciona un sistema de animaciones más avanzado que CSS transitions, TailwindCSS 4 con mejores performance y developer experience.

---


## 🚀 **GUÍA DE DESPLIEGUE**



### 📋 **Prerrequisitos**
- **Node.js** 20.x hasta la version 22.x (según engines en package.json)
- **npm** 6.x o superior  
- **Git** para clonar el repositorio

### 📦 **1. Instalación Inicial**

![Clone](https://img.shields.io/badge/Step_1-Clone_Repository-blue?style=flat-square&logo=git&logoColor=white)
![Install](https://img.shields.io/badge/Step_2-Install_Dependencies-green?style=flat-square&logo=npm&logoColor=white)

```bash
# Clonar repositorio
git clone git@github.com:CristianMontane/Portafolio_Strapi.git
cd Portafolio_Strapi

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend  
cd ../frontend
npm install
```

### ⚙️ **2. Configuración de Variables de Entorno**

![Environment](https://img.shields.io/badge/Config-Environment_Variables-yellow?style=flat-square&logo=dotenv&logoColor=white)
![Security](https://img.shields.io/badge/Security-API_Tokens-red?style=flat-square&logo=shield&logoColor=white)

#### 🔧 **Backend (.env)**
```bash
cd backend
cp .env.example .env
```

Edita el archivo `.env`:
```properties
# Server Configuration
PORT=4000
```

#### 🎨 **Frontend (.env.local)**
```bash
cd ../frontend
"VITE_STRAPI_HOST=http://localhost:4000`nVITE_STRAPI_TOKEN=tu_api_token_aqui" | Out-File -Encoding utf8 .env.local

```


### 🏃 **3. Ejecución en Desarrollo**

![Development](https://img.shields.io/badge/Mode-Development-brightgreen?style=flat-square&logo=webpack&logoColor=white)
![Hot Reload](https://img.shields.io/badge/Feature-Hot_Reload-orange?style=flat-square&logo=react&logoColor=white)

#### 🔹 **Paso 1: Iniciar Backend**
```bash
cd ../backend
npm run develop
```
- ✅ Strapi se ejecuta en `http://localhost:4000`
- ✅ Admin panel en `http://localhost:4000/admin`
- ✅ API disponible en `http://localhost:4000/api`

#### 🔹 **Paso 2: Configuración Inicial (Solo primera vez)**

![Setup](https://img.shields.io/badge/One_Time-Initial_Setup-purple?style=flat-square&logo=gear&logoColor=white)

1. **Crear usuario administrador**:
   - Ve a `http://localhost:4000/admin`
   - Registra tu cuenta de admin

2. **Importar datos de ejemplo** (opcional):
   ```bash
   cd backend
   npx strapi import -f portafolio-data.tar.gz --force
   ```

3. **Generar API Token**:
   - Settings → API Tokens → Create new API Token
   - **Name**: `Frontend Token`
   - **Token type**: `Read-Only` o `Full Access`
   - **Token duration**: `Unlimited`
   - ✅ **Copiar el token generado**

4. **Actualizar frontend .env.local**:
   ```bash
   VITE_STRAPI_TOKEN=el_token_copiado_aqui
   ```

#### 🔹 **Paso 3: Iniciar Frontend**
```bash
cd frontend
npm run dev
```
- ✅ React app en `http://localhost:5173`
- ✅ Hot-reload automático
