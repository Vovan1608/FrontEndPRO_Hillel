<template>
  <div class="column">
	</div>
</template>


<script>

export default {
  data: () => {
		return {

		}
	},
  components: {
	},
	mounted() {
		const elem = this.$el;
		elem.style.background = elem.dataset.color; 
	},
	beforUpdate() {
		console.log(this.$el);
	}
};
</script>


<style lang="scss">
	.column {
		display: flex;
		padding: 10px;
		margin-bottom: 10px;
		min-height: 100px;
		max-height: 300px;
	}
</style>
