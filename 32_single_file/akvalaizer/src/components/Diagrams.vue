<template>
  <div class="wrap">
    <div class="wrap__inner" v-for="({color}, $index) in blocksData" :key="$index" >
      <!-- передаю props :data-color="name" в компонент Column -->
      <Column :data-color="color" :blockHeight="heights[$index]"/>
      <!-- @heightBlock - кастомное событие из ребенка Range-->
      <Range @heightBlock="setHeight"/>
    </div>
  </div>
</template>

<script>

import Column from './Column';
import Range from './Range';

export default {
  data: () => ({
		blocksData: [
      {color: 'red'},
      {color: 'orange'},
      {color: 'yellow'},
      {color: 'green'},
      {color: 'lightblue'},
      {color: 'blue'},
      {color: 'purple'},
    ],
    heights: [100, 100, 100, 100, 100, 100, 100],
    height: 120
	}),
  components: {
    Column,
    Range
  },
  methods: {
		setHeight() {
      // console.log(Number(event.target.id), Number(event.target.value));
      this.$set(this.heights, Number(event.target.id), Number(event.target.value));
      // this.height = Number(event.target.value);
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
