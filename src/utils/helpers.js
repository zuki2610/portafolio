/**
 * Utilidades y helpers para el proyecto
 * BUENA PRÁCTICA: Separar funciones reutilizables
 */

/**
 * Formatea una fecha al formato local
 * BUENA PRÁCTICA: Función pura y testeable
 * @param {Date|string} date - Fecha a formatear
 * @param {string} locale - Locale para el formato (default: 'es-CL')
 * @returns {string} Fecha formateada
 */
export const formatDate = (date, locale = 'es-CL') => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(dateObj)
  } catch (error) {
    console.error('Error formateando fecha:', error)
    return ''
  }
}

/**
 * Trunca un texto a una longitud máxima
 * BUENA PRÁCTICA: Función reutilizable con parámetros configurables
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @param {string} suffix - Sufijo a agregar (default: '...')
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 150, suffix = '...') => {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength) + suffix
}

/**
 * Valida si un string es una URL válida
 * BUENA PRÁCTICA: Validación centralizada
 * @param {string} url - URL a validar
 * @returns {boolean} True si es URL válida
 */
export const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false
  
  try {
    const urlObj = new URL(url)
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Genera un ID único para proyectos
 * BUENA PRÁCTICA: Helper para generación de IDs
 * @param {string} prefix - Prefijo para el ID (default: 'project')
 * @returns {string} ID único
 */
export const generateId = (prefix = 'project') => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 9)
  return `${prefix}-${timestamp}-${random}`
}

/**
 * Debounce function para optimizar llamadas
 * BUENA PRÁCTICA: Patrón de optimización de performance
 * @param {Function} func - Función a debounce
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce
 */
export const debounce = (func, wait = 300) => {
  let timeout
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Capitaliza la primera letra de un string
 * @param {string} str - String a capitalizar
 * @returns {string} String capitalizado
 */
export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Escapa HTML para prevenir XSS
 * BUENA PRÁCTICA: Seguridad
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

export default {
  formatDate,
  truncateText,
  isValidUrl,
  generateId,
  debounce,
  capitalize,
  escapeHtml
}

