<template>
    <div class="hero flex middle" :style="{backgroundColor: color}">
        <div class="container">
            <h2>O nás</h2>
            <div class="full-width flex text-content">
                <p>
                    <span>Alena Doláková</span> je česká herečka s mezinárodní zkušeností. Diváci ji mohou znát jako Holenu z pohádky Jana Svěráka Tři Bratři nebo matku z televizní minisérie Vodník v režii Viktora Tauše. Prosadila se i v zahraničních filmech (např. britský Interlude in Prague) a seriálech (Whiskey Cavalier, ABC, Knightfall, HBO, Haunted, Netflix). Zahrála si také v divadlech v Praze, Anglii a USA (Divadlo v Celetné, Divadlo Palace, Fierce Backbone, Letter’s To Eric). V listopadu 2020 debutovala knihou Anna z Hollywoodu (Albatros Media), věnuje se také stand upu a píše fejetony (Glanc, Elle). Letos se představí v hlavní roli ve filmu Zrcadla ve tmě.
                </p>
                <p>
                    <span>Miroslav Helcl </span> v pozici A&R manažera vydavatelství BrainZone spolupracoval na albech Davida Kollera, Anny K., Chinaski nebo Lucie. S Klárou Vytiskovou rozjel její sólový projekt KLARA. V pozici tour manažere procestoval několik evropských zemí i USA, například se Suzanne Vega, Viktorem Kraussem nebo Janet Robin. V Česku poté zastával pozici tour manažera u Anny K., Lenky Dusilové, Miro Žbirky nebo Michala Hrůzy. Mezitím se přesunul i do role manažera a booking agenta. Kromě A&R se věnuje také rozvoji umělců, hudebnímu marketingu a digitální distribuci.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutSection',
        props: [
            'text',
            'color',
            'title',
        ]
    }
</script>

<style lang="scss" scoped>

.hero {
    .container {
        p {
            width: calc(50% - 40px);
            span {
                font-weight: 700;
                color: #D0523B;
            }
        }
        .text-content {
            justify-content: space-between;
        }
        h2 {
            margin: 40px 0;
        }
        @media (max-width: 767px) {
            p {
                width: 100%;
                margin: 12px 0;
            }    
            .text-content {
                flex-flow: column;
            }
        }
    }
}

</style>