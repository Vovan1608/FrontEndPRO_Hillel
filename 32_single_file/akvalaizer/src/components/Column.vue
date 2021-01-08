<template>
  <div class="column" :style="{ height: getBlockHeight + 'px' }"></div>
</template>

<script>
export default {
	props: {
		// пришел объект из Diagrams {id: ..., color: '', height: ...}
		blockHeight: Object,
	},
	// на основании переданных props в компоненте Diagrams
	// я могу получить цвет блока
	mounted() {
		const elem = this.$el;
		elem.style.background = elem.dataset.color;
	},
	// возвращаем из пришедшего объекта height
	computed: {
		getBlockHeight: function() {
			return this.blockHeight.height;
		}
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
