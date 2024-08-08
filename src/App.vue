<template>
  <section>
    <!-- <div class="case1" v-if="isVisible">true값</div>
    <div class="case2" v-if="isVisible">true값</div>
    <div class="case3" v-else>false값</div> -->

    <div v-if="count === 2" class="case1"></div>
    <div v-else class="case2"></div>
    <button @click="count++">변경</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
      count: 0
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