<template>
  <div>
     <h1>{{ text }}</h1>
     <h1>{{ textChange() }}</h1>
     <h1>{{ textChange() }}</h1>
     <h1>{{ textChange() }}</h1>
     <hr/>
     <h1>{{ computedText }}</h1>
     <h1>{{ computedText }}</h1>
     <h1>{{ computedText }}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text: "이니셜 키워드"
    }
  },
  //method와 달리 캐싱 기능이 있음
  computed: {
    computedText() {
      console.log("computed 호출");
      return this.text.split('').reverse().join('');
    }
  },
  methods: {
    textChange() {
      console.log("methods 호출");
      return this.text.split('').reverse().join('');
    },
  }
}
</script>
<style>
  
</style>