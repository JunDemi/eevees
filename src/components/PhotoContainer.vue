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
<template>
    <div class="view">{{ pokemonNo }}</div>
</template>
<style scoped></style>