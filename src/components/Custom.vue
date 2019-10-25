<template>
  <div id="custom">
    <p> Custom</p>
    <b-button variant="success">Button</b-button>
    {{info}}
  </div>
</template>

<script>
export default {
  name: 'custom',
  data(){
    return{
      info: null
    }
  },
  mounted(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response=>this.info = response)
  }
}
</script>
<style>
</style>
