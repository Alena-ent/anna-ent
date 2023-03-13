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
                        title: 'I Want It',
                        description: 'First project of ANNA Entertainment was a sex positive feminist podcast hosted by comedians Alena Dolakova and Eliska Soukupova, experts on Nothing and astral sisters of God of Pleasure. A podcast from bed, where guests that are sexy in various ways (mostly intellectually and spiritually) are invited. Journalists, directors, activists and other artists and influencers talked about taboo themes with humor that was much needed during the pandemic. An attempt to be the Czech Boccacios of the 2021 plague.'
                    },
                    {
                        title: 'Anna of Hollywood',
                        description: 'Miss Dolakova’s book debut published by Albatros Media gave a name to her company. When launching both the company and the book, ANNA Entertainment raised 200K CZK for Konsent, a foundation fighting sexual violence in the Czech Republic. Stay tuned for an audio book.'
                    },
                    {
                        title: 'WOMAN OF THE YEAR',
                        description: 'A reality show! Apply soon. (2023)'
                    },
                    {
                        title: 'ANNA OF HOLLYWOOD',
                        description: 'A dark comedy. Maybe Hollywood is just like Eastern Europe. Maybe it’s time we embrace who we truly are. Healing is facing the pain and that can be really hilarious. (2023)'
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