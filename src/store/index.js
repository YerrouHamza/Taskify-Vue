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
              console.error('Error:', error);
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