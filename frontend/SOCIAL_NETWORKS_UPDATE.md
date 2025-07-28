# Portafolio Frontend - Actualización de Redes Sociales

## 🔄 Cambios Realizados

### ✅ Integración de Redes Sociales desde Strapi

Se ha actualizado la aplicación para obtener las redes sociales directamente desde la API de Strapi en lugar de usar datos mockeados.

#### **Campos Agregados en Strapi**
```json
{
  "networks": {
    "github": "https://github.com/CristianMontane",
    "linkedin": "https://www.linkedin.com/in/daniel-montañez-527906185",
    "correo": "cristianme65@gmail.com"
  }
}
```

#### **Query API Actualizada**
```http
GET /api/home?fields[0]=title&fields[1]=description&populate[photo][fields][0]=url&fields[2]=networks
```

### 🏗️ Arquitectura Actualizada

#### **1. Tipos TypeScript Actualizados**
- `StrapiNetworks`: Interface para las redes sociales de Strapi
- `StrapiHomeData`: Incluye el campo `networks`
- `HomeData`: Incluye `socialLinks` procesadas

#### **2. Función API Mejorada**
- `convertNetworksToSocialLinks()`: Convierte formato Strapi a formato frontend
- Manejo automático de formato de email (agrega `mailto:` si es necesario)
- Mapeo de iconos correspondientes

#### **3. Componentes Actualizados**
- `HomePageContent`: Usa `homeData.socialLinks` en lugar de mock data
- Eliminada dependencia de `socialLinks` del mock data

### 📊 Flujo de Datos Actualizado

```
Strapi API (networks)
    ↓
getHomeData() (conversión)
    ↓
HomeData (socialLinks procesadas)
    ↓
HomePageContent (renderizado)
    ↓
SocialLinks (iconos y enlaces)
```

### 🎯 Beneficios

1. **Datos Dinámicos**: Las redes sociales se gestionan desde Strapi
2. **Flexibilidad**: Fácil actualización sin cambiar código
3. **Consistencia**: Misma arquitectura que otros datos
4. **Mantenibilidad**: Centralización de datos en Strapi

### 🔧 Uso

```typescript
// Los datos ahora incluyen socialLinks automáticamente
const { homeData, loading, error } = useHomeData();

// homeData.socialLinks contiene:
// [
//   { name: "GitHub", url: "https://github.com/...", icon: "github" },
//   { name: "LinkedIn", url: "https://linkedin.com/...", icon: "linkedin" },
//   { name: "Email", url: "mailto:...", icon: "mail" }
// ]
```

### 🚀 Estado Actual

- ✅ Redes sociales desde Strapi funcionando
- ✅ Conversión automática de formatos
- ✅ Iconos mapeados correctamente
- ✅ Email con formato `mailto:` automático
- ✅ Arquitectura mantenida y escalable

### 📝 Próximos Pasos

1. Probar la integración completa
2. Extender a proyectos y tecnologías
3. Agregar más tipos de redes sociales si es necesario
