<template>
    <div class="container">
        <div class="outer">
            <div class="inner" :style="'width: '+percentage+'%'">{{value}}</div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        percentage: function(){
            return ((this.value-this.min) / (this.max-this.min)) * 100;
        }
    },
    props: ["min", "max", "value"]
}
</script>

<style scoped>
    .container {
        @apply w-full;
    }

    .outer {
        @apply shadow w-full bg-gray-100;
    }

    .inner {
        @apply bg-blue-200 text-xs leading-none py-1 text-center text-white;
    }
</style>