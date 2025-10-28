# Portafolio Digital - Isabel Palacios

Portafolio profesional desarrollado con Vue.js 3, destacando experiencia en desarrollo Odoo y Frontend.

## 🚀 Características

- **Diseño Moderno**: Interfaz inspirada en UI futuristas (estilo Tony Stark) con animaciones interactivas
- **Colores Odoo**: Paleta de colores oficial de Odoo (#875A7C, #704B64, #A6839F)
- **100% Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **Animaciones Fluidas**: Efectos de hover, transiciones y animaciones CSS personalizadas
- **Componentes Reutilizables**: Arquitectura basada en componentes Vue.js
- **Routing Dinámico**: Vue Router con parámetros de URL
- **Gestión de Estado**: Pinia para manejo centralizado del estado
- **Accesibilidad**: ARIA labels, contraste adecuado y navegación por teclado

## 🛠️ Tecnologías Utilizadas

### Core
- **Vue.js 3** (Composition API)
- **Vue Router 4** (Routing)
- **Pinia** (Gestión de estado - alternativa moderna a Vuex)
- **Vite** (Build tool)

### Estilos
- **Tailwind CSS 3** (Framework CSS utility-first)
- **CSS personalizado** (Animaciones custom)

### Features ES6+
- Arrow functions
- Async/await
- Destructuring
- Spread operator
- Template literals
- Modules ES6

## 📋 Requisitos del Proyecto

Este portafolio cumple con los siguientes requisitos:

### Estructura y Funcionalidad
- ✅ Presentación personal breve
- ✅ Proyectos destacados con documentación completa
- ✅ Enlace funcional (GitHub Pages)
- ✅ Documento explicativo (este README)

### Requisitos Técnicos

#### HTML
- ✅ Tags semánticos (header, nav, section, article, footer)
- ✅ Separación congruente del BODY
- ✅ Metadatos SEO

#### Responsividad
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Grid flexible y contenedores adaptativos

#### CSS Framework (Tailwind CSS)
- ✅ Utilización de framework CSS utility-first
- ✅ Personalización con theme extend
- ✅ Utilidades custom (glass-effect, neon-glow, text-gradient)

#### Componentes Reutilizables
- ✅ Navbar.vue
- ✅ Footer.vue
- ✅ ProjectCard.vue
- ✅ Todos los componentes exportables y reutilizables

#### Comunicación entre Componentes
- ✅ Props para datos padre-hijo
- ✅ Eventos emit para comunicación hijo-padre
- ✅ Pinia store para estado global

#### Routing
- ✅ Rutas jerárquicas y consistentes
- ✅ Parámetros por URL (/project/:id)
- ✅ Ruta por defecto (redirect a /)

#### JavaScript ES6+
- ✅ Arrow functions
- ✅ Async/await (simulado en formulario de contacto)
- ✅ Destructuring
- ✅ Spread operator
- ✅ Métodos de array modernos (map, filter, find)

#### Ciclo de Vida y Reactividad
- ✅ Data reactiva en todos los componentes
- ✅ Computed properties
- ✅ Watchers
- ✅ Lifecycle hooks (mounted, watch)

#### Estado Global (Pinia)
- ✅ Store centralizado para proyectos
- ✅ Getters para obtener datos
- ✅ Estructura modular

#### Buenas Prácticas
- ✅ Código modular y bien organizado
- ✅ Comentarios descriptivos
- ✅ Indentación consistente
- ✅ Nombres descriptivos

#### Accesibilidad
- ✅ ARIA labels en elementos interactivos
- ✅ Contraste adecuado (WCAG AA)
- ✅ Navegación por teclado funcional
- ✅ Etiquetas semánticas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build de producción
npm run preview
```

## 🌐 Despliegue

### GitHub Pages

1. Build del proyecto:
```bash
npm run build
```

2. Configurar GitHub Pages en el repositorio para servir desde `/docs` o subir contenido de `/dist`

3. El proyecto ya está configurado con `base: '/portafolio/'` en vite.config.js

### Alternativas
- **Netlify**: Arrastrar carpeta dist
- **Vercel**: `vercel --prod`
- **Dominio propio**: Subir contenido de dist a servidor

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── main.css         # Estilos globales y Tailwind
│   ├── components/
│   │   ├── Navbar.vue           # Navegación reutilizable
│   │   ├── Footer.vue           # Pie de página
│   │   └── ProjectCard.vue     # Card de proyecto reutilizable
│   ├── stores/
│   │   └── projects.js          # Store de Pinia para proyectos
│   ├── router/
│   │   └── index.js             # Configuración de rutas
│   ├── views/
│   │   ├── Home.vue             # Página principal
│   │   ├── About.vue            # Sobre mí
│   │   ├── Projects.vue          # Lista de proyectos
│   │   ├── ProjectDetail.vue    # Detalle de proyecto
│   │   └── Contact.vue          # Formulario de contacto
│   ├── App.vue                  # Componente raíz
│   └── main.js                  # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Diseño

### Paleta de Colores Odoo
- **Primary**: #875A7C
- **Dark**: #704B64
- **Light**: #A6839F
- **Gradient**: #845A6F

### Efectos Visuales
- **Glass Effect**: Efecto de vidrio esmerilado con backdrop-filter
- **Neon Glow**: Sombras luminosas tipo neon
- **Animaciones**: Float, pulse, slide-up, fade-in
- **Hover Effects**: Transformación y cambio de sombras

### Tipografía
- **Font**: Inter (sistema de fuentes)
- **Tamaños**: Escalables con Tailwind (text-xs hasta text-7xl)

## 📝 Proyecto Destacado

### Implementación Odoo en Konos
**Categoría**: Odoo Development  
**Fecha**: 2024  
**Estado**: En curso

**Descripción**: Sistema integral de gestión empresarial implementado con Odoo para optimizar procesos administrativos, contables y de recursos humanos.

**Tecnologías**:
- Odoo v15, v16, v17, v18, v19
- Python
- PostgreSQL
- Shell Script
- Docker

**Desafíos**:
- Migración entre versiones de Odoo
- Optimización de performance
- Customización de módulos estándar
- Automatización de procesos
- Integración con sistemas legacy

**Solución**: Desarrollo de un sistema modular y escalable que permite gestión integral de la empresa, incluyendo módulos personalizados y migración fluida entre versiones.

**Resultados**:
- Reducción del 40% en tiempo de procesos administrativos
- Automatización completa de reportes
- Sistema escalable y mantenible
- Mejora en la toma de decisiones basada en datos

## 👤 Sobre el Autor

**Isabel Palacios**  
- Desarrolladora especializada en Odoo y Frontend
- Ubicación: Chile
- GitHub: [@zuki2610](https://github.com/zuki2610)
- Twitter: [@poshisa](https://twitter.com/poshisa)

**Educación**:
- Maestría en curso - Universidad Bernardo O'Higgins
- Trainee Frontend - Universidad Andrés Bello

**Experiencia Actual**:
- Konos - Desarrollo Odoo (todas las versiones)

## 📄 Licencia

MIT License - Todos los derechos reservados

## 🙏 Agradecimientos

- Equipo de Konos por la oportunidad de trabajar en proyectos Odoo
- Comunidad de Vue.js por las excelentes herramientas
- Tailwind CSS por el framework CSS revolucionario

