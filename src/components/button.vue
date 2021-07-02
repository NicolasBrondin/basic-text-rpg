<template>
    <button class="btn" :class="[size, color]" :disabled="disabled" @click="$emit('click')">
        <img :src="icon"/>
        <span>
        <slot/>
        </span>
    </button>
</template>

<script>
export default {
    props: [
        "size",
        "color",
        "icon",
        "disabled"
    ]
}
</script>

<style scoped>
    .btn {
        color: white;
        border: 0;
        outline: 0;
        border-radius: 50px;
        background-color: #3498db;
        padding: 10px 20px;
        display: flex;
        justify-content: "center";
        flex-direction: "row";
        align-items: "center";
    }

    .btn[disabled] {
        opacity: 0.85;
        cursor:no-drop;
    }

    .btn img {
        height: 20px;
    }

    .btn>span {
        flex: 1;
    }

    .btn.small {
        padding: 3px 5px;
    }

    .btn.danger {
        background-color: #e74c3c;
    }
</style>