<template>
  <div class="hero">
    <no-ssr class="desktop">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section fp-auto-height-responsive">
        <hero-section />
      </div>
      <div class="section">
        <about-section
          :text="home.first"
          color="#8F01F8"
          image1="https://ik.imagekit.io/alexborecky/Alena/chcito/v4_8_foo7cCdAJ.png"
          image2="https://ik.imagekit.io/alexborecky/Alena/chcito/v13_2_pQd_dkQqWyE0.png"
          image3="https://ik.imagekit.io/alexborecky/Alena/chcito/v9_2_lqap1mYpU.png"
          image4="https://ik.imagekit.io/alexborecky/Alena/chcito/v4_9_OWlQ8wJQBkZB4.png"
        />
      </div>
      <div class="section">
        <about-section
          :text="home.second"
          color="#29B7BC"
          image1="https://ik.imagekit.io/alexborecky/Alena/chcito/v4_7_H6wkkMJx2tSU8.png"
          image2="https://ik.imagekit.io/alexborecky/Alena/chcito/v6_2_DZ8_yGbLmY.png"
          image3="https://ik.imagekit.io/alexborecky/Alena/chcito/v13_2_pQd_dkQqWyE0.png"
          image4="https://ik.imagekit.io/alexborecky/Alena/chcito/v4_9_OWlQ8wJQBkZB4.png"
        />
      </div>
      <div class="section">
        <footer-section />
      </div>
    </full-page>
    </no-ssr>
    <!-- <div class="mobile">
      <hero-section />
      <about-section
          :text="home.first"
          color="#8F01F8"
        />
        <about-section
          :text="home.second"
          color="#29B7BC"
        />
        <footer-section />
    </div> -->
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
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#000000', '#000', '#0798ec'],
        responsiveHeight: 840,
      },
    }
  }
}
</script>

<style lang="scss">

</style>
