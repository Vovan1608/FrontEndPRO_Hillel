<template>
  <div id="app">
    <Diagrams />
    <button class="button">FILTER</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  padding: 10px;
}

.button {
  margin-top: 10px;
  width: 80px;
}
</style>
