<template>
    <div class="hero flex middle" :style="{backgroundColor: color}">
        <div class="container">
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
            'color'
        ]
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: $pod-purple;
}

</style>