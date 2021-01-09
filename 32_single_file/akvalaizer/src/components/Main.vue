<template>
  <div class="main">
		<div class="main__wrap">
			<Diagrams/>
		</div>
		<button class="main__button">FILTER</button>
  </div>
</template>

<script>

import Diagrams from './Diagrams';

export default {
	name: "Main",
  components: {
    Diagrams
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
