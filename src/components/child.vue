<template>
    <h2>자식</h2>
    <div>{{ props.sendProps1 }}</div>
    <div>{{ props.sendProps2 }}</div>
    <hr/>
    <div>{{ props.sendProps3.id }}</div>
    <div>{{ props.sendProps3.name }}</div>
</template>
<script setup lang="ts">
interface Props{
    sendProps1: String;
    sendProps2: String;
    sendProps3: {
        id: String;
        name: String;
    }
}
const props = defineProps<Props>();
</script>
<style lang="">
    
</style>