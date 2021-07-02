<template>
    <card class="room">
        <div class="room-name">
            Pièce
        </div>
        <ul>
            <li class="item" :disabled="item.status === 'disabled'" :class="{'is-new': item.isNew}" v-for="(item, index) in items" :key="index">
                <div class="item-icon"><img class="icon" :src="item.icon"/></div>
                <div class="item-infos">{{item.name}}</div> 
                <!--<img class="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/282/magnifying-glass-tilted-right_1f50e.png"/>-->
                <button class="item-action" @click="onItemUse(item)"><img class="icon" src="https://image.flaticon.com/icons/png/512/3039/3039498.png"/></button>
                <button class="item-action" @click="onItemTake(item)"><img class="icon" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/twitter/282/hand-with-fingers-splayed_1f590-fe0f.png"/></button>
            </li>
            
        </ul>
    </card>
</template>

<script>
import Card from './card.vue';

export default {
    components: {
        Card
    },
    props: [
        "items",
        "onItemUse",
        "onItemAttack",
        "onItemTake"
    ]    
}
</script>

<style scoped>
    .room {
        overflow: hidden;
    }
    .room-name {
        background-color:#4bcffa;
        @apply 
            text-white
            text-center
            font-bold
            text-lg
            p-2;
    }

    ul {
        max-height: 400px;
        overflow-y: auto;
    }

    .item {
        @apply
            p-3
            flex
            items-center
            flex-row
            border-b;
    }

    .item[disabled]{
        opacity: 0.5;
    }

    .item[disabled] .item-action {
        display: none;
    }

    .item .item-infos {
        @apply
            flex-1
            ml-1;
    }

    .item .icon {
        @apply 
            h-10;
    }

    .item-icon {
        position: relative;
        width: 50px;
        display: flex;
        justify-content: center;
        transition: margin 0.5s;
    }

    .item.is-new .item-icon {
        margin-left: 20px;
    }

    .item.is-new .item-icon::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #3498db;
        top: calc(50% - 5px);
        left: -15px;       
    }
    /*.icon.broken::before{
        content:"";
        @apply absolute h-8 w-8 ml-2 top-0 left-0;
        background-image: url(./assets/flash.png);
        background-size: contain;
    }*/
</style>