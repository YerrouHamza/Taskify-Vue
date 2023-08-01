<template>
    <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <AddTaskCard />
    </section>
</template>

<script>
// import the components
import TaskCard from './TaskCard.vue';
import AddTaskCard from './AddTaskCard.vue';

export default {
    name: 'TaskList',
    components: {
        TaskCard,
        AddTaskCard
    }
    
}
</script>

<style>
    
</style>