<template>
    <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <AddTaskCard />
    </section>
</template>

<script setup>
import { ref } from 'vue';
// import the components
import TaskCard from './TaskCard.vue';
import AddTaskCard from './AddTaskCard.vue';

const test = ref(false)

console.log(test.value)
</script>

<style>
    
</style>