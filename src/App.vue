<template>
  <nav>
    <div>
      <!--  
      <router-link to="/about">About</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/investorTerms">InvestorTerms</router-link>
      <router-link to="/issuerTerms">IssuerTerms</router-link>
      --> 
    <router-link to="/">Home</router-link> |
    <router-link to="/termsandconditionsform">Terms and Conditions</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  height: 100vh;
  width: 100vw;
}

.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

nav {
  width: 100vw;
  padding-top: 30px;
  padding-bottom: 30px;
  position: absolute;
  z-index: 1;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FF2774;
}

.headerTermPage {
  font-size: 64px;
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 70px;
}


</style>
