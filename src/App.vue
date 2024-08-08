<template>
  <h1>부모</h1>
  <hr/>
  <Child v-bind:sendProps1="title" v-bind:sendProps2="createAt" :sendProps3="user"/>
</template>

<script>
import Child from "./components/child.vue";

export default {
  components: {
    Child,
  },
  data(){
    return {
      title: "부모 컴포넌트 텍스트",
      createAt: "2024-08",
      user: {
        id: "3176thomas",
        name: "정욱"
      }
    }
  }
}
</script>
<style>
  
</style>