<template>
  <div>
    <input type="text" v-model="inputValue1"/>
    <input type="text" :value="inputValue2" @input="inputValue2 = $event.target.value"/>
    <div>{{ inputValue1 }}</div>
    <div>{{ inputValue2 }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue1: "",
      inputValue2: ""
    }
  }
}
</script>
<style lang="">
  
</style>