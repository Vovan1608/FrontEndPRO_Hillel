<template>
  <div class="main" @input="changeHeightInBlocksParam">
    <div
      class="main__block"
      v-for="(blocks, index) in blocksParam"
      :key="index"
    >
      <!-- передаю props :blocks="blocks" в Column -->
      <Column :blocks="blocks" />
      <input
        :id="index"
        :data-set="index"
        class="main__range"
        type="range"
        min="100"
        max="300"
        step="2"
        value="100"
      />
    </div>
  </div>
</template>

<script>
import Column from "./Column";

export default {
  name: "Diagrams",
  components: {
    Column,
  },
  data: () => ({
    blocksParam: [
      { id: 0, color: "red", height: 100 },
      { id: 1, color: "orange", height: 100 },
      { id: 2, color: "yellow", height: 100 },
      { id: 3, color: "green", height: 100 },
      { id: 4, color: "lightblue", height: 100 },
      { id: 5, color: "blue", height: 100 },
      { id: 6, color: "purple", height: 100 },
    ],
  }),
  methods: {
    changeHeightInBlocksParam({ target }) {
      this.blocksParam[target.id].height = target.value;

      localStorage.setItem("blocksParam", JSON.stringify(this.blocksParam));
    },
  },
  mounted: function() {
    if (localStorage.getItem("blocksParam")) {
      this.blocksParam = JSON.parse(localStorage.getItem("blocksParam"));
    }
    const blocks = [].slice.call(this.$el.children);
    blocks.forEach((element) => {
      // значение range сохранено при перезагрузке
      element.lastChild.value = this.blocksParam[element.lastChild.id].height;
    });
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 90%;
  border: 1px solid black;

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-shrink: 1;
    flex-grow: 1;
    width: 50px;
    height: 342px;
    padding: 5px;
  }

  &__range {
    width: 90%;
    margin: 0 auto;
    padding: 5px;
  }
}
</style>
