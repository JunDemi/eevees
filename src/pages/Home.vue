<template>
    <section class="home-container">
        <Intro :pokemonProps="pokemonData" :pokemonName="clickMenu"/>
        <div class="view">{{ clickMenu }}</div>
        <div class="menu-list">
            <span v-for="pokemon in menuArray" :style="pokemon.menuStyle" :key="pokemon.name"
                @click="changeMenu(pokemon.name)" :class="{ active: pokemon.name === clickMenu ? true : false }">
                <img :src="pokemon.modelImg" alt="" width="70px" height="70px" />
                <p>{{ clickMenu === pokemon.name ? pokemon.name : "" }}</p>
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

export default {
    name: 'Home', //라우터 이름
    components: { //컴포넌트
        Intro
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
            clickMenu: "이브이",
            //메뉴 배열
            menuArray: menuAPI,
            pokemonData: {
                genus: "", //포켓몬 별명
                type: "", //포켓몬 타입
                id: 0, //포켓몬 도감번호 
                voice: "" //포켓몬 울음소리
            }
        }
    },
    methods: {
        //메뉴 선택 메소드
        changeMenu(name) {
            this.clickMenu = name;
        },
        //이름 포맷 (이브이 -> eevee)
        nameFormat(sendName) {
            switch (sendName) {
                case "이브이":
                    return "eevee"
                case "샤미드":
                    return "vaporeon"
                case "쥬피썬더":
                    return "jolteon"
                case "부스터":
                    return "flareon"
                case "에브이":
                    return "espeon"
                case "블래키":
                    return "umbreon"
                case "리피아":
                    return "leafeon"
                case "글레이시아":
                    return "glaceon"
                case "님피아":
                    return "sylveon"
            }
        },
        //fetch메소드
        async getPokemonData(sendName) {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/pokemon/${this.nameFormat(sendName)}`); //포켓몬 기본 정보
            const speciesResponse = await axios.get(response.data.species.url); //포켓몬의 종
            const koreanGenus = await speciesResponse.data.genera.find(gen => gen.language.name === 'ko'); //한국어: 포켓몬 별명

            this.pokemonData = {
                genus: koreanGenus.genus,
                type: response.data.types[0].type.name,
                id: response.data.id,
                voice: response.data.cries.latest
            }
        },
    }
}
</script>
<style scoped>
span.active {
    width: 250px;
    border-color: #fff;
}
</style>