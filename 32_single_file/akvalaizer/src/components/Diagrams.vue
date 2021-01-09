<template>
  <div class="wrap" v-for="({color}, index) in blocksData" :key="index" >
    <!-- передаю props :data-color="name" в компонент Column -->
    <!-- для высоты блока передаю объект из  blocksData-->
    <Column :data-color="color" :blockHeight="blocksData[index]" :sorted="sorted"/>
    <!-- @heightBlock - кастомное событие из ребенка Range-->
    <!-- для ползунка передаю объект из  blocksData -->
    <Range :id="index" :blockHeight="blocksData[index]" @heightBlock="setHeight"/>
  </div>
</template>

<script>

import Column from './Column';
import Range from './Range';

export default {
  name: "Diagrams",
  props: {
    sorted: Array
  },
  data: () => ({
		blocksData:  JSON.parse(localStorage.getItem("blocksData")) || [
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
      this.blocksData[idBlock].height = heightVal;

      localStorage.setItem("blocksData", JSON.stringify(this.blocksData));
    }
  }
};

</script>


<style lang="scss">
  .wrap {
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
</style>
