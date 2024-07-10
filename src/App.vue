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
        let origURL = store.apiURL;
        if (store.searchOption != '') {
              origURL += `&${store.apiArchetypeParam}=${store.searchOption}`
            }
        axios.
            get(origURL)
            .then(element => {
              store.characterList = element.data;
            })
            .catch(err => {
              console.log(err);
            })
        },
        getArchetype() {
          axios.
            get(store.apiArchetype)
            .then(element => {
              store.ArchetypeList = element.data;
            })
            .catch(err => {
              console.log(err);
            })
        }
    },
    created() {
      this.getCharacters();
      this.getArchetype();
    }
  }



</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch @change="getCharacters"/>
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
