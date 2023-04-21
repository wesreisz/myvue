<template>
  <div class="home">
    Title: {{ title }}
    Title1: {{ title1 }}
    Title2: {{ title2 }}

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: process.Production.MESSAGE,
      title1: process.env.MESSAGE,
      title2: process.MESSAGE 
    };
  }
}
</script>
