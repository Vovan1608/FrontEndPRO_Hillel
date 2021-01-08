<template>
	<input class="range" type="range" min="100" max="300" step="2" @input="getInput">
</template>

<script>

export default {
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
