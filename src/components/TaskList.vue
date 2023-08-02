<template>
    <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <TaskCard v-for="task in tasks" :key="task.id" :title="task.title" :text="task.text" :statue="task.statue" :id="task.id"/>
        <AddTaskCard />
    </section>
</template>

<script setup>
    // imports
    import { useStore } from "vuex";
    import { computed } from "vue";

    // components
    import TaskCard from './TaskCard';
    import AddTaskCard from './AddTaskCard';

    const store = useStore();
    const tasks = computed(() => store.state.taskList);
</script>

<style>
    
</style>