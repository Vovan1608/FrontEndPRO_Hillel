<template>
	<input class="range" type="range" min="100" max="300" step="2">
</template>


<script>

export default {
  data: () => {
		return {

		}
	},
  components: {
	}
};
</script>


<style lang="scss">
	.range {
		display: flex;
		margin: 0 auto;
		padding: 10px;
		width: 75%;
	}
</style>
