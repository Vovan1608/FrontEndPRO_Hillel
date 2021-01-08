<template>
  <div class="wrap">
<<<<<<< HEAD
    <div class="wrap__inner" v-for="({color}, index) in blocksData" :key="index" >
      <!-- передаю props :data-color="name" в компонент Column -->
      <Column :data-color="color" :blockHeight="blocksData"/>
=======
    <div class="wrap__inner" v-for="({color}, $index) in blocksData" :key="$index" >
      <!-- передаю props :data-color="name" в компонент Column -->
      <Column :data-color="color" :blockHeight="heights[$index]"/>
>>>>>>> bd71789672721fb5df93b965a767dee9ea43366e
      <!-- @heightBlock - кастомное событие из ребенка Range-->
      <Range :id="index" @heightBlock="setHeight"/>
    </div>
  </div>
</template>

<script>

import Column from './Column';
import Range from './Range';

export default {
  data: () => ({
		blocksData: [
      {id: 0, color: 'red', height: 100},
      {id: 1, color: 'orange', height: 100},
      {id: 2, color: 'yellow', height: 100},
      {id: 3, color: 'green', height: 100},
      {id: 4, color: 'lightblue', height: 100},
      {id: 5, color: 'blue', height: 100},
      {id: 6, color: 'purple', height: 100},
    ],
	}),
  components: {
    Column,
    Range
  },
  methods: {
		setHeight() {
      const range = event.target;
      const idBlock = Number(range.id);
      const heightVal = Number(range.value);
      let {height} = this.blocksData[idBlock];
      this.set(this.blocksData[idBlock], height, heightVal)
      console.log(this.blocksData[idBlock])
      return height;
    }
  }
};
</script>


<style lang="scss">
  .wrap {
    display: flex;

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex-shrink: 1;
      flex-grow: 1;
      margin: 10px;
      border: 1px solid rgb(144, 144, 160);
      padding: 10px;
      min-width: 10px;
      height: 360px;
    }
  }
</style>
