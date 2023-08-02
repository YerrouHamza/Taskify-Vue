<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div v-show="modalActive" class="absolute bg-gray-900 w-full bg-opacity-30 min-h-full top-0 left-0 flex justify-center items-center px-8 py-4">
                <!-- Add Task Modal -->
                <Transition name="modal-inner">
                    <div v-if="modalAddTaskActive" class="relative w-full max-w-xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow bg-gray-900">
                            <button type="button" class="absolute top-[1.7rem] right-7 text-gray-200 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600" data-modal-hide="authentication-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-14 mr-10 text-3xl font-medium text-gray-50">Add New Task</h3>
                                <form class="space-y-6 mb-14" action="#">
                                    <div>
                                        <label for="AddTaskTitle" class="block mb-2 text-lg font-medium text-gray-100">Title</label>
                                        <input type="text" name="AddTasktitle" id="AddTasktitle" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" placeholder="Your task title" required>
                                    </div>
                                    <div>
                                        <label for="AddTaskStatue" class="block mb-2 text-lg font-medium text-gray-100">Statue</label>
                                        <select id="AddTaskStatue" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                                            <option selected>Choose a Status</option>
                                            <option value="in-progress">In progress</option>
                                            <option value="done">Done</option>
                                            <option value="review">Review</option>
                                            <option value="panding">Panding</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="addTaskContent" class="block mb-2 text-lg font-medium text-gray-100">Task</label>
                                        <textarea id="addTaskContent" rows="7" class="block p-2.5 w-full text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                    </div>
                                </form>
                                <button type="button" class="flex ml-auto text-white bg-gray-300 hover:bg-gray-200 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-right items-center mr-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 5l0 14"></path>
                                        <path d="M5 12l14 0"></path>
                                    </svg>
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>

                <!-- Edit Task Modal -->
                <Transition name="modal-inner">
                    <div v-if="modalEditTaskActive" class="relative w-full max-w-xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow bg-gray-900">
                            <button type="button" class="absolute top-[1.7rem] right-7 text-gray-200 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600" data-modal-hide="authentication-modal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-14 mr-10 text-3xl font-medium text-gray-50">Edit Task</h3>
                                <form class="space-y-6 mb-14" action="#">
                                    <div>
                                        <label for="editTaskTitle" class="block mb-2 text-lg font-medium text-gray-100">Title</label>
                                        <input type="text" name="editTasktitle" id="editTasktitle" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" placeholder="Your editTask title" required>
                                    </div>
                                    <div>
                                        <label for="editTaskStatue" class="block mb-2 text-lg font-medium text-gray-100">Statue</label>
                                        <select id="editTaskStatue" class="border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                                            <option selected>Choose a Status</option>
                                            <option value="in-progress">In progress</option>
                                            <option value="done">Done</option>
                                            <option value="review">Review</option>
                                            <option value="panding">Panding</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="editTaskContent" class="block mb-2 text-lg font-medium text-gray-100">Task</label>
                                        <textarea id="editTaskContent" rows="7" class="block p-2.5 w-full text-sm rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                                    </div>
                                </form>
                                <button type="button" class="flex ml-auto text-white bg-gray-300 hover:bg-gray-200 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-right items-center mr-2 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                                        <path d="M13.5 6.5l4 4"></path>
                                    </svg>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
    import { ref } from 'vue'
    const modalActive = ref(true);
    const modalAddTaskActive = ref(false);
    const modalEditTaskActive = ref(true);
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
