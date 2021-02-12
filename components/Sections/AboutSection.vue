<template>
    <div class="hero flex middle" :style="{backgroundColor: color}">
        <div class="container">
            <img :src="image1" alt="">
            <img :src="image2" alt="">
            <img :src="image3" alt="">
            <img :src="image4" alt="">
            <p class="big full-width">
                {{text}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutSection',
        props: [
            'text',
            'color',
            'image1',
            'image2',
            'image3',
            'image4',
        ]
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: $pod-purple;
    .container {
        img {
            position: absolute;
            z-index: 1 !important;
            max-width: 240px;
            &:first-child {
                top: 5%;
            }
            &:nth-child(2) {
                top: 100px;
                right: 10%;
            }
            &:nth-child(3) {
                bottom: 5%;
            }
            &:nth-child(4) {
                bottom: 5%;
                right: 15%;
                max-width: 120px;
            }
        }
        p {
            z-index: 100 !important;
             @media only screen and (max-width: 550px) {
                margin: 40px 0;
            }
        }
    }
}

</style>