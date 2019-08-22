
// 局部混入注册
export default {
  data() {
    return {
      msg: 'from mixins.js'
    }
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("activated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  }
}
