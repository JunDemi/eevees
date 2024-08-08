<template>
  <section>
    <div v-show="isVisible" class="case1"></div>
    <div v-show="!isVisible" class="case2"></div>
    <button @click="setChange">변경</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    setChange() {
      this.isVisible = !this.isVisible;
    },
  }
}
</script>
<style scoped>
 section div{
  width: 300px;
  height: 100px;
 }
 .case1{
  background-color: pink;
 }
 .case2{
  background-color: lightgreen;
 }
 .case3{
  background-color: skyblue;
 }
</style>