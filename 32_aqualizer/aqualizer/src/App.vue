<template>
  <div id="app">
    <Diagrams />
  </div>
</template>

<script>
import Diagrams from "./components/Diagrams";

export default {
  name: "App",
  components: {
    Diagrams,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  margin: 0 auto;
}
</style>
