<template>
    <card class="timer-clock">
        <span>{{timeToString}}</span>
    </card>
</template>
<script>
import Card from './card.vue'
export default {
    data: function(){
        return {

        }
    },
    computed: {
        timeToString: function(){
            if(this.time > 0){
                const minutes = Math.floor(this.time / 60) + "";
                const seconds = (this.time % 60) + "";
                return (minutes.length < 2 ? "0" + minutes : minutes) + ":" + (seconds.length < 2 ? "0" + seconds : seconds);
            } else {
                return "00:00";
            }
        }
    },
    props: [
        "time"
    ],
    components: {
        Card
    }
}
</script>

<style scoped>
    .timer-clock {
        background: #1e272e;
        @apply
            flex-1
            text-white
            text-4xl
            text-center
            p-3
            m-0;
        max-width: 200px;
    }
</style>