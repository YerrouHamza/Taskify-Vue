// import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
    state: {
        title: 'test',
        modal: {
            
            addModal: false,
            editModal: false,
        },
        taskList: [
            {
                title: 'test 1',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                title: 'test 2',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                title: 'test 3',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                title: 'test 4',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            },
            {
                title: 'test 5',
                statue: 'in progres' /* 'in progres' 'review', 'done', 'panding' */,
                text: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem'
            }
        ]
    }, 
    mutations: {
        // here should we have a two function one for add and one for edit the task
    },
    actions: {

    }
})

export default store;