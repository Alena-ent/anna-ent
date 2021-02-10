<template>
  <div class="hero">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <hero-section />
      </div>
      <div class="section">
        <about-section
          :text="home.first"
          color="#8F01F8"
        />
      </div>
      <div class="section">
        <about-section
          :text="home.second"
          color="#29B7BC"
        />
      </div>
      <div class="section">
        <footer-section />
      </div>
    </full-page>
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
        // sectionsColor: ['#000000', '#000', '#0798ec']
      },
    }
  }
}
</script>

<style lang="scss">

</style>
