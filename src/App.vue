<script>

  import AppHeader from "./components/AppHeader.vue";
  import AppSearch from "./components/AppSearch.vue";
  import characterList from "./components/characterList.vue";
  import { store } from "./store.js"
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppSearch,
      characterList,
    },
    
    methods: {
      getCharacters() {
        axios.
            get(store.apiURL)
            .then(element => {
              console.log(element.data);
              store.characterList = element.data;
            })
            .catch(err => {
              console.log(err);
            })
        }
    },
    created() {
      this.getCharacters();
    }
  }



</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch/>
    <characterList />
  </main>
</template>

<style lang="scss">
@use './style/general.scss';

main {
  width: 100%;
  margin: 0;
  background-color: chocolate;
}

</style>
