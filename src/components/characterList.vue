<script>

import characterCard from './characterCard.vue'
import { store } from '../store.js'

    export default {
        name: 'characterList',
        components: {
            characterCard,
        },

        data() {
            return {
                store,
            }
        },
        
    }

</script>

<template>
    <div class="containerCards">
        <div class="alignCards">
            <div v-for="element in store.characterList.data" class="Cards">
                <characterCard :info="element"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    .containerCards {
        margin: 0 5rem auto;
        padding: 3rem 5rem;
        background-color: white;

        .alignCards {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .Cards {
            display: flex;
            width: calc(100% / 5 - 4rem);
            height: 30rem;
            margin: 1rem 2rem;
            background-color: chocolate;
        }
        }
    }

</style>