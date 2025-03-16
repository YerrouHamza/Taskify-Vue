import { createStore } from "vuex";
import axios from 'axios'

const store = createStore({
    state: {
        modalAddTask: false,
        modalEditTask: false,
        selecteTask: null,
        taskList: []
    }, 
    mutations: {
        setTaskList(state, newTasks) {
            state.taskList = newTasks;
        },

        // remove task
        removeTask(state, taskId) {
            state.taskList = state.taskList.filter((task) => task.id !== taskId);
        },

        // add task modal control
        openModalAddTask(state) {
            state.modalAddTask = true
        },
        closeModalAddTask(state) {
            state.modalAddTask = false
        },

        // edit task modal controls
        openModalEditTask(state) {
            state.modalEditTask = true;
            
        },
        closeModalEditTask(state) {
            state.modalEditTask = false
        },
        setSelectedTask(state, taskId) {
            state.selecteTask = state.taskList.find(item => item.id === taskId )
        },
        clearSelectedtask(state) {
            state.selecteTask = null;
        },

        // add task
        addTask(state, newTask) {
            const index = state.taskList.length + 1; // get the id from task array index
            
            // push the new task
            state.taskList.push({
                id: index,
                ...newTask
            })
        },

        // updated the task
        updateTask(state, updatedTask) {
            const index = state.taskList.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
              state.taskList[index] = updatedTask;
            }
            state.selecteTask = null
        }
    },
    actions: {
        // Fetch tasks from JSON file using Axios
        async fetchTasks({ commit }) {
            try {
              const response = await axios.get('./tasks.json'); 
              const tasks = response.data.tasks;
              commit('setTaskList', tasks); // Update the Tasks
            } catch (error) {
              console.error('Error fetching tasks:', error);
              // Fallback data in case the JSON file can't be loaded
              const fallbackTasks = [
                {
                    "title": "Update User Profile Page",
                    "text": "Add a new feature to update user profiles with profile picture support.",
                    "statue": "To Do",
                    "id": 1
                },
                {
                    "title": "Fix Bug on Login Page",
                    "text": "Resolve the issue with the login page not rendering properly on certain devices.",
                    "statue": "Review",
                    "id": 2
                },
                {
                    "title": "Implement Dashboard Charts",
                    "text": "Create interactive charts to display user data on the dashboard.",
                    "statue": "In Hold",
                    "id": 3
                },
                {
                    "title": "Add Pagination to Data Table",
                    "text": "Split large data tables into pages to improve performance and user experience.",
                    "statue": "Pending",
                    "id": 4
                },
                {
                    "title": "Refactor API Endpoints",
                    "text": "Clean up and optimize backend API endpoints for improved code maintainability.",
                    "statue": "In Progress",
                    "id": 5
                }
              ];
              commit('setTaskList', fallbackTasks);
            }
        },
        // remove task
        removeTask({ commit }, taskId) {
            commit('removeTask', taskId);
        },

        // add task modal
        openModalAddTask({commit}) {
            commit('openModalAddTask');
        },
        closeModalAddTask({ commit }) {
            commit('closeModalAddTask');
        },

        // edit task modal
        openModalEditTask({ commit }) {
            commit('openModalEditTask');
        },
        closeModalEditTask({ commit }) {
            commit('closeModalEditTask');
            commit('clearSelectedtask');
        },
        setSelectedTask({ commit }, taskId) {
            commit('setSelectedTask', taskId)
        },

        // add new task
        addTask({commit}, newTask) {
            commit('addTask', newTask);
            commit('closeModalAddTask');
        },

        async editTask({ commit }, updatedTask) {
            commit("updateTask", updatedTask);
            commit('closeModalEditTask');
        }
    },
})

export default store;