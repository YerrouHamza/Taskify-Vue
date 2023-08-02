<template>
  <main class="flex justify-start flex-col gap-14 px-5 pt-20 pb-10">
    <header>
      <h1 class="text-5xl font-medium text-left">My Tasks</h1>
    </header>
    <TaskList />
  </main>
</template>

<script setup>
import TaskList from './components/TaskList.vue';

</script>

<style>
  :root {
    --page-width: 1300px;
    --body-bg: #2d2d2d;
    --body-color: #e7e7e7;
  }
  
  * {
    font-family: 'Poppins', 'Arial Narrow', Arial, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    background-color: var(--body-bg);
    color: var(--body-color);
    min-height: 100vh;
    height: 100%;
    position: relative;
  }

  main {
    max-width: var(--page-width);
    width: 100%;
    margin: auto;
  }


</style>
