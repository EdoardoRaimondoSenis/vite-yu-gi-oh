<script>

    export default {
        name: 'characterCard',
        props: ['info']
    }

</script>

<template>
    <div>
        <div v-for="element in info.card_images">
            <img :src="element.image_url" alt="">
        </div>
        <h2>{{ info.name }}</h2>
        <span>{{ info.archetype }}</span>
    </div>
</template>

<style lang="scss">

div {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        img {
            width: 100%;
        }
    }

    h2 {
        text-align: center;
        font-size: 20px;
        color: white;
        margin: 30px 0;
    }

    span {
        color: white;
    }
}

</style>