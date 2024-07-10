import { reactive } from "vue";


export const store = reactive({
    characterList: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    searchOption: '',
    ArchetypeList: [],
    apiArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    apiArchetypeParam: 'archetype'
});