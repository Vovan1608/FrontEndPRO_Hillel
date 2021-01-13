<template>
  <div
    class="main__column"
    :style="{ backgroundColor: blocks.color, height: blocks.height + 'px' }"
  ></div>
</template>

<script>
export default {
  name: "Column",
  props: {
    blocks: Object,
  },
};
</script>

<style>
.main__column {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
</style>
