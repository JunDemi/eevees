<template>
  <h1>부모</h1>
  <hr/>
  <Child @send-event="getEvent"/>
</template>

<script>
import Child from "./components/child.vue";
// //compositionAPI
// import { reactive, ref } from "vue";

// const getEvent = (event) => {
//   console.log(event);
// }

//optionsAPI
export default {
  components: {
    Child,
  },
  methods: {
    getEvent(event) {
      console.log(event);
    }
  }
}
</script>
<style>
  
</style>