<template>
    <div class="intro">
        <div class="intro-gif" :style="menuArray.find(f => f.name === pokemonName).menuStyle">
            <img :src="'/src/static/3D_Models/' + pokemonName + '.gif'" class="model" />
            <img src="/src/static/ground.png" class="ground">
        </div>
        <div class="pokemon-name">
            <span class="dex-number">No.{{ pokemonProps.id }}</span>
            <h2>{{ pokemonName }}</h2>
            <p>{{ pokemonProps.genus }}</p>
            <div class="types">
                <img :src="matchTypeName(pokemonProps.type)?.typeImg" alt="" />
                <span :style="matchTypeName(pokemonProps.type)?.typeStyle">{{ matchTypeName(pokemonProps.type)?.korean
                    }}</span>
            </div>

            <textarea class="description" readonly>{{ pokemonProps.description }}</textarea>

            <audio :key="pokemonProps.voice" ref="audioPlayer" :src="pokemonProps.voice" type="audio/ogg"></audio>
            <button @click="playAudio">울음소리</button>

        </div>

    </div>
</template>
<script>
import { typeAPI } from '../api/typeAPI';

export default {
    props: {
        pokemonProps: Object,
        pokemonName: String,
        menuArray: Array,
    },
    data() {
        return {
            typeArray: typeAPI,
        }
    },
    methods: {
        playAudio() { //버튼 클릭 시 울음소리 오디오 재생
            const audio = this.$refs.audioPlayer; //ref지정된 오디오 태그
            if (audio) {
                audio.play();
            }
        },
        matchTypeName(type) {
            return this.typeArray.find(t => t.type === type);
        },

    },
}
</script>
<style></style>