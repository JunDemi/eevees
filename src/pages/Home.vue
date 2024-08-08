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
                {{ clickMenu === pokemon.name ? pokemon.name : "" }}
            </span>
        </div>
    </section>
    <video class="bg-video" autoplay muted loop>
        <source src="/bg_Videos/eevee.mp4" type="video/mp4" />
    </video>
</template>
<script>
import '../assets/home.scss';

export default {
    name: 'Home', //라우터 이름
    components: { //컴포넌트

    },
    data() {
        return {
            clickMenu: "이브이",
            menuArray: [
                {
                    name: "이브이",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(170, 82, 0, 0.7), rgba(170, 82, 0, 0.7)), url(/public/menuImgs/이브이.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/O4Jd_KajtxifyyLFO1C3ojCGtHl-pKscr3324lDb_eUZBe0c-_ED8YwDBqmYG9pT9jBe916D4lIZ637hHomEBw.webp"
                },
                {
                    name: "샤미드",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(0, 84, 161, 0.7), rgba(0, 84, 161, 0.7)), url(/public/menuImgs/샤미드.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/Z2ZtH0QG_GWWB-BKEw-lgk0Lewb-nv8jctwteTEVAtXYbPWbjlTrbLPnUB5no5J5Vp4nznnHPQ5jH_vgwn-S8A.webp"
                },
                {
                    name: "쥬피썬더",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(142, 144, 0, 0.7), rgba(142, 144, 0, 0.7)), url(/public/menuImgs/쥬피썬더.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/_k5VLztKcq5w8cuuCIDs90FP3iUU1OWvE2Xi2fGGxC5d3DEdMAQ4_fzC9yqNvQOntEJEZM8gk_j9ZaclfgKf3Q.webp"
                },
                {
                    name: "부스터",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(166, 60, 0, 0.7), rgba(166, 60, 0, 0.7)), url(/public/menuImgs/부스터.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/oF6E-p9wvx_0L4GkjUpLDPZimxTWfTK6omDzvRbFuvDdlzhP3v2CjdFPPftSW4zxlimuDcZrM_abVQ-idTuwvA.webp"
                },
                {
                    name: "에브이",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(173, 0, 168, 0.7), rgba(173, 0, 168, 0.7)), url(/public/menuImgs/에브이.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/JtYBqIl3Ek5mtlDbkgE_HqbqIOFPeWZ0_kJoII3uo4aEpyA--DQWY482PAIL7WNpGLb2_kjRKoS4T7jZyoZ-oQ.webp"
                },
                {
                    name: "블래키",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(102, 102, 102, 0.7), rgba(102, 102, 102, 0.7)), url(/public/menuImgs/블래키.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/oh4aXHAW47ZIKvqWUp1-qEJecFdCvdiwzsHXWM0S1cbQTs9CYs8Snon-HfqSxFgLDKx4ojIkHQBvHLYNt5pMAQ.webp"
                },
                {
                    name: "리피아",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(38, 144, 0, 0.7), rgba(38, 144, 0, 0.7)), url(/public/menuImgs/리피아.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/4Bb7NkJX5TM9Knmgpa5JbvqGYiYDHfwlsrmflf6Xo7qG5u-hzaZ79wO-tuTdpUUatvnZyFDrHqnL8l6zBCI65w.webp"
                },
                {
                    name: "글레이시아",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(39, 172, 164, 0.7), rgba(39, 172, 164, 0.7)), url(/public/menuImgs/글레이시아.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/6cSYp5KHATKoYhNKFwrJKgbH6jwkePz9kmJ1Cuwn8gxqxqib5YK56WjZjbA77NH8CXspT3t_mKoaFdVgCoeouQ.webp"
                },
                {
                    name: "님피아",
                    menuStyle: {
                        backgroundImage: "linear-gradient(rgba(169, 98, 128, 0.7), rgba(169, 98, 128, 0.7)), url(/public/menuImgs/님피아.webp)"
                    },
                    modelImg: "https://i.namu.wiki/i/nvZCS-dV6_XQnBtwIQCKQlWoAmeZRaIftT2WiZ5rX29qDJcFl9XRlYE0e24_j4LSkV9RK3IVmTMAfLmjVmxcfg.webp"
                }
            ],
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