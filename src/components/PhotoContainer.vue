<template>
    <div class="view">{{ pokemonNo }}</div>
</template>
<script>
export default {
    props: {
        pokemonProps: Object,
        pokemonNo: Number,
        menuArray: Array,
    }, 
    data() {
        return {

        }
    }
}
</script>
<style scoped></style>