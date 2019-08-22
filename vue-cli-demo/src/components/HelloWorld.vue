<template>
  <div class="hello">
    <h1>{{ msg2 }}</h1>
    <keep-alive>
      <!-- <Home :msg1="msg2"></Home> -->
      <component :is="componentId" :msg1="msg2"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./Home";
import mm from "../mixins";

export default {
  name: "HelloWorld",
  props: ["msg2"],
  components: {
    Home
  },
  data() {
    return {
      componentId: "Home"
    };
  },
  mixins: [mm],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: teal;
}
</style>
