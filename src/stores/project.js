import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Example store for project management
// This will be expanded with actual project/task management functionality
export const useProjectStore = defineStore('project', () => {
  const projects = ref([])
  const currentProject = ref(null)

  const projectCount = computed(() => projects.value.length)

  function addProject(project) {
    projects.value.push(project)
  }

  function setCurrentProject(project) {
    currentProject.value = project
  }

  return {
    projects,
    currentProject,
    projectCount,
    addProject,
    setCurrentProject,
  }
})

