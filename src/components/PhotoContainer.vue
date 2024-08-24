<script>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { menuAPI } from "../api/menuAPI";

export default {
	components: {
		Carousel,
		Slide,
	},
    setup() {
        const myCarousel = ref(null);
        return {
            myCarousel
        }
    },
    data() {
        return {
            carouselArray: menuAPI
            // photoData: [
            //     "../static/carousel/이브이.webp", 
            //     "../static/carousel/샤미드.webp", 
            //     "../static/carousel/쥬피썬더.webp", 
            //     "../static/carousel/부스터.webp", 
            //     "../static/carousel/에브이.webp", 
            //     "../static/carousel/블래키.webp", 
            //     "../static/carousel/리피아.webp", 
            //     "../static/carousel/글레이시아.webp", 
            //     "../static/carousel/님피아.webp"
            // ],
        }
    },
     methods: {
        handleStart(data) {
            if(data.slidingToIndex >= data.slidesCount) {
                console.log(0)
            }
            else if(data.slidingToIndex < 0) {
                console.log(data.slidesCount - 1)
            }
            else{
                console.log(data.slidingToIndex)
            }
        },
    }
}
</script>
<template>
    <div class="pokemon-carousel-container">
        <div class="slide-container">
            <Carousel :itemsToShow="3" :wrapAround="true" :transition="500" ref="myCarousel"
            @slide-start="handleStart">
			<Slide v-for="data in carouselArray" :key="data.no">
				<div class="carousel__item">
					<img class="slideImg" :src="'src/static/carousel/'+ data.name + '.webp'" width="300px" height="300px"/>
				</div>
			</Slide>
		</Carousel>
        </div>
        <div class="slide-buttons">
            <div>
                <button v-for="index in carouselArray.slice(0, 4)" @click="myCarousel.slideTo(index.no)">클릭</button>
            </div>
            <div>
                <button v-for="index in carouselArray.slice(4, 9)" @click="myCarousel.slideTo(index.no)">클릭</button>
            </div>
        </div>
    </div>
</template>

<style>
</style>