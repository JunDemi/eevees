<template>
  <div>
    <h1 @click="changeMessage">{{ message }}</h1>
    <h2>{{ setMessage }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "이니셜 문구",
      setMessage: '',
    }
  },
  //동적인 변경 데이터 감지
  //computed로 변경된 데이터도 감지
  watch: {
    message(){
      this.setMessage = "watch 호출"
    }
  },
  methods: {
    changeMessage() {
      console.log('methods 호출');
      this.message = "변경된 문구";
    }
  }
}
</script>
<style>
  
</style>