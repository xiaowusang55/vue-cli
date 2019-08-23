
<template>
    <div>
        <p>{{ counter }}</p>
        <p>
            <button @click="increment"> + </button>
            <button @click="decrement"> - </button>
        </p>
    </div>
</template>

<script>
import store from '../store'

export default {
    computed: {
        counter () {
                return store.state.count
            }
    },
    methods: {
        increment () {
            store.commit('increment')
        },
        decrement () {
            store.commit('decrement')
        }
    }
}
</script>

<style scoped>

</style>