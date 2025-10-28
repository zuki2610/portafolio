// API Service para consumir datos de MockAPI
const API_BASE_URL = 'https://68fffe67e02b16d1753fd2a3.mockapi.io/projects' // Tu API endpoint de MockAPI
const TIMEOUT_MS = 10000 // 10 segundos timeout

/**
 * Helper para hacer fetch con timeout
 * @param {string} url - URL a la que hacer fetch
 * @param {object} options - Opciones adicionales para fetch
 * @returns {Promise<Response>} Respuesta de la API
 */
const fetchWithTimeout = async (url, options = {}) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error.name === 'AbortError') {
      throw new Error('Request timeout: El servidor tardó demasiado en responder')
    }
    throw error
  }
}

/**
 * Obtiene todos los proyectos desde la API MockAPI
 * Implementa timeout y manejo robusto de errores
 * @returns {Promise<Array>} Lista de proyectos
 * @throws {Error} Si la petición falla
 */
export const getProjects = async () => {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}`)
    
    if (!response.ok) {
      // Crear un error con la información de status
      const error = new Error(`HTTP error! status: ${response.status}`)
      error.status = response.status
      throw error
    }
    
    const projects = await response.json()
    
    // Validar que recibimos un array
    if (!Array.isArray(projects)) {
      throw new Error('La API retornó un formato de datos inválido')
    }
    
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw error
  }
}

/**
 * Obtiene un proyecto específico por ID desde la API
 * @param {string} id - ID del proyecto a buscar
 * @returns {Promise<Object>} Objeto del proyecto
 * @throws {Error} Si la petición falla o no encuentra el proyecto
 */
export const getProjectById = async (id) => {
  if (!id) {
    throw new Error('ID del proyecto es requerido')
  }
  
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/${id}`)
    
    if (!response.ok) {
      // Crear un error con la información de status
      const error = new Error(`HTTP error! status: ${response.status}`)
      error.status = response.status
      throw error
    }
    
    const project = await response.json()
    
    // Validar que recibimos un objeto
    if (!project || typeof project !== 'object') {
      throw new Error('La API retornó un formato de datos inválido')
    }
    
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    throw error
  }
}

/**
 * Obtiene solo los proyectos destacados (featured: true)
 * Implementa manejo de errores robusto
 * @returns {Promise<Array>} Lista de proyectos destacados
 * @throws {Error} Si falla la obtención de datos
 */
export const getFeaturedProjects = async () => {
  try {
    const projects = await getProjects()
    
    // Validar que recibimos un array válido
    if (!Array.isArray(projects)) {
      throw new Error('La API retornó un formato de datos inválido')
    }
    
    // Filtrar proyectos destacados y validar estructura
    const featuredProjects = projects.filter(project => {
      return project && 
             typeof project === 'object' && 
             project.featured === true &&
             project.id && 
             project.title
    })
    
    return featuredProjects
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    throw error
  }
}

/**
 * Obtiene proyectos filtrados por una categoría específica
 * Implementa validación y manejo de errores robusto
 * @param {string} category - Categoría a filtrar
 * @returns {Promise<Array>} Lista de proyectos de esa categoría
 * @throws {Error} Si falla la obtención de datos o la categoría es inválida
 */
export const getProjectsByCategory = async (category) => {
  if (!category || typeof category !== 'string') {
    throw new Error('Categoría inválida')
  }
  
  try {
    const projects = await getProjects()
    
    // Validar que recibimos un array válido
    if (!Array.isArray(projects)) {
      throw new Error('La API retornó un formato de datos inválido')
    }
    
    // Filtrar por categoría y validar estructura
    const filteredProjects = projects.filter(project => {
      return project && 
             typeof project === 'object' && 
             project.category === category &&
             project.id && 
             project.title
    })
    
    return filteredProjects
  } catch (error) {
    console.error('Error fetching projects by category:', error)
    throw error
  }
}

export default {
  getProjects,
  getProjectById,
  getFeaturedProjects,
  getProjectsByCategory
}

