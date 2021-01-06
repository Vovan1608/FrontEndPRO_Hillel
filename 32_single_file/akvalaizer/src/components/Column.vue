<template>
  <div class="column" :style="{ height: blockHeight + 'px' }"></div>
</template>

<script>
// :style="{ height: blockHeight + 'px' }"
export default {
	props: {
		blockHeight: Number,
	},
	// на основании переданных props в компоненте Diagrams
	// я могу получить цвет блока
	mounted() {
		const elem = this.$el;
		elem.style.background = elem.dataset.color; 
	}
};
</script>

<style lang="scss">
	.column {
		padding: 10px;
		margin-bottom: 10px;
		min-height: 100px;
	}
</style>
