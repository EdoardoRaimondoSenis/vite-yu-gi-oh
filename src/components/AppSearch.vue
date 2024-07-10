<script>

import { store } from '../store.js'

    export default {
        name: 'AppSearch',

        data() {
            return {
                store,
            }
        }
    }

</script>

<template>
    <select @change="$emit('select')" v-model="store.searchOption" name="" id="">
        <option v-for="element in store.apiArchetype" value="">{{ element }}</option>
    </select>

</template>

<style lang="scss">

    select {
        width: 12rem;
        height: 3rem;
        margin: 1rem 5rem;
    }

</style>