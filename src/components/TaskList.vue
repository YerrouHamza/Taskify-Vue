<template>
    <section class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
    </section>
</template>

<script>
import TaskCard from './TaskCard.vue';

export default {
    name: 'TaskList',
    components: {
        TaskCard
    }
    
}
</script>

<style>
    
</style>