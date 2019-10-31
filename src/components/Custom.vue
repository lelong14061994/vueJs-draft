<template>
  <div id="custom">
    <p>Custom</p>
    <b-button variant="success">Button</b-button>
    <div>
      <b-table hover :items="info" :fields="fields"></b-table>
    </div>
    <!-- {{info}} -->
    <!-- <template>
      <div>
        <b-table hover :items="info"></b-table>
      </div>
    </template>-->
  </div>
</template>
    {{info}}
  </div>
</template>

<script>
import axios from "axios";
// import { Component, Vue, Watch } from "vue-property-decorator"

// @Component
export default {
  name: "custom",
  data() {
    return {
      fields: ['id', 'name', 'email'],
      info: null
    };
  },
  mounted() {
    axios
      // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // var self = this;
        this.info = response.data;
        // console.log(typeof(response.data))
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
</style>
