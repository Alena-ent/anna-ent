<template>
  <div class="hero">
      <hero-section id="home"/>
      <Projects id="projekty" />
      <TextSection id="inspirace"
        title="Insipirace z USA"
        text="Když v USA zakládala Reese Witherspoon své společnosti, které produkovaly filmy s hlavními ženskými hrdinkami, bylo to proto, že jako herečka chtěla hrát lépe napsané, zajímavé role. Zároveň však jako podnikatelka musela tušit, že jsou to právě tyto filmy, které v příštích letech oslaví nejen umělecký úspěch. V České republice tento trend ještě neexistuje. Je však nejen pro společnost prospěšné, ale i finančně výhodné být součástí této změny narativu. Jsme proto velmi vděční za investory i talenty, se kterými jsme navázali a navážeme spolupráci. "
      />
      <TextSection id="hudba"
        title="Umělecký management a marketing"
        text="Spolupracujeme se začínajícími i známými umělci, převážně s hudebníky, se kterými konzultujeme jejich umělecké nasměrování a zároveň je propojujeme se značkami. Často se jedná o multitalentované umělce, kterým pomáháme navigovat jejich cestu vstříc obory. ANNA Entertainment spolupracuje se zpěvačkou, infuencerkou a zakladatelkou WOW WOW Collective Gabi Heclovou a také s herečkou, zpěvačkou a influencerkou Marianou Prachařovou."
      />
      <about-section id="o-nas"/>
      <Quotes id="quotes" />
      <footer-section id="kontakty" />
  </div>
</template>

<script>

export default {
  async asyncData({$content}) {
        const home = await $content('home').fetch();
        return {home}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
