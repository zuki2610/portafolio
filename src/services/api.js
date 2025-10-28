// API Service para consumir datos de MockAPI
const API_BASE_URL = 'https://68fffe67e02b16d1753fd2a3.mockapi.io/projects' // Tu API endpoint de MockAPI

/**
 * Obtener todos los proyectos desde la API
 * @returns {Promise<Array>} Lista de proyectos
 */
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const projects = await response.json()
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw error
  }
}

/**
 * Obtener un proyecto específico por ID
 * @param {string} id - ID del proyecto
 * @returns {Promise<Object>} Proyecto
 */
export const getProjectById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const project = await response.json()
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    throw error
  }
}

/**
 * Obtener proyectos destacados (featured)
 * @returns {Promise<Array>} Lista de proyectos destacados
 */
export const getFeaturedProjects = async () => {
  try {
    const projects = await getProjects()
    return projects.filter(project => project.featured === true)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    throw error
  }
}

/**
 * Obtener proyectos por categoría
 * @param {string} category - Categoría del proyecto
 * @returns {Promise<Array>} Lista de proyectos
 */
export const getProjectsByCategory = async (category) => {
  try {
    const projects = await getProjects()
    return projects.filter(project => project.category === category)
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

