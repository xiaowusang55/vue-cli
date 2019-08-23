<template>
  <div>
    <h1>{{ msg1 }}</h1>
    <MM></MM>

    <hr>
    <selfcounter></selfcounter>
  </div>
</template>

<script>

import MM from "./test";
import mm from '../mixins'
import selfcounter from './VuexBasic'

export default {
  name: "Home",
  props: ['msg1'],
  components: {
    MM,
    selfcounter
  },
  data() {
    return {
    }
  },
  mixins: [mm],
};
</script>

<style scoped>
h1 {
  color: rosybrown;
}
</style>