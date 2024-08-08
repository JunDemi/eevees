<template>
    <h2>자식</h2>
    <div>{{ sendProps1 }}</div>
    <div>{{ sendProps2 }}</div>
    <hr/>
    <div>{{ sendProps3.id }}</div>
    <div>{{ sendProps3.name }}</div>
</template>
<script>
export default {
    props: {
        sendProps1: String,
        sendProps2: String,
        sendProps3: {
            id: String,
            name: String,
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="">
    
</style>