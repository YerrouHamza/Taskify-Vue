// import { createApp } from "vue";
import { createStore } from "vuex";
// import axios from 'axios'

const store = createStore({
    state: {
        title: 'test',
        modalAddTask: false,
        modalEditTask: false,
        taskList: [
            {
                id: 0,
                title: 'test 1',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                id: 1,
                title: 'test 2',
                statue: 'In Hold' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                id: 2,
                title: 'test 3',
                statue: 'Review' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                id: 3,
                title: 'test 4',
                statue: 'Panding' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                id: 4,
                title: 'test 5',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            }
        ],
        lastTaskId: 0,
    }, 
    mutations: {
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
            state.modalEditTask = true
        },
        closeModalEditTask(state) {
            state.modalEditTask = false
        },

        // add task
        addTask(state, newTask) {
            const index = state.taskList.length; // get the id from task array index
            
            // push the new task
            state.taskList.push({
                id: index,
                ...newTask
            })
        }
    },
    actions: {
        // remove task
        removeTask({ commit }, taskId) {
            commit('removeTask', taskId)
        },

        // add task modal
        openModalAddTask({commit}) {
            commit('openModalAddTask')
        },
        closeModalAddTask({ commit }) {
            commit('closeModalAddTask');
        },

        // edit task modal
        openModalEditTask({ commit }) {
            commit('openModalEditTask')
        },
        closeModalEditTask({ commit }) {
            commit('closeModalEditTask')
        },

        // add new task
        addTask({commit}, newTask) {
            commit('addTask', newTask);
            commit('closeModalAddTask');
        }

    },
})

export default store;