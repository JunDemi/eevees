<template>
  <h1>부모</h1>
  <hr/>
  <Child v-bind:sendProps1="title" v-bind:sendProps2="createAt" :sendProps3="user"/>
</template>

<script setup>
import { reactive, ref } from "vue";
import Child from "./components/child.vue";

//composition API
const title = ref("부모 컴포넌트 텍스트");
const createAt = ref("2024-08");
//반응성을 가진 객체는 ref보단 reactive사용 권장
const user = reactive({ 
  id: "3176thomas",
  name: "정욱"
});

// // optionalAPI
// export default {
//   components: {
//     Child,
//   },
//   data(){
//     return {
//       title: "부모 컴포넌트 텍스트",
//       createAt: "2024-08",
//       user: {
//         id: "3176thomas",
//         name: "정욱"
//       }
//     }
//   }
// }
</script>
<style>
  
</style>