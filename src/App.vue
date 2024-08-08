<template>
  <div>
    {{ case1 }}
  </div>
  <h1 v-html="case2"></h1>
  <hr/>
  <h2 :class="{active: isActive}">클래스 바인딩 테스트</h2>
  <button @click="getChange">클릭</button>
  <hr/>
  <h2 :style="{color: fontColor, fontSize: fontSize + 'px'}">스타일 바인딩 테스트</h2>
</template>
<script>
export default {
  data() {
    return {
      case1: "테스트 텍스트 1", //엘리먼트에 이중 중괄호는 텍스트 형태로 해석하여 출력
      case2: "<p style='color: red'>테스트 텍스트 2</p>", //v-html은 해당 반환값에 대한 선언적 렌더링
      isActive: false,
      fontColor: '#888888',
      fontSize: 48
    }
  },
  methods: {
    getChange() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style scoped>
  h2.active{
    color: green;
  }
</style>