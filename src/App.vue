<template>
  <v-app>
    <v-theme-provider theme="light">
      <v-app class="app" theme="dark">
    
        <v-toolbar density="compact" style="background: transparent; box-shadow: none;"> 
          
          <v-toolbar-title class="nav-name" style="font-family: 'Vermin Vibes 2'">PORTFOLIO </v-toolbar-title>
    
          <v-spacer></v-spacer>
    
          <b><v-btn class="button-spacing" color="cyan" to="/" text="Home"></v-btn></b>
          <b><v-btn class="button-spacing" color="secondary" to="/About" text="About Me"></v-btn></b>
          <b><v-btn class="button-spacing" color="blue" to="/Projects" text="Projects"></v-btn></b>
          <b><v-btn class="button-spacing" color="green" to="/Skills" text="Skills"></v-btn></b>
          <b><v-btn class="button-spacing" color="primary" to="/Contact" text="Contact"></v-btn></b>
    
        </v-toolbar>
        <v-divider />
        <v-divider></v-divider>
    
        <v-main>
          <v-scroll-x-transition>
            <RouterView />
          </v-scroll-x-transition>
        </v-main>
        <v-divider></v-divider>
        <v-divider></v-divider>
    
        <v-footer class="footer">
          <span> Made using Vue JS</span>
          <v-spacer />
          <span >Aviral Srivastava &copy; {{ new Date().getFullYear() }} </span>
        </v-footer>
      </v-app>
    </v-theme-provider>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
@import url('https://db.onlinewebfonts.com/c/0faec039fc3616dc9aa21766dce5aeea?family=Vermin+Vibes+2');
.app{
  font-family: 'Rajdhani', sans-serif;
  background-color: #10101A;
  user-select: none;
}

.nav-name{
  font-family: "Vermin Vibes 2";
  color: aliceblue;
}
.button-spacing{
  margin-right: 10px;
  background-color: transparent;
}
.footer{
  background-color: #0F1724
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
.v-footer__content {
  align-items: center;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
