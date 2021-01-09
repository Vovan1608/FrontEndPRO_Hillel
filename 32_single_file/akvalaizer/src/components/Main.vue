<template>
  <div class="main">
		<div class="main__wrap">
			<Diagrams :sorted="sortBlock"/>
		</div>
		<button class="main__button" @click="sortBlock">FILTER</button>
  </div>
</template>

<script>

import Diagrams from './Diagrams';

export default {
	name: "Main",
  components: {
    Diagrams
	},
	data: () => ({
		objectLocalStorage: JSON.parse(localStorage.getItem("blocksData"))
	}),
	methods: {
		sortBlock() {
			const newArr = this.objectLocalStorage.slice();
			newArr.sort( (a, b) => a.height > b.height ? 1 : -1);
			return newArr;
		}
	}
};

</script>


<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;

		&__wrap {
			display: flex;
		}
  }
</style>
