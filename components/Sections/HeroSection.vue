<template>
    <div class="hero">
        <div class="container">
            <div class="podcast-info flex middle column">
            <div class="heading flex column center">
                <h1>Chcito Podcast</h1>
                <img src="https://ik.imagekit.io/alexborecky/Alena/chcito/148245718_1688120781380575_1384373541382863612_n_WiV5ghkyK.jpg" alt="">
                <p class="type">Podcast</p>
            </div>
            <div class="description">
                <p>Postelová talkshow, kam si zveme osobnosti, které nás na hypotetické rovině přitahují…do postele. <br> Podcast o sexu intimitě a duchovnu. <br> Formát, jaký jste ještě neslyšeli.</p>
            </div>
            <div class="buttons flex">
                <a href="#"><img src="@/assets/images/apple.svg" alt=""></a>
                <a href="#"><img src="@/assets/images/spotify.svg" alt=""></a>
                <a href="#"><img src="@/assets/images/google.svg" alt=""></a>
            </div>
            <div class="credits">
                <ul class="flex column center">
                <li><p>Moderují: Eliška Soukupová a Alena Doláková</p></li>
                <li><p>MUA: Veronika Milá, Líčírna Organics</p></li>
                <li><p>Znělka: Šimon Holý</p></li>
                <li><p>Fotografie: Bára Lazorczyková</p></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroSection'
    }
</script>

<style lang="scss" scoped>

.hero {
    .podcast-info {
        position: relative;
        height: 100vh;
        .heading {
            img {
                height: 320px;
                border-radius: 40px;
                @media only screen and (max-width: 1200px) {
                    height: 240px;
                }
                @media only screen and (max-width: 680px) {
                    height: 160px;
                }
                @media only screen and (max-width: 550px) {
                    height: 120px;
                    border-radius: 24px;
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
                font-size: 24px;
                letter-spacing: 1px;
                font-weight: 400;
                line-height: 40px;
                text-align: center;
                @media only screen and (max-width: 1200px) {
                    font-size: 16px;
                    max-width: 480px;
                    line-height: 32px;
                }
                @media only screen and (max-width: 550px) {
                    font-size: 14px;
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
            margin: 40px 0;
            &:hover > *:not(:hover) {
                opacity: 0.4;
            }
            @media only screen and (max-width: 680px) {
                flex-flow: column;
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
                    @media only screen and (max-width: 450px) {
                        margin: 2px 0;
                    }
                    p {
                        text-align: center;
                        @media only screen and (max-width: 450px) {
                            font-size: 14px;
                        }
                    }
                }
            }
            @media only screen and (max-width: 350px) {
                display: none;
            }
        }
    }
}

</style>