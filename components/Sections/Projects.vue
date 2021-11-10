<template>
    <div class="hero">
        <div class="container">
            <h2>Projekty</h2>
            <div class="projects">
                <div class="project" v-for="project in projects" :key="project.title">
                    <h3>{{project.title}}</h3>
                    <p>{{project.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects',
        data () {
            return {
                projects: [
                    {
                        title: 'Mighty Women',
                        description: 'Seriál v Angličtině o čtyřech ženách v businessu, které se přihlásí do lehce absurdní televizní soutěže. Tématem seriálu jsou ambice a ženské přátelství. Je to takový Sex ve městě vyprávěný Boratem, zkrátka satirický popis feminismu v prostředí mezinárodní Prahy. Kreativní producentka Lenka Olšanová oslovila herečky Martinu Babišovou, Natálii Golovchenko a Alenu Dolákovou, aby se na seriálu podílely i scénáristicky. Režie se ujme Jakub Machala, kamery Miloslav Holman. Prvním koproducentem je Cinestore.'
                    },
                    {
                        title: 'Chci To',
                        description: 'Podcast o sexu, intimitě a duchovnu moderují komičky Alena Doláková a Eliška Soukupová. Tyto astrální sestry Daniela Nekonečnho a Expertky v Ničem si zvou do postele osobnosti, co je na hypotetické rovině přitahují. Humornou formou probírají tabu témata. Mezi hosty se již objevil Filip Titlbach, Gabi Heclová, Johanna Nejedlová, Adam Mišík či Lilia Khousnoutdinová.'
                    },
                    {
                        title: 'ANNA Z HOLLYWOODU',
                        description: 'První kniha Aleny Dolákové, která vyšla v Albatrosu v roce 2020, otevírá humornou formou skrytá ženská témata. Podle hlavní postavy této knihy se pojmenovala společnost A N N A Entertainment a chystá se audiokniha.'
                    },
                    {
                        title: 'ANNA GOES TO HOLLYWOOD',
                        description: 'Film inspirovaný knihou Anna z Hollywoodu se připravuje pro mezinárodní koprodukci. Příběh o (ne)milostném trojúhelníku Anny, jejího těla a společnosti.'
                    },

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.hero {
    height: auto;
    background-color: #D0523B;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        padding: 80px 0;
        height: auto;
        display: flex;
        justify-content: center;
        flex-flow: column;
        @media (max-width: 900px) {
            height: auto;
            padding: 40px 0;
        }
        h2 {
            color: white;
        }
        .projects {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            .project {
                margin-top: 80px;
                width: calc(50% - 40px);
                p {
                    color: rgba($color: #fff, $alpha: .64);
                }
                h3 {
                    margin: 16px 0;
                    text-transform: uppercase;
                    color: white !important;
                }
            }
            @media (max-width: 900px) {
                flex-wrap: nowrap;
                flex-flow: column;
                .project {
                    width: 100%;
                    margin-top: 40px;
                }
            }
        }
    }
}

</style>