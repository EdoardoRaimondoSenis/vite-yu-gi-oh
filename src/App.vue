<script>

  import AppHeader from "./components/AppHeader.vue";
  import AppSearch from "./components/AppSearch.vue";
  import characterList from "./components/characterList.vue";

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppSearch,
      characterList
    }
  }


</script>

<template>
  <AppHeader/>
  <main>
    <AppSearch/>
    <characterList/>
  </main>
</template>

<style lang="scss" scoped>

</style>
