<template>
    <a class="flex items-center justify-center p-6 border rounded-lg shadow bg-gray-800 border-gray-500 hover:opacity-90 hover:bg-gray-700 cursor-pointer min-h-[220px] focus:bg-gray-800" @click="openModalFunction">
      <div class="bg-gray-500 rounded-full p-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
        </svg>
      </div>
    </a>
  </template>
  
  <script setup>
    // imports
    import { useStore } from 'vuex';

    const store = useStore();

    // handel open add task modal
    const openModalFunction = () => {
      store.dispatch('openModalAddTask')
    }

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>