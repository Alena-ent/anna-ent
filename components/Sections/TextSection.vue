<template>
    <div class="hero">
        <div class="container flex">
            <h2>{{title}}</h2>
            <div class="divider"></div>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextSection',
        props: ['title', 'text']
    }
</script>

<style lang="scss" scoped>

.hero {
    height: 60vh !important;
    min-height: 60vh;
    background-color: #EBE5D7;
    @media (max-width: 768px) {
        height: auto !important;
    }
}

.container {
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .divider {
        width: 1px;
        height: 50%;
        background-color: #8E3929;
        opacity: .24;
    }
    h2 {
        width: 30%;
    }
    p {
        width: 50%;
    }
    @media (max-width: 768px) {
        height: auto;
        flex-flow: column;
        padding: 40px 0;
        text-align: left;
        align-items: flex-start;
        h2 {
            width: 100%;
        }
        p {
            width: 100%;
        }
        .divider {
            width: 50%;
            height: 1px;
            margin: 24px 0;
        }
    }
}

</style>