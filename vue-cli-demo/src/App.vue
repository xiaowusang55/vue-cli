<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <input type="text" v-model="msg" v-focus="" />
    <button @click="btnClick">destroy</button>
    <h1>{{ msg }}</h1>
    <router-view v-bind:msg2="msg" />
    
    <i18now></i18now>
  </div>
</template>

<script>
import mm from "./mixins";
import i18now from './components/I18nDemo'

export default {
  name: "App",
  data() {
    return {
      msg: "App component"
    };
  },
  mixins: [mm],
  methods: {
    btnClick() {
      this.$destroy();
    }
  },
  components: {
    i18now
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: coral;
}
</style>
