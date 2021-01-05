<template>
  <div class="wrap">
    <div class="wrap__inner" v-for="({name}, $index) in blocksData" :key="$index"> 
      <Column :data-color="name"/>
      <Range :data-id="$index" @input="onInput"/>
    </div>
  </div>
</template>

<script>
import Column from './Column';
import Range from './Range';

export default {
  data: () => {
		return {
      blocksData: [
        {name: 'red'},
        {name: 'orange'},
        {name: 'yellow'},
        {name: 'green'},
        {name: 'lightblue'},
        {name: 'blue'},
        {name: 'purple'},
      ]
    }
	},
  components: {
    Column,
    Range
  },
  methods: {
		onInput( { target } ) {
      console.log(target.dataset.id, target.value);
			return target.value;
		}
  },
};
</script>


<style lang="scss">
  .wrap {
    display: flex;

    &__inner {
      display: flex;
      flex-direction: column;
      flex-shrink: 1;
      flex-grow: 1;
      margin: 10px;
      border: 1px solid rgb(144, 144, 160);
      padding: 10px;
      min-width: 10px;
    }
  }
</style>
