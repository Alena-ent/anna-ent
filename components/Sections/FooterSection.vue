<template>
    <div class="hero flex column">
        <div class="container flex center-column-left">
            <h2>Kontakty</h2>
            <div class="contacts">
                <div class="contact" v-for="contact in contacts" :key="contact.name">
                    <h3>{{contact.name}}</h3>
                    <a :href="'mailto:'+contact.email">{{contact.email}}</a>
                    <a :href="'tel:'+contact.phone">{{contact.phone}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterSection',
        data () {
            return {
                contacts: [
                    {
                        name: 'Alena Dolákova',
                        email: 'alena@annaent.com',
                        phone: null
                    },
                    {
                        name: 'Miroslav Helcl',
                        email: 'miroslav@annaent.com',
                        phone: '+420 737 947 422'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.hero {
    height: 60vh;
    min-height: 60vh;
    background-color: $main-beige;
    .container {
        height: 100%;
        h2 {
            margin: 40px 0;
        }
        .contacts {
            display: flex;
            .contact {
                display: flex;
                flex-flow: column;
                margin-right: 160px;
                h3 {
                    color: $main-orange;
                    margin: 8px 0;
                }
                a:hover {
                    color: $main-orange;
                }
            }
            @media (max-width: 768px) {
                flex-flow: column;
                .contact {
                    margin: 40px 0;
                    &:last-child {
                        margin-top: 0px;
                    }
                }
            }
        }
        @media (max-width: 768px) {
            padding: 40px 0;
        }
    }
}

</style>