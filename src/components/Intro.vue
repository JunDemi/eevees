<template>
    <div class="intro">
        <div class="intro-gif" :style="menuArray.find(f => f.no === pokemonNo).menuStyle">
            <img :src="'/src/static/3D_Models/' + menuArray[pokemonNo].name + '.gif'" class="model" />
            <img src="/src/static/ground.png" class="ground">
        </div>
        <div class="pokemon-name">
            <div class="intro-top">
                <div class="title">
                    <span class="dex-number">No.{{ pokemonProps.id }}</span>
                    <h2>{{ menuArray[pokemonNo].name }}</h2>
                    <p>{{ pokemonProps.genus }}</p>

                    <div class="types">
                        <img :src="matchTypeName(pokemonProps.type)?.typeImg" alt="" />
                        <span :style="matchTypeName(pokemonProps.type)?.typeStyle">{{
                            matchTypeName(pokemonProps.type)?.korean
                            }}</span>
                    </div>
                </div>
                <div class="buttons">
                    <button @click="arrowClick">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>

                    </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
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
        pokemonNo: Number,
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
        matchTypeName(type) { //현재 포켓몬의 타입과 일치한 배열의 데이터 가져오기
            return this.typeArray.find(t => t.type === type);
        },
        arrowClick() {
            const currentNo = this.menuArray.find(n => n.no === this.pokemonNo).no;
            console.log(currentNo);
            // if(currentNo >= 1) {
            //     this.$emit('getChangeChild', currentNo - 1);
            // }
        }
    },
}
</script>
<style></style>