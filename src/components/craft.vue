<template>
    <div class="craft-container">
        <div class="craft">
            <div class="craft-item">
                <button v-if="items[0]" @click="$emit('remove-item',0)">✖</button>
                <img v-if="items[0]" :src="items[0].icon"/>
            </div>
            <div class="craft-item">
                <button v-if="items[1]" @click="$emit('remove-item',1)">✖</button>
                <img v-if="items[1]" :src="items[1].icon"/>
            </div>
        </div>
        <Button size="small" :disabled="!items[0] || !items[1]" @click="$emit('combine')">Combiner</Button>
    </div>
</template>

<script>

import Button from './button.vue';

export default {
    components: {
        Button
    },
    props: ["items"]
}
</script>

<style scoped>
    .craft-container {
        @apply
            flex
            flex-col;
    }
    .craft {
        @apply
            flex
            flex-row
            justify-between
            rounded-xl
            shadow-lg
            mb-4
            p-2;
        background-color: #ecf0f1;
    }
    .craft-item {
        @apply
            relative
            mx-4
            my-2
            p-4
            text-center;
        height: 75px;
        width: 75px;
        border-radius: 50%;
        background-color: #7f8c8d;
        box-shadow: inset 3px 3px 5px 3px rgba(0,0,0,0.2);
    }

    .craft-item img {
        max-width: 100%;
        max-height: 100%;
        margin:auto;
    }

    .craft-item button{
        @apply
            absolute
            top-1
            text-white
            rounded-3xl
            left-1;

            width: 20px;
            height: 20px;
            line-height: 20px;
        background-color: #e74c3c;
    }

</style>