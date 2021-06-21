<template>
    <div class="hero flex center-column-left">
        <div class="container">
            <h2>Quotes</h2>
            <div class="quotes">
                <div class="quote" v-for="quote in quotes" :key="quote.name">
                    <p class="cs">{{quote.cs}}</p>
                    <p class="en">{{quote.en}}</p>
                    <p class="name">- {{quote.name}}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Quotes',
        data () {
            return {
                quotes: [
                    {
                        cs: 'Věřím, že pokud chcete v tomhle světě vidět změnu, musíte za ní být zodpovědní.',
                        en: 'I do believe if you want to see a change in the world, you have to be responsible for it.',
                        name: 'Reese Witherspoon'
                    },
                    {
                        cs: 'Dost dlouo mi trvalo najít svůj hlas a teď když ho mohu používat, tak nebudu zticha.',
                        en: 'It took me quite a while to develop a voice and now that I have it, I am not going to be silent.',
                        name: 'Madelaine Albright'
                    },
                    {
                        cs: 'Uzdravte svět a dělejte ho lepším místem.',
                        en: 'Heal the world, make it a better place.',
                        name: 'Michael Jackson (když zrovna nikoho nezneužíval / when he wasn’t molesting anyone)'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: $main-orange;
    .container {
        height: 100%;
        h2 {
            margin: 40px 0;
            color: white;
        }
        .quotes {
            flex-wrap: wrap;
            width: 100%;
            display: flex;
            align-content: space-between;
            justify-content: space-between;
            .quote {
                width: calc(50% - 40px);
                margin-top: 40px;
                p {
                    color: white;
                }
                .cs, .en {
                    font-style: italic;
                }
                .en {
                    opacity: .4;
                }
                .name {
                    font-weight: 700;
                    margin-top: 16px;
                }
            }
            @media (max-width: 768px) {
                flex-flow: column;
                flex-wrap: nowrap;
                .quote {
                    width: 100%;
                }
            }
        }
        @media (max-width: 768px) {
            padding: 80px 0;
            h2 {
                margin: 24px 0;
                margin-bottom: 0px !important;
            }
        }
    }
}

</style>