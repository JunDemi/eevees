<template>
  <div>
    {{ count }}
  </div>
  <h1>
    Vue
  </h1>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  beforeCreate() {
      console.log("컴포넌트 생성 이전" , this.count);
      this.test();
    },
  created(){
    console.log("컴포넌트 생성 후" , this.count);
  },
  // beforeMount() {
  //   console.log("HTML엘리먼트 마운트 전" , document.querySelector('h1'));
  // },
  // mounted() {
  //   console.log("HTML엘리먼트 마운트 후" , document.querySelector('h1'));
  // },
  methods: {
    test() {
      console.log("테스트 함수입니당");
    },
  }
}
</script>
<style lang="scss" scoped></style>