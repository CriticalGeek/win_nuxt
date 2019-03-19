<template>
  <div>
    <Navbar />
    <nuxt />
    <Fab />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  import Fab from '@/components/Fab'

  export default {
    components: {
      Navbar,
      Footer,
      Fab
    }
  }
</script>
