import { defineStore } from 'pinia'
import { getProjects as fetchProjects, getProjectById as fetchProjectById } from '../services/api.js'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    loading: false,
    error: null,
    projects: [
      {
        id: 'odoo-konos-implementation',
        title: 'Implementación Odoo en Konos',
        category: 'Odoo Development',
        description: 'Sistema integral de gestión empresarial implementado con Odoo para optimizar procesos administrativos, contables y de recursos humanos.',
        icon: '🏢',
        date: '2024',
        technologies: ['Odoo', 'Python', 'PostgreSQL', 'Shell', 'Docker'],
        featured: true,
        details: {
          client: 'Konos',
          duration: 'En curso',
          technologies: ['Odoo v15', 'Odoo v16', 'Odoo v17', 'Python', 'PostgreSQL', 'Shell Script', 'Docker'],
          challenges: [
            'Migración entre versiones de Odoo',
            'Optimización de performance',
            'Customización de módulos estándar',
            'Automatización de procesos',
            'Integración con sistemas legacy'
          ],
          solution: 'Desarrollo de un sistema modular y escalable que permite gestión integral de la empresa, incluyendo módulos personalizados y migración fluida entre versiones.',
          results: [
            'Reducción del 40% en tiempo de procesos administrativos',
            'Automatización completa de reportes',
            'Sistema escalable y mantenible',
            'Mejora en la toma de decisiones basada en datos'
          ],
          gallery: [
            { type: 'image', url: '#' },
            { type: 'image', url: '#' }
          ]
        }
      },
      {
        id: 'frontend-portfolio',
        title: 'Portafolio Digital Interactivo',
        category: 'Frontend Development',
        description: 'Portafolio web moderno desarrollado con Vue.js, Vue Router y Vuex. Diseño responsivo con animaciones interactivas inspiradas en interfaces futuristas.',
        icon: '🚀',
        date: '2024',
        technologies: ['Vue.js', 'Vue Router', 'Pinia', 'Tailwind CSS', 'Vite'],
        featured: true,
        details: {
          client: 'Personal',
          duration: '1 mes',
          technologies: ['Vue.js 3', 'Vue Router', 'Pinia (Vuex)', 'Tailwind CSS', 'Vite', 'ES6+'],
          challenges: [
            'Diseño responsive para múltiples dispositivos',
            'Animaciones fluidas sin afectar performance',
            'SEO optimization',
            'Accesibilidad web'
          ],
          solution: 'Aplicación Single Page Application (SPA) con routing dinámico, gestión de estado centralizada y diseño mobile-first.',
          results: [
            '100% responsive en todos los dispositivos',
            'Performance score 95+ en Lighthouse',
            'Animatividades fluidas 60fps',
            'SEO optimizado con meta tags'
          ],
          gallery: []
        }
      },
      {
        id: 'breaking-bad-frontend',
        title: 'Breaking Bad Character App',
        category: 'Frontend Development',
        description: 'Aplicación web para explorar personajes de Breaking Bad, desarrollada con JavaScript vanilla y consumo de APIs REST.',
        icon: '🧪',
        date: '2023',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
        featured: false,
        details: {
          client: 'Proyecto Académico',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'REST API', 'Async/Await'],
          challenges: [
            'Manejo asíncrono de datos',
            'Control de errores en llamadas API',
            'Filtrado y búsqueda de personajes'
          ],
          solution: 'Implementación de fetch API con async/await, manejo de errores con try-catch y algoritmo de búsqueda eficiente.',
          results: [
            'Carga rápida de datos',
            'Experiencia de usuario fluida',
            'Búsqueda instantánea'
          ]
        }
      },
      {
        id: 'inmobiliaria-app',
        title: 'Sistema de Inmobiliaria',
        category: 'Full Stack',
        description: 'Sistema para gestión de propiedades inmobiliarias con búsqueda avanzada, filtros y visualización en mapa.',
        icon: '🏠',
        date: '2023',
        technologies: ['JavaScript', 'HTML', 'CSS', 'REST API', 'Local Storage'],
        featured: false,
        details: {
          client: 'Proyecto Académico',
          duration: '3 semanas',
          technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage API', 'Geolocalización'],
          challenges: [
            'Persistencia de datos',
            'Filtros complejos',
            'Geolocalización'
          ],
          solution: 'Aplicación con almacenamiento local para favoritos y preferencias, sistema de filtros dinámicos y integración con mapas.',
          results: [
            'Búsqueda avanzada implementada',
            'Sistema de favoritos funcional',
            'Optimización de cargas'
          ]
        }
      },
      {
        id: 'media-queries-challenge',
        title: 'Desafío Responsive Design',
        category: 'Frontend Development',
        description: 'Ejercicio de maquetación responsive con diferentes breakpoints y enfoque mobile-first.',
        icon: '📱',
        date: '2023',
        technologies: ['HTML5', 'CSS3', 'Media Queries', 'Flexbox', 'Grid'],
        featured: false,
        details: {
          client: 'Proyecto Académico UNAB',
          duration: '1 semana',
          technologies: ['HTML5', 'CSS3', 'Media Queries', 'Flexbox', 'CSS Grid'],
          challenges: [
            'Adaptabilidad a múltiples tamaños de pantalla',
            'Breakpoints consistentes',
            'Imágenes responsive'
          ],
          solution: 'Enfoque mobile-first con media queries progresivas y uso de unidades relativas (rem, em, %).',
          results: [
            'Funcionamiento perfecto en móviles',
            'Adaptabilidad a tablets y desktop',
            'Mejoras en UX'
          ]
        }
      },
      {
        id: 'desafio-3-5-isabel-palacios',
        title: 'Desafío 3.5 - UNAB',
        category: 'Frontend Development',
        description: 'Proyecto académico de la Universidad Andrés Bello desarrollando funcionalidades avanzadas de JavaScript y manipulación del DOM.',
        icon: '✨',
        date: '2024',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'DOM API', 'Event Handlers'],
          challenges: [
            'Manipulación avanzada del DOM',
            'Manejo de eventos complejos',
            'Optimización de performance',
            'Validación de formularios'
          ],
          solution: 'Implementación de técnicas modernas de JavaScript incluyendo async/await, Promises y manipulación eficiente del DOM.',
          results: [
            'Funcionalidades interactivas completas',
            'Código limpio y mantenible',
            'Excelente performance',
            'Buena experiencia de usuario'
          ]
        }
      },
      {
        id: 'desafio-mediaquieris-isabel',
        title: 'Desafío Media Queries - UNAB',
        category: 'Frontend Development',
        description: 'Implementación de diseño responsive avanzado utilizando media queries para diferentes dispositivos, proyecto académico UNAB.',
        icon: '📐',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'Media Queries', 'Flexbox'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '1 semana',
          technologies: ['HTML5', 'CSS3', 'Media Queries', 'Flexbox', 'Responsive Design'],
          challenges: [
            'Breakpoints múltiples y consistentes',
            'Adaptación de layout complejo',
            'Imágenes responsivas',
            'Tipografía escalable'
          ],
          solution: 'Enfoque mobile-first con media queries que cubren móvil, tablet y desktop, usando unidades relativas y técnicas modernas de CSS.',
          results: [
            '100% responsive en todos los dispositivos',
            'Performance óptima',
            'Layout flexible',
            'Código escalable'
          ]
        }
      },
      {
        id: 'frontend-breakingbad',
        title: 'Breaking Bad API - Frontend',
        category: 'Frontend Development',
        description: 'Aplicación frontend para explorar personajes de Breaking Bad consumiendo API REST externa. Implementación de búsqueda, filtros y visualización de datos.',
        icon: '🧪',
        date: '2023',
        technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto Académico',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'Fetch API', 'Async/Await', 'HTML5', 'CSS3'],
          challenges: [
            'Consumo asíncrono de API REST',
            'Manejo de errores en llamadas API',
            'Búsqueda y filtrado en tiempo real',
            'Renderizado dinámico de datos'
          ],
          solution: 'Implementación de Fetch API con async/await, manejo de errores con try-catch, algoritmo de búsqueda eficiente y renderizado dinámico con templates.',
          results: [
            'Carga rápida de datos desde API',
            'Búsqueda instantánea de personajes',
            'Experiencia de usuario fluida',
            'Manejo robusto de errores'
          ]
        }
      },
      {
        id: 'inmobiliaria-system',
        title: 'Sistema Inmobiliario',
        category: 'Full Stack Development',
        description: 'Sistema completo para gestión de propiedades inmobiliarias con búsqueda avanzada, sistema de favoritos y persistencia en Local Storage.',
        icon: '🏠',
        date: '2023',
        technologies: ['JavaScript', 'Local Storage', 'REST API', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto Académico',
          duration: '3 semanas',
          technologies: ['JavaScript', 'Local Storage API', 'Geolocalización', 'HTML5', 'CSS3'],
          challenges: [
            'Persistencia de datos sin backend',
            'Filtros complejos múltiples',
            'Sistema de favoritos funcional',
            'Integración con servicios de geolocalización'
          ],
          solution: 'Uso de Local Storage para persistencia de datos, sistema de filtros dinámicos combinados, gestión de estado del favorito y integración con mapas mediante APIs.',
          results: [
            'Búsqueda avanzada implementada',
            'Sistema de favoritos completamente funcional',
            'Datos persistentes entre sesiones',
            'Integración exitosa con mapas'
          ]
        }
      },
      {
        id: 'introduccion-informatica',
        title: 'Introducción a la Informática',
        category: 'Academic Project',
        description: 'Proyecto educativo sobre conceptos fundamentales de informática y computación, desarrollado como ejercicio de Digital House.',
        icon: '💻',
        date: '2023',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        featured: false,
        details: {
          client: 'Digital House',
          duration: '1 mes',
          technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
          challenges: [
            'Organización de contenido educativo',
            'Presentación clara de conceptos',
            'Interactividad para aprendizaje'
          ],
          solution: 'Desarrollo de interfaz intuitiva para explicar conceptos básicos de informática con ejemplos interactivos.',
          results: [
            'Contenido educativo bien estructurado',
            'Interfaz clara y accesible',
            'Material de aprendizaje efectivo'
          ]
        }
      },
      {
        id: 'desafio-dom-avanzado',
        title: 'Desafío DOM Avanzado - UNAB',
        category: 'Frontend Development',
        description: 'Proyecto académico avanzado sobre manipulación del DOM y desarrollo de interfaces interactivas con JavaScript moderno.',
        icon: '🎯',
        date: '2024',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'DOM API', 'Event Listeners', 'HTML5', 'CSS3'],
          challenges: [
            'Manipulación eficiente del DOM',
            'Gestión de eventos múltiples',
            'Optimización de renderizado',
            'Validación de formularios dinámicos'
          ],
          solution: 'Implementación de técnicas modernas de JavaScript para manipular el DOM eficientemente, usando event delegation y técnicas de performance optimization.',
          results: [
            'Código optimizado y performante',
            'Interactividad fluida',
            'Buena experiencia de usuario',
            'Seguimiento de mejores prácticas'
          ]
        }
      },
      {
        id: 'desafio-api-avanzado',
        title: 'Desafío API Avanzado - UNAB',
        category: 'Frontend Development',
        description: 'Consumo avanzado de APIs REST con manejo de errores, carga asíncrona y optimización de requests. Proyecto académico UNAB.',
        icon: '🔌',
        date: '2024',
        technologies: ['JavaScript', 'Fetch API', 'Async/Await', 'REST'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'Fetch API', 'Async/Await', 'Error Handling', 'REST'],
          challenges: [
            'Manejo asíncrono de múltiples requests',
            'Gestión de errores robusta',
            'Optimización de carga de datos',
            'Cache de información'
          ],
          solution: 'Implementación de async/await con manejo de errores try-catch, debouncing para búsquedas, y sistema de cache con localStorage.',
          results: [
            'Aplicación robusta y sin errores',
            'Performance optimizado',
            'Experiencia de usuario excelente',
            'Código escalable'
          ]
        }
      },
      {
        id: 'musica-app',
        title: 'Aplicación de Música',
        category: 'Frontend Development',
        description: 'Aplicación para explorar música, artistas y álbumes con búsqueda avanzada y reproductor integrado.',
        icon: '🎵',
        date: '2024',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'Audio API'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '2 semanas',
          technologies: ['JavaScript', 'HTML5 Audio API', 'CSS3', 'DOM Manipulation'],
          challenges: [
            'Integración de reproductor de audio',
            'Sincronización de controles',
            'Diseño responsive del reproductor',
            'Gestión de playlist'
          ],
          solution: 'Desarrollo de reproductor de música personalizado con controles HTML5, gestión de playlists y interfaz intuitiva y moderna.',
          results: [
            'Reproductor funcional y estético',
            'Controles intuitivos',
            'Experiencia de usuario agradable',
            'Performance óptimo'
          ]
        }
      },
      {
        id: 'desafio-js-moderno',
        title: 'Desafío JavaScript Moderno - UNAB',
        category: 'Frontend Development',
        description: 'Proyecto demostrativo de las capacidades de JavaScript moderno: ES6+, closures, promises, async/await y patrones avanzados.',
        icon: '⚡',
        date: '2024',
        technologies: ['JavaScript ES6+', 'Promises', 'Async/Await'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'Promises', 'Async/Await', 'Closures', 'Modules'],
          challenges: [
            'Uso avanzado de Promises',
            'Manejo de async/await',
            'Implementación de módulos ES6',
            'Patrones de diseño JavaScript'
          ],
          solution: 'Desarrollo de aplicación demostrativa usando las características más modernas de JavaScript incluyendo destructuring, spread operator, arrow functions y más.',
          results: [
            'Código moderno y mantenible',
            'Uso de mejores prácticas',
            'Performance optimizado',
            'Arquitectura escalable'
          ]
        }
      },
      {
        id: 'desafio-responsive-avanzado',
        title: 'Desafío Responsive Avanzado - UNAB',
        category: 'Frontend Development',
        description: 'Maquetación avanzada responsive con técnicas modernas: Grid, Flexbox, Container Queries y diseño mobile-first.',
        icon: '📱',
        date: '2024',
        technologies: ['CSS3', 'Flexbox', 'Grid', 'Media Queries'],
        featured: true,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '1 semana',
          technologies: ['CSS Grid', 'Flexbox', 'Media Queries', 'Container Queries', 'Viewport Units'],
          challenges: [
            'Layout complejo responsive',
            'Uso avanzado de Grid y Flexbox',
            'Optimización para todos los dispositivos',
            'Transiciones fluidas'
          ],
          solution: 'Implementación de layout moderno usando Grid para estructura principal y Flexbox para componentes, con queries para diferentes dispositivos.',
          results: [
            '100% responsive',
            'Layout moderno y profesional',
            'Transiciones fluidas',
            'Performance óptimo'
          ]
        }
      },
      {
        id: 'pulga-store',
        title: 'Pulga Store - E-commerce Venezolano',
        category: 'Full Stack Development',
        description: 'Tienda ficticia de comida venezolana con catálogo completo, carrito de compras, seguimiento de pedidos y galería de experiencias. Proyecto evaluativo del módulo 2 Frontend.',
        icon: '🇻🇪',
        date: '2024',
        technologies: ['JavaScript', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto Evaluación Final Módulo 2',
          duration: '1 mes',
          technologies: ['HTML5', 'CSS3', 'JavaScript ES6', 'Bootstrap 5', 'jQuery', 'DataTables', 'Fancybox'],
          challenges: [
            'Carrito de compras dinámico solo frontend',
            'Seguimiento de pedidos con DataTables',
            'Galería de experiencias con Fancybox y Carousel',
            'Formulario de contacto con validación',
            'Diseño responsive con Bootstrap'
          ],
          solution: 'Desarrollo de e-commerce completo desde cero usando Bootstrap para layout responsivo, jQuery para interactividad, DataTables para tablas dinámicas y Fancybox para galería visual.',
          results: [
            'E-commerce funcional completamente frontend',
            'Interfaz intuitiva y atractiva',
            '100% responsive en todos los dispositivos',
            'Carrito de compras dinámico',
            'Experiencia visual con galería'
          ],
          link: 'https://github.com/zuki2610/pulga-store'
        }
      },
      {
        id: 'telovendo-collaborative',
        title: 'TeloVendo - Proyecto Colaborativo',
        category: 'Frontend Development',
        description: 'Replicación fiel de diseño Figma con 4 páginas completas. Proyecto colaborativo utilizando únicamente HTML y CSS puro, sin frameworks.',
        icon: '🎨',
        date: '2024',
        technologies: ['HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'UNAB - Trabajo Colaborativo',
          duration: '2 semanas',
          technologies: ['HTML5', 'CSS3'],
          challenges: [
            'Replicar exactamente diseño de Figma',
            'Trabajo colaborativo con 4 integrantes',
            'Sin frameworks, solo HTML y CSS puro',
            'Consistencia visual entre páginas'
          ],
          solution: 'División del trabajo en 4 páginas: Home (Isabel), Catalog (Valentina), Detail (Franco) y About Us (Christopher). Desarrollo 100% en HTML y CSS vanilla.',
          results: [
            '4 páginas replicadas fielmente',
            'Diseño consistente y profesional',
            'Trabajo colaborativo exitoso',
            'Código limpio sin dependencias'
          ],
          link: 'https://github.com/zuki2610/telovendo'
        }
      },
      {
        id: 'frontend-E1',
        title: 'Frontend Ejercicio 1 - Colaborativo',
        category: 'Frontend Development',
        description: 'Ejercicio de frontend trabajado colaborativamente con Valentina Troncoso y Franco Giaverini para UNAB.',
        icon: '🤝',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        featured: false,
        details: {
          client: 'UNAB - Universidad Andrés Bello',
          duration: '1 semana',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          challenges: [
            'Trabajo en equipo colaborativo',
            'Coordinar desarrollo entre integrantes',
            'Mantener consistencia de código'
          ],
          solution: 'Desarrollo colaborativo usando Git y GitHub para coordinación entre Isabel Palacios, Valentina Troncoso y Franco Giaverini.',
          results: [
            'Proyecto colaborativo exitoso',
            'Coordinación efectiva de equipo',
            'Código bien organizado'
          ],
          link: 'https://github.com/vichiPaz/frontend-E1'
        }
      },
      {
        id: 'isabellas-bakery',
        title: 'Isabella\'s Bakery',
        category: 'Frontend Development',
        description: 'Sitio web de panadería con diseño atractivo y funcionalidades interactivas.',
        icon: '🍰',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        featured: true,
        details: {
          client: 'Proyecto Personal',
          duration: '2 semanas',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          challenges: [
            'Diseño atractivo para panadería',
            'Interfaz intuitiva',
            'Responsive design'
          ],
          solution: 'Desarrollo de sitio web completo para panadería con catálogo de productos y diseño moderno.',
          results: [
            'Sitio web funcional',
            'Diseño atractivo',
            'Experiencia de usuario positiva'
          ],
          link: 'https://github.com/zuki2610/isabellasbakery'
        }
      },
      {
        id: 'isabellas-fashion',
        title: 'Isabella\'s Fashion',
        category: 'Frontend Development',
        description: 'Tienda de moda con diseño elegante y moderno para mostrar productos de fashion.',
        icon: '👗',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        featured: true,
        details: {
          client: 'Proyecto Personal',
          duration: '2 semanas',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          challenges: [
            'Diseño elegante y moderno',
            'Presentación de productos fashion',
            'Galería de imágenes atractiva'
          ],
          solution: 'Desarrollo de e-commerce de moda con interfaz elegante y moderna para presentar productos de fashion.',
          results: [
            'Sitio web funcional',
            'Diseño elegante',
            'Experiencia visual atractiva'
          ],
          link: 'https://github.com/zuki2610/IsabellasFashion'
        }
      },
      {
        id: 'isabellas-music',
        title: 'Isabella\'s Music',
        category: 'Frontend Development',
        description: 'Sitio web musical con galería de artistas, álbumes y reproductor integrado.',
        icon: '🎵',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        featured: true,
        details: {
          client: 'Proyecto Personal',
          duration: '2 semanas',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          challenges: [
            'Integración de audio',
            'Galería de artistas',
            'Reproductor funcional'
          ],
          solution: 'Desarrollo de sitio web musical con galería de artistas, álbumes y funciones de audio integradas.',
          results: [
            'Sitio web musical funcional',
            'Reproductor integrado',
            'Experiencia musical completa'
          ],
          link: 'https://github.com/zuki2610/Isabella-s-Music'
        }
      },
      {
        id: 'tech-design-solution',
        title: 'Tech Design Solution',
        category: 'Frontend Development',
        description: 'Solución tecnológica con enfoque en diseño moderno y funcionalidades avanzadas.',
        icon: '💻',
        date: '2024',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        featured: true,
        details: {
          client: 'Proyecto Personal',
          duration: '2 semanas',
          technologies: ['HTML5', 'CSS3', 'JavaScript'],
          challenges: [
            'Diseño tecnológico moderno',
            'Funcionalidades avanzadas',
            'Interfaz intuitiva'
          ],
          solution: 'Desarrollo de solución tecnológica con diseño moderno y funcionalidades avanzadas.',
          results: [
            'Solución tecnológica funcional',
            'Diseño moderno',
            'Experiencia de usuario óptima'
          ],
          link: 'https://github.com/zuki2610/TechDesignSolution'
        }
      },
      {
        id: 'js-taskmaster',
        title: 'JS TaskMaster',
        category: 'Frontend Development',
        description: 'Aplicación de gestión de tareas desarrollada con JavaScript puro, demostrando manejo del DOM y programación funcional.',
        icon: '✅',
        date: '2024',
        technologies: ['JavaScript', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto UNAB',
          duration: '2 semanas',
          technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Local Storage'],
          challenges: [
            'CRUD de tareas sin frameworks',
            'Persistencia con Local Storage',
            'Manipulación avanzada del DOM',
            'Gestión de estado manual'
          ],
          solution: 'Desarrollo de aplicación de gestión de tareas usando JavaScript vanilla, Local Storage para persistencia y manipulación del DOM.',
          results: [
            'Aplicación completamente funcional',
            'Gestión de tareas completa',
            'Persistencia de datos',
            'Código limpio y organizado'
          ],
          link: 'https://github.com/zuki2610/jstaskmaster'
        }
      },
      {
        id: 'vue-projects',
        title: 'Proyectos Vue.js',
        category: 'Frontend Development',
        description: 'Colección de proyectos desarrollados con Vue.js, explorando el framework progresivo y sus funcionalidades.',
        icon: '⚡',
        date: '2024',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto Académico',
          duration: '1 mes',
          technologies: ['Vue.js', 'JavaScript ES6+', 'HTML5', 'CSS3'],
          challenges: [
            'Aprender Vue.js desde cero',
            'Componentes reutilizables',
            'Gestión de estado con Vue',
            'Routing con Vue Router'
          ],
          solution: 'Desarrollo de múltiples proyectos con Vue.js explorando componentes, props, emit, computed properties y más.',
          results: [
            'Dominio de Vue.js',
            'Proyectos funcionales',
            'Arquitectura basada en componentes',
            'Best practices implementadas'
          ],
          link: 'https://github.com/zuki2610/vue'
        }
      },
      {
        id: 'pokemones',
        title: 'PokeApp - Colaborativo',
        category: 'Frontend Development',
        description: 'Aplicación de Pokémon desarrollada colaborativamente con Christopher Guala, consumiendo API de Pokémon.',
        icon: '⚡',
        date: '2024',
        technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'UNAB - Trabajo Colaborativo',
          duration: '2 semanas',
          technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
          challenges: [
            'Consumo de API de Pokémon',
            'Trabajo colaborativo en Git',
            'Visualización de datos',
            'Diseño atractivo'
          ],
          solution: 'Desarrollo colaborativo de aplicación de Pokémon consumiendo PokeAPI, con interfaz atractiva y funcional.',
          results: [
            'Aplicación funcional',
            'Datos de API integrados',
            'Trabajo colaborativo exitoso',
            'Interfaz atractiva'
          ],
          link: 'https://github.com/christopherguala/pokemones'
        }
      },
      {
        id: 'pokepoke',
        title: 'PokePoke - Explorador de Pokémon',
        category: 'Frontend Development',
        description: 'Aplicación para explorar y buscar información sobre Pokémon, desarrollada con JavaScript y consumo de API REST.',
        icon: '⚡',
        date: '2024',
        technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
        featured: false,
        details: {
          client: 'Proyecto Personal',
          duration: '1 semana',
          technologies: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
          challenges: [
            'Integración con PokeAPI',
            'Búsqueda de Pokémon',
            'Visualización de estadísticas'
          ],
          solution: 'Desarrollo de aplicación de Pokemon con integración de API para búsqueda y visualización de información.',
          results: [
            'Aplicación funcional',
            'API integrada exitosamente',
            'Búsqueda y visualización de datos'
          ],
          link: 'https://github.com/zuki2610/pokepoke'
        }
      },
      {
        id: 'vuestarurant',
        title: 'Vue Restaurant',
        category: 'Frontend Development',
        description: 'Aplicación de restaurante desarrollada con Vue.js, demostrando gestión de estado, componentes y routing.',
        icon: '🍽️',
        date: '2024',
        technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3'],
        featured: true,
        details: {
          client: 'Proyecto UNAB',
          duration: '3 semanas',
          technologies: ['Vue.js', 'Vue Router', 'JavaScript ES6+', 'HTML5', 'CSS3'],
          challenges: [
            'Gestión de menú con Vue',
            'Routing entre páginas',
            'Gestión de estado del pedido',
            'Componentes reutilizables'
          ],
          solution: 'Desarrollo de aplicación de restaurante completa con Vue.js, incluyendo gestión de menú, carrito y checkout.',
          results: [
            'Aplicación Vue.js completa',
            'Routing implementado',
            'Gestión de estado funcional',
            'Componentes reutilizables'
          ],
          link: 'https://github.com/zuki2610/vuestarurant'
        }
      }
    ]
  }),
  
  getters: {
    /**
     * Obtiene todos los proyectos almacenados
     * @returns {Array} Array completo de proyectos
     */
    getAllProjects: (state) => state.projects,
    
    /**
     * Obtiene solo los proyectos destacados (featured)
     * GETTER COMPUESTO: Filtra y retorna proyectos destacados
     * @returns {Array} Proyectos con featured: true
     */
    getFeaturedProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },
    
    /**
     * Busca un proyecto por su ID
     * @param {string} id - ID del proyecto
     * @returns {Object|undefined} Proyecto encontrado o undefined
     */
    getProjectById: (state) => {
      return (id) => state.projects.find(project => project.id === id)
    },
    
    /**
     * Obtiene proyectos por categoría
     * GETTER COMPUESTO: Filtra proyectos por categoría específica
     * @param {string} category - Categoría a filtrar
     * @returns {Array} Proyectos de la categoría especificada
     */
    getProjectsByCategory: (state) => {
      return (category) => state.projects.filter(project => project.category === category)
    },
    
    /**
     * GETTER COMPUESTO: Cuenta total de proyectos
     * @returns {number} Total de proyectos
     */
    getTotalProjectsCount: (state) => state.projects.length,
    
    /**
     * GETTER COMPUESTO: Cuenta proyectos por categoría
     * @returns {Object} Objeto con conteo de proyectos por categoría
     */
    getProjectsCountByCategory: (state) => {
      const countByCategory = {}
      state.projects.forEach(project => {
        const { category } = project
        countByCategory[category] = (countByCategory[category] || 0) + 1
      })
      return countByCategory
    },
    
    /**
     * GETTER COMPUESTO: Obtiene todas las categorías únicas
     * @returns {Array} Array de categorías únicas
     */
    getAllCategories: (state) => {
      return [...new Set(state.projects.map(project => project.category))]
    },
    
    /**
     * GETTER COMPUESTO: Verifica si hay proyectos cargados
     * @returns {boolean} True si hay proyectos
     */
    hasProjects: (state) => state.projects.length > 0,
    
    /**
     * GETTER COMPUESTO: Obtiene proyectos recientes (últimos N)
     * @param {number} limit - Número de proyectos a retornar
     * @returns {Array} Proyectos más recientes
     */
    getRecentProjects: (state) => {
      return (limit = 3) => state.projects.slice(0, limit)
    }
  },
  
  actions: {
    /**
     * Acción PRINCIPAL: Carga proyectos desde la API externa
     * BUENA PRÁCTICA: Todo el manejo de datos está encapsulado en el store
     * @returns {Promise<void>}
     */
    async loadProjects() {
      // Si ya está cargando, evitar llamadas duplicadas
      if (this.loading) {
        console.log('Ya existe una carga en progreso')
        return
      }
      
      this.loading = true
      this.error = null
      
      try {
        // Intentar cargar desde la API
        const projects = await fetchProjects()
        
        // Validación robusta de la respuesta
        if (!projects) {
          throw new Error('La API no retornó datos')
        }
        
        // Verificar si es un array válido
        if (!Array.isArray(projects)) {
          throw new Error('La API retornó un formato de datos inválido')
        }
        
        // Si la API no tiene datos o está vacía, mantener datos locales
        if (projects.length === 0) {
          console.log('API retornó array vacío, usando datos locales')
          return
        }
        
        // Validar estructura de datos
        const validProjects = projects.filter(project => {
          return project && 
                 project.id && 
                 project.title && 
                 project.description &&
                 Array.isArray(project.technologies)
        })
        
        if (validProjects.length === 0) {
          console.warn('API retornó datos sin estructura válida')
          this.error = 'La API retornó datos con formato incorrecto'
          return
        }
        
        // Actualizar con datos de la API solo si son válidos
        this.projects = validProjects
        console.log(`Proyectos cargados exitosamente desde la API (${validProjects.length} proyectos)`)
        
      } catch (error) {
        console.error('Error al cargar proyectos desde API:', error)
        
        // Manejo específico de diferentes tipos de errores
        if (error.name === 'TypeError') {
          this.error = 'Error de conexión con el servidor'
        } else if (error.status === 404) {
          this.error = 'Endpoint de API no encontrado'
        } else if (error.status === 500) {
          this.error = 'Error interno del servidor'
        } else if (error.message?.includes('fetch')) {
          this.error = 'Error de red. No se pudo conectar al servidor'
        } else {
          this.error = error.message || 'Error desconocido al cargar proyectos'
        }
        
        // En caso de error, mantener los datos locales existentes
        console.log('Usando datos locales como fallback debido a error en API')
      } finally {
        this.loading = false
      }
    },
    
    /**
     * Carga un proyecto específico por ID desde la API
     * @param {string} id - ID del proyecto a cargar
     * @returns {Object|null} Proyecto encontrado o null
     */
    async loadProjectById(id) {
      if (!id) {
        console.error('loadProjectById: ID no proporcionado')
        return null
      }
      
      try {
        const project = await fetchProjectById(id)
        
        // Validar que el proyecto existe y tiene estructura válida
        if (!project) {
          console.log('Proyecto no encontrado en API, buscando en datos locales')
          return this.getProjectById(id)
        }
        
        // Validar estructura del proyecto
        if (!project.id || !project.title) {
          console.warn('Proyecto de API tiene estructura inválida')
          return this.getProjectById(id)
        }
        
        return project
        
      } catch (error) {
        console.error('Error al cargar proyecto específico:', error)
        
        // Fallback a datos locales
        const localProject = this.getProjectById(id)
        if (localProject) {
          console.log('Retornando proyecto desde datos locales')
          return localProject
        }
        
        // Si no existe en datos locales tampoco
        this.error = `No se pudo cargar el proyecto con ID: ${id}`
        return null
      }
    },
    
    /**
     * Resetea el estado de error del store
     */
    clearError() {
      this.error = null
    },
    
    /**
     * Fuerza recarga de proyectos desde la API
     * BUENA PRÁCTICA: Método de refresh explícito
     */
    async refreshProjects() {
      console.log('Refrescando proyectos desde la API...')
      await this.loadProjects()
    },
    
    /**
     * BUENA PRÁCTICA: CRUD Actions - Agregar un nuevo proyecto
     * @param {Object} project - Proyecto a agregar
     */
    addProject(project) {
      // Validar estructura
      if (!project?.id || !project?.title) {
        console.error('Proyecto inválido: falta id o title')
        return false
      }
      
      // Verificar duplicados
      if (this.projects.some(p => p.id === project.id)) {
        console.warn(`Proyecto con ID ${project.id} ya existe`)
        return false
      }
      
      // Agregar proyecto
      this.projects.push(project)
      console.log(`Proyecto ${project.title} agregado exitosamente`)
      return true
    },
    
    /**
     * BUENA PRÁCTICA: CRUD Actions - Actualizar un proyecto existente
     * @param {string} id - ID del proyecto
     * @param {Object} updates - Campos a actualizar
     */
    updateProject(id, updates) {
      const index = this.projects.findIndex(p => p.id === id)
      
      if (index === -1) {
        console.warn(`No se encontró proyecto con ID: ${id}`)
        return false
      }
      
      // Actualizar proyecto manteniendo inmutabilidad
      this.projects[index] = { ...this.projects[index], ...updates }
      console.log(`Proyecto ${id} actualizado exitosamente`)
      return true
    },
    
    /**
     * BUENA PRÁCTICA: CRUD Actions - Eliminar un proyecto
     * @param {string} id - ID del proyecto a eliminar
     */
    deleteProject(id) {
      const index = this.projects.findIndex(p => p.id === id)
      
      if (index === -1) {
        console.warn(`No se encontró proyecto con ID: ${id}`)
        return false
      }
      
      this.projects.splice(index, 1)
      console.log(`Proyecto ${id} eliminado exitosamente`)
      return true
    },
    
    /**
     * BUENA PRÁCTICA: Helper - Resetea el store a valores iniciales
     */
    resetStore() {
      this.loading = false
      this.error = null
      console.log('Store reseteado')
    }
  }
})

