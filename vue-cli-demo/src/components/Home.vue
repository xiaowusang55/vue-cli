<template>
  <div>
    <h1>{{ msg1 }}</h1>
    <MM></MM>
  </div>
</template>

<script>

import MM from "./test";
import mm from '../mixins'

export default {
  name: "Home",
  props: ['msg1'],
  components: {
    MM
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