<template>
    <div class="hero flex middle column">
        <div class="container flex column center">
            <p class="big">Tento pořad vznikl jako Maledivská touha být Bocacciem při morové ráně.</p>
            <div class="podcast-info">
                <div class="heading flex column center">
                    <img src="https://ik.imagekit.io/alexborecky/Alena/chcito/148245718_1688120781380575_1384373541382863612_n_WiV5ghkyK.jpg" alt="">
                    <p class="type">Podcast</p>
                </div>
                <div class="buttons flex">
                    <a href="#"><img src="@/assets/images/apple.svg" alt=""></a>
                    <a href="#"><img src="@/assets/images/spotify.svg" alt=""></a>
                    <a href="#"><img src="@/assets/images/google.svg" alt=""></a>
                </div>
                <div class="description">
                    <p>©2021 All rights reserved.  Designed and developed by Alex borecky</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.hero {
    .big {
        max-width: 80%;
        text-align: center;
    }
    .podcast-info {
        margin-top: 40px;
        .heading {
            img {
                height: 120px;
                border-radius: 16px;
                @media only screen and (max-width: 550px) {
                    height: 80px;
                    border-radius: 24px;
                    border-radius: 16px;
                }
            }
            h1 {
                position: absolute;
                z-index: -1;
                left: 40px;
                top: 40px;
            }
        }
        .description {
            p {
                font-size: 12px;
                opacity: 0.4;
                letter-spacing: 1px;
                font-weight: 400;
                line-height: 40px;
                text-align: center;
                @media only screen and (max-width: 550px) {
                    font-size: 12px;
                    line-height: 24px;
                    max-width: 320px;
                }
            }
        }
        .buttons {
            a {
                margin: 0 12px;
                img {
                    transition: .3s ease-in-out;
                }
            }
            margin: 16px 0;
            &:hover > *:not(:hover) {
                opacity: 0.4;
            }
            @media only screen and (max-width: 680px) {
                flex-flow: column;
                align-items: center;
                a {
                    margin: 12px 0;
                }
                margin: 24px;
            }
            @media only screen and (max-width: 550px) {
                flex-flow: column;
                a {
                    margin: 8px 0;
                    width: 160px;
                    img {
                        height: 32px;
                        border-radius: 0;
                        width: 100%;
                    }
                }
                margin: 12px;
            }
        }
        .credits {
            ul {
            padding-left: 0;
            list-style: none;
            li {
                &:first-child {
                opacity: 1;
                }
                opacity: .4;
                margin: 4px 0;
            }
            }
        }
        }
}

</style>