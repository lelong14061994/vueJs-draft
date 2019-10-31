<template>
  <div id="custom">
    <p>Custom</p>
    <b-button variant="success">Button</b-button>
    <!-- <div>
      <b-table hover :items="info" :fields="fields"></b-table>
    </div> -->
    <app-message></app-message>
  </div>
</template>
    {{info}}
  </div>
</template>

<script>
import axios from "axios";
import Message from "./Message"
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
  },
  components: {
            'app-message': Message
        }

};
</script>
<style>
</style>
