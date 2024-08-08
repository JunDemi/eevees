<template>
    <h2>자식</h2>
    <div>{{ sendProps1 }}</div>
    <div>{{ sendProps2 }}</div>
    <hr/>
    <div>{{ sendProps3.id }}</div>
    <div>{{ sendProps3.name }}</div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue';

interface Props{
    sendProps1: String;
    sendProps2: String;
    sendProps3: {
        id: String;
        name: String;
    }
}
const props = defineProps<Props>();

//toRefs: 전달받은 props의 객체 구조 분해
const {sendProps1, sendProps2, sendProps3} = toRefs(props);

</script>
<style lang="">
    
</style>