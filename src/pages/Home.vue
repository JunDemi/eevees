<template>
    <section class="home-container">
        <Intro :pokemonProps="pokemonData" :pokemonNo="clickMenu" :menuArray="menuArray" @getChangeChild="childUpdate"/>
        <PhotoContainer :pokemonProps="pokemonData" :pokemonNo="clickMenu" :menuArray="menuArray"/>
        <audio ref="clickSound" >
            <source src="../static/plink.mp3" type="audio/mp3"/>
        </audio>
        <div class="menu-list">
            <span v-for="pokemon in menuArray" :style="pokemon.menuStyle" :key="pokemon.no"
                @click="changeMenu(pokemon.no)" :class="{ active: pokemon.no === clickMenu ? true : false }">
                <img :src="pokemon.modelImg" alt="" width="70px" height="70px" />
                <p>{{ clickMenu === pokemon.no ? pokemon.name : "" }}</p>
            </span>
        </div>
    </section>
    <video class="bg-video" autoplay muted loop>
        <source src="../static/bg_Videos/eevee.mp4" type="video/mp4" />
    </video>
</template>
<script>
import axios from 'axios';
import { menuAPI } from '../api/menuAPI';
import '../assets/home.scss';
import Intro from '../components/Intro.vue';
import PhotoContainer from '../components/PhotoContainer.vue';

export default {
    name: 'Home', //라우터 이름
    components: { //컴포넌트
        Intro, //도감 UI
        PhotoContainer, //중앙 포켓몬 사진 슬라이드
    },
    watch: {
        clickMenu: { //우측 포켓몬 메뉴 클릭 시
            immediate: true, // 컴포넌트가 처음 렌더링될 때도 실행
            handler(clickMenu) { //핸들러의 매개변수 = 클릭 메뉴
                this.getPokemonData(clickMenu);
            },
        },
    },
    data() {
        return {
            //현재 선택된 메뉴
            clickMenu: 0,
            //메뉴 배열
            menuArray: menuAPI,
            pokemonData: {
                genus: "", //포켓몬 별명
                type: "", //포켓몬 타입
                id: 0, //포켓몬 도감번호 
                voice: "", //포켓몬 울음소리
                description: "", //포켓몬 도감설명
                height: 0,
                weight: 0,
                capture: 0,
            }
        }
    },
    methods: {
        //메뉴 선택 메소드
        changeMenu(no) {
            this.clickMenu = no;
            const audio = this.$refs.clickSound; //ref지정된 오디오 태그
            if (audio) {
                audio.play();
            }
        },
        //이름 포맷 (이브이 -> eevee)
        nameFormat(sendName) {
            switch (sendName) {
                case 0:
                    return "eevee"
                case 1:
                    return "vaporeon"
                case 2:
                    return "jolteon"
                case 3:
                    return "flareon"
                case 4:
                    return "espeon"
                case 5:
                    return "umbreon"
                case 6:
                    return "leafeon"
                case 7:
                    return "glaceon"
                case 8:
                    return "sylveon"
            }
        },
        //fetch메소드
        async getPokemonData(sendName) {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/pokemon/${this.nameFormat(sendName)}`); //포켓몬 기본 정보
            const speciesResponse = await axios.get(response.data.species.url); //포켓몬의 종
            const koreanGenus = await speciesResponse.data.genera.find(gen => gen.language.name === 'ko'); //한국어: 포켓몬 별명
            const pokemonDesc = await speciesResponse.data.flavor_text_entries.find(desc => desc.language.name === 'ko').flavor_text; //한국어 설명란 하나만 추출
            
            this.pokemonData = { //하나의 객체로 통합하여 할당
                genus: koreanGenus.genus, //한국어 별명
                type: response.data.types[0].type.name, //타입명
                id: response.data.id, //도감번호
                voice: response.data.cries.latest, //울음소리
                description: pokemonDesc, //도감 설명
                height: response.data.height, //신장
                weight: response.data.weight, //체중
                capture: speciesResponse.data.capture_rate //포획률
            }
        },
        childUpdate(changeNumber){ //자식컴포넌트의 emit 핸들러
            this.clickMenu = changeNumber; //변경된 숫자값을 메뉴에 적용
        }
    }
}
</script>
<style scoped>
span.active {
    width: 250px;
    border-color: #fff;
}
</style>