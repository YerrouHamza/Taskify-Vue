<template>
  
  <article class="block p-6 border rounded-lg shadow bg-gray-800 border-gray-500">
    <div class="flex items-center justify-between mb-4">
      <span class="text-sm font-bold leading-none text-gray-50">{{ props.statue }}</span>
      <div class="flex justify-end gap-1">
        <!-- Edit Button -->
        <button class="inline-block text-gray-300 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm p-1.5" @click="openModalFunction(props.id)">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
            <path d="M13.5 6.5l4 4"></path>
          </svg>
        </button>

        <!-- Delete Button -->
        <button class="inline-block text-gray-300 hover:bg-[#c53333] hover:text-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm p-1.5" @click="removeTask(props.id)">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
          </svg>
        </button>
      </div>
    </div>
    <h5 class="mb-3 text-lg font-medium text-gray-50 dark:text-white">{{ props.title }}</h5>
    <p class="text-md text-gray-200" >{{ props.text }}</p>
  </article>
</template>

<script setup>
  // imports
  import { useStore } from 'vuex';
  import { defineProps } from 'vue';
  
  const store = useStore();

  // pas props
  const props = defineProps({
    text: String,
    title: String,
    statue: String,
    id: Number,
  });

  // open edit task modal
  const openModalFunction = (taskId) => {
    store.dispatch('openModalEditTask');
    store.dispatch('setSelectedTask', taskId);
  }

  // handel remove task
  const removeTask = (taskId) => {
    store.commit('removeTask', taskId);
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>