<template>
    <div class="intro">
        <img :src="'/src/static/3D_Models/' + pokemonName + '.gif'" />
        <div class="pokemon-name">
            <h2>{{ pokemonName }}</h2>
            <p>{{ pokemonProps.genus }}</p>
            <audio :key="pokemonProps.voice" ref="audioPlayer" :src="pokemonProps.voice" type="audio/ogg"></audio>
            <button @click="playAudio">울음소리</button>

        </div>

    </div>
</template>
<script>
export default {
    props: {
        pokemonProps: Object,
        pokemonName: String,
    },
    data() {
        return {

        }
    },
    methods: {
        playAudio() { //버튼 클릭 시 울음소리 오디오 재생
            const audio = this.$refs.audioPlayer; //ref지정된 오디오 태그
            if (audio) {
                audio.play();
            }
        }
    },
}
</script>
<style></style>