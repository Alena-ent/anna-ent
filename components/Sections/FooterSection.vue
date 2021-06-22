<template>
    <div class="hero flex column">
        <div class="container flex center-column-left">
            <h2>Tým a kontakty</h2>
            <div class="contacts">
                <div class="contact" v-for="contact in contacts" :key="contact.name">
                    <h3>{{contact.name}}</h3>
                    <p class="role">{{contact.role}}</p>
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
                        phone: null,
                        role: 'Majitelka a spoluzakladatelka'
                    },
                    {
                        name: 'Miroslav Helcl',
                        email: 'miroslav@annaent.com',
                        phone: '+420 737 947 422',
                        role: 'Spoluzakladatel'
                    },
                    {
                        name: 'Lenka Olšanová',
                        email: 'lenka@annaent.com',
                        phone: null,
                        role: 'Kreativní producentka Mighty Women'
                    },
                    {
                        name: 'Eliška Soukupová',
                        email: null,
                        phone: null,
                        role: 'Kreativní producentka CHCI TO'
                    },
                    {
                        name: 'Dominika Hašková',
                        email: null,
                        phone: null,
                        role: 'Kreativní asistentka'
                    },
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
            flex-wrap: wrap;
            justify-content: space-between;
            .contact {
                display: flex;
                flex-flow: column;
                width: 25%;
                margin-right: 80px;
                margin-top: 40px;
                h3 {
                    color: $main-orange;
                }
                .role {
                    margin: 8px 0;
                    opacity: .64;
                }
                a:hover {
                    color: $main-orange;
                }
            }
            @media (max-width: 768px) {
                // flex-flow: column;
                .contact {
                    margin: 40px 0;
                    width: 40%;
                    &:last-child {
                        margin-top: 0px;
                    }
                }
            }
            @media (max-width: 640px) {
                flex-flow: column;
            }
        }
        @media (max-width: 768px) {
            // padding: 40px 0;
        }
    }
    @media (max-width: 900px) {
        height: auto;
    }
}

</style>