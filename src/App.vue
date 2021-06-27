<template>
  <div id="app">
    <p>Player</p>
    <progress-bar :min="0" :max="100" :value="gameController.life"/>
    <li v-for="o in gameController.inventory" :key="o.name">
      <span class="icon" :class="{'broken': o.status==='broken'}"><img :src="getIcon(o)"/></span> {{o.name}} 
    </li>
    <p>World</p>
    <li v-for="o in gameController.world" :key="o.name">
      <span class="icon" :class="{'broken': o.status==='broken'}"><img :src="getIcon(o)"/></span> {{o.name}} <button @click="onAttackClick(o)">Attack</button> <button @click="onTake(o)">Take</button>
    </li>
  </div>
</template>

<script>
import { GameController } from './models/GameController'
import ProgressBar from './components/progress-bar.vue'

const icons = {
  pot: "https://image.flaticon.com/icons/png/512/628/628283.png"
}
export default {
  name: 'App',
  data: function(){
    return {
      gameController: new GameController()
    };
  },
  methods: {
    onAttackClick: function(o){
      if(!o.break()){
        alert('Impossible to attack '+o.name+' again!');
      }
    },
    onTake: function(o){
      if(!this.gameController.moveObjectToInventory(o)){
        alert('Impossible to take '+o.name+'!');
      }
    },
    getIcon: function(o){
      return icons[o.type];
    }
  },
  components: {
    ProgressBar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @apply mt-10 text-center;
}

img {
  @apply inline-block h-10;
}

.icon {
  position: relative;
}

.icon.broken::before{
  content:"";
  @apply absolute h-8 w-8 ml-2 top-0 left-0;
  background-image: url(./assets/flash.png);
  background-size: contain;
}
</style>
