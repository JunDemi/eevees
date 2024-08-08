<template>
    <h2>자식</h2>
    <button @click="sendEvent">전달</button>
</template>
<script>
// //compositionAPI
// import { ref } from 'vue';
// const childText = ref("자식 컴포넌트 텍스트");
// const emit = defineEmits(["이벤트전달"]);

// const sendEvent = () => {
//     emit('이벤트전달', childText.value);
// };

//optionsAPI
export default {
    data() {
        return {
            text: "자식 컴포넌트 텍스트",
        }
    },
    methods: {
       sendEvent() {
            this.$emit('이벤트전달', this.text)
       }
    }
}
</script>

<style lang="">
    
</style>