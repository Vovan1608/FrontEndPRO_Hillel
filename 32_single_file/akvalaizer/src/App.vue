<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main';

export default {
  name: "App",
  components: {
    Main
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
