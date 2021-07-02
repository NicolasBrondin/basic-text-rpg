<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .card {
        @apply bg-white rounded-lg shadow-md my-3;
    }
</style>