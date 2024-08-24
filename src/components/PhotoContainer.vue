<script>
export default {
    props: {
        pokemonProps: Object,
        pokemonNo: Number,
        menuArray: Array,
    },
    data() {
        return {
            photoData: [
                "/static/carousel/이브이.webp",
                "/static/carousel/샤미드.webp",
                "/static/carousel/쥬피썬더.webp",
                "/static/carousel/부스터.webp",
                "/static/carousel/에브이.webp",
                "/static/carousel/블래키.webp",
                "/static/carousel/리피아.webp",
                "/static/carousel/글레이시아.webp",
                "/static/carousel/님피아.webp",
            ],
        }
    }
}
</script>
<template>
    <div class="carousel">
        <div v-for="(photo, index) in photoData" :key="photo">
            <img :src="'src/' + photo" alt="존재하지 않는 이미지들" width="200px"/>
        </div>
    </div>
</template>
<style scoped></style>