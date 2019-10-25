<template>
  <div id="app">
    <b-nav pills>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Menu"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item to="/">Home</b-dropdown-item>
        <b-dropdown-item to="/custom"> Custom</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    <router-view />
  </div>
</template>
<script>
// import { Component, Vue, Watch } from "vue-property-decorator"

// @Component
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
