<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div v-show="modalOpen" class="absolute bg-gray-900 w-full bg-opacity-30 min-h-full top-0 left-0 flex justify-center items-center px-8 py-4">
                <Transition name="modal-inner">
                    <div v-if="modalOpen" class="relative w-full max-w-xl max-h-full bg-gray-900">
                        <!-- Modal content -->
                        <button type="button" class="absolute top-[1.7rem] right-7 text-gray-200 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600" @click="closeEditModal">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M18 6l-12 12"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-14 mr-10 text-3xl font-medium text-gray-50">Add New Task</h3>
                            <form class="space-y-6" @submit.prevent="addTask">
                                <div>
                                    <label for="AddTaskTitle" class="block mb-2 text-lg font-medium text-gray-100">Title</label>
                                    <input v-model="taskEdit.title" type="text" name="AddTasktitle" id="AddTasktitle" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" placeholder="Your task title" required>
                                </div>
                                <div>
                                    <label for="AddTaskStatue" class="block mb-2 text-lg font-medium text-gray-100">Statue</label>
                                    <select v-model="taskEdit.statue" id="AddTaskStatue" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                                        <option value="In Progress">In Progress</option>
                                        <option value="Panding">Panding</option>
                                        <option value="Review">Review</option>
                                        <option value="Done">Done</option>
                                        <option value="In Hold">In Hold</option>
                                    </select>
                                </div>
                                <div class="mb-14">
                                    <label for="addTaskContent" class="block mb-2 text-lg font-medium text-gray-100">Task</label>
                                    <textarea v-model="taskEdit.text" id="addTaskContent" rows="7" class="block p-2.5 w-full text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                </div>
                                <p class="text-sm text-error" v-show="errorMissage">Please fill in all fields before adding the task.</p>
                                <button type="submit" class="flex ml-auto text-white bg-gray-300 hover:bg-gray-200 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-right items-center mr-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200" @click="editTask">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                        <path d="M13.5 6.5l4 4"></path>
                                    </svg>
                                    Edit Task
                                </button>
                            </form>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    import { useStore } from "vuex";
    import { ref } from "vue";
    
    const modalOpen = ref(false);
    const taskEdit = ref(null);
    const errorMissage = ref(false)
    const store = useStore();
    
    // handel close modal
    const closeEditModal = () => {
        store.dispatch('closeModalEditTask')
    }

    // handle edit task
    const editTask = () => {
        if (taskEdit.value.title && taskEdit.value.statue && taskEdit.value.text) {
            store.dispatch('editTask', { ...taskEdit.value });

            closeEditModal();
            errorMissage.value = false;
        } else {
            errorMissage.value = true;
        }
    };

    // watch the selecteTask
    store.watch(() => store.state.selecteTask, (newValue) => {
        taskEdit.value = newValue
    })
    // watch the store modalEditTask for togglen the add task modal
    store.watch(() => store.state.modalEditTask, (newValue) => {
        modalOpen.value = newValue
    })
</script>

<style scoped>
    .modal-outer-enter-active,
    .modal-outer-leave-active {
        transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-outer-enter-from,
    .modal-outer-leave-to {
        opacity: 0;
    }

    .modal-inner-enter-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
    }

    .modal-inner-leave-active {
        transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .modal-inner-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }

    .modal-inner-leave-to {
        transform: scale(0.8);
    }
</style>
