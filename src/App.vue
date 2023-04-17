<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/additional">Additional</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="https://zealous-moss-036a59610.3.azurestaticapps.net/.auth/login/aad?post_login_redirect_uri=/">Login</a>  |
      <a href="https://zealous-moss-036a59610.3.azurestaticapps.net/.auth/logout?post_logout_redirect_uri=/">Logout</a>
    </nav>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
