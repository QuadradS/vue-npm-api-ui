<template>
  <div class="min-h-screen max-w-7xl mx-auto p-2.5 rounded flex flex-wrap">
    <header-component></header-component>
    <content-component></content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/header/header.vue'
import ContentComponent from './components/content/content.vue'
import FooterComponent from './components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ContentComponent,
    FooterComponent
  },
}
</script>

<style lang="scss">
</style>
