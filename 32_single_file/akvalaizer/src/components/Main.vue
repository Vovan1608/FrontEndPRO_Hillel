<template>
  <div class="main">
		<div class="main__wrap">
			<Diagrams :sorted="sortBlock()"/>
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
			this.objectLocalStorage.sort( (a, b) => a.height > b.height ? 1 : -1);

			localStorage.setItem("blocksData", JSON.stringify(this.objectLocalStorage));

			return this.objectLocalStorage;
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
