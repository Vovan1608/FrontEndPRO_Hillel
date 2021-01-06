<template>
  <div id="app">
    <Diagrams/>
  </div>
</template>

<script>
import Diagrams from './components/Diagrams';

export default {
  name: "App",
  data() {
    return {
      
    }
  },
  components: {
    Diagrams
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  display: flex;
  margin: 0 auto;
  width: 100%;
}
</style>
