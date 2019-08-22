<template>
    <div>
        <h1>{{ msg }}</h1>
        <input type="text" v-focus="showMsg">
    </div>
</template>

<script>

import mm from '../mixins'


export default {
    mixins: [mm],
    methods: {
        showMsg(el) {
            el.focus()
        }
    },
}
</script>

<style scoped>
    
</style>