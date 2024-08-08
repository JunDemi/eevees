<template>
    <div class="intro">
        <img :src="'/src/static/3D_Models/' + sendPokemon + '.gif'" />
    </div>
</template>
<script>
export default {
    props: {
        sendPokemon: String,
    },
}
</script>
<style></style>