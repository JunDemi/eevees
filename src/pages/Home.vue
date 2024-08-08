<template>
    <section class="home-container">
        <div class="intro"></div>
        <div class="view">{{ clickMenu }}</div>
        <div class="menu-list">
            <span v-for="pokemon in menuArray" :style="pokemon.menuStyle" :key="pokemon.name"
                @click="changeMenu(pokemon.name)"
                :class="{active: pokemon.name === clickMenu ? true : false}"
                >
                <img :src="pokemon.modelImg" alt="" width="70px" height="70px" />
                <p>{{ clickMenu === pokemon.name ? pokemon.name : "" }}</p>
            </span>
        </div>
    </section>
    <video class="bg-video" autoplay muted loop>
        <source src="/bg_Videos/eevee.mp4" type="video/mp4" />
    </video>
</template>
<script>
import { menuAPI } from '../api/menuAPI';
import '../assets/home.scss';

export default {
    name: 'Home', //라우터 이름
    components: { //컴포넌트

    },
    data() {
        return {
            clickMenu: "이브이",
            menuArray: menuAPI
        }
    },
    methods: {
        changeMenu(name) {
            this.clickMenu = name;
        }
    }
}
</script>
<style scoped>
    span.active{
        width: 250px;
    }
</style>