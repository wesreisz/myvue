<template>
    <div class="profile">
        <h1>This is the profile page</h1>
        {{info}}
    </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'ProfileView',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('/.auth/me')
      .then(response => (this.info = response))
  }
}
</script>