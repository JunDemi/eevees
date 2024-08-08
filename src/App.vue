<template>
  <h1>부모</h1>
  <hr/>
  <Child @이벤트전달="getEvent"/>
</template>

<script>
// //compositionAPI
// import { reactive, ref } from "vue";
// import Child from "./components/child.vue";

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