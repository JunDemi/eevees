<template>
  <div>
      <li v-for="data1 in testArray1" :key="data1">{{ data1 }}</li>
      <hr/>
      <li v-for="(data2, index) in testArray2" :key="data2">
        {{ data2.id + " / " +data2.name }}
      </li>
  </div>
</template>
<script>
export default {
  data(){
    return {
      testArray1: ['김예진', '이새봄', '박정욱', '권경민', '국다빈', '김정우', '최원준', '편선아'],
      testArray2: [
        { id: 1, name: "김예진"},
        { id: 2, name: "이새봄"},
        { id: 3, name: "박정욱"},
        { id: 4, name: "권경민"},
        { id: 5, name: "국다빈"},
        { id: 6, name: "김정우"},
        { id: 7, name: "최원준"},
        { id: 8, name: "편선아"},
      ],
    }
  }
}
</script>
<style>
  
</style>