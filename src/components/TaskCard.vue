<template>
  
  <div class="block p-6 border rounded-lg shadow bg-gray-800 border-gray-500">
    <div class="flex items-center justify-between mb-4">
      <span class="text-sm font-bold leading-none text-gray-50">In progress</span>
      <div class="flex justify-end">
        <!-- View Button -->
        <button class="inline-block text-gray-300 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm p-1.5" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
          </svg>
        </button>


        <!-- Edit Button -->
        <button class="inline-block text-gray-300 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm p-1.5" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
            <path d="M13.5 6.5l4 4"></path>
          </svg>
        </button>


        <!-- Delete Button -->
        <button class="inline-block text-gray-300 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm p-1.5" type="button">
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
    <h5 class="mb-3 text-lg font-medium text-gray-50 dark:text-white">Bonnie Green</h5>
    <p class="text-md text-gray-200" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, est sequi debitis illum at minus officia omnis nemo voluptas necessitatibus sed enim ex modi, officiis magni amet consequuntur assumenda facilis.</p>
  </div>

</template>

<script>
  export default {
    name: 'TaskCard'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>