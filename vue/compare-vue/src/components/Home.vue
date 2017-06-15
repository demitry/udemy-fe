<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <!-- use interpolation (heading from export defaults) -->
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn More</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="colunm is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="colunm is-one-third-desktop">
            <p class="title"><strong>We provide our clients with customized billing services, convenient support hours, and friendly, reliable, multilingual staff.</strong></p>
          </div>
          <div class="colunm">
            <p class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        Columns
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      heading: 'Soaring to new heights',
      subheading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

  h2
    margin: 1.5rem 0 2rem 0 !important
</style>
