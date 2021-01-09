<template>
	<input class="range" type="range" min="100" max="300" step="2" @input="getInput" value="100">
</template>

<script>

export default {
	name: "Range",
	props: {
		// пришел объект из Diagrams {id: ..., color: '', height: ...}
		blockHeight: Object,
	},
  data: () => ({
		height: Number,
		id: Number
	}),
	methods: {
		getInput({ target }) {
			// передача данных родителю, heightBlock - кастомное событие
			this.$emit('heightBlock')
			return target;
    }
	},
	// сохраняем значение ползунка при перезагрузке
	mounted() {
		const elem = this.$el;
		elem.value = this.blockHeight.height;
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
