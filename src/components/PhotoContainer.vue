<script>
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { menuAPI } from "../api/menuAPI";

export default {
    props: {
        pokemonNo: Number,
    },
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
    watch: {
        pokemonNo(index) {
            this.changeSlide(index);
        }
    },
    data() {
        return {
            carouselArray: menuAPI,
        }
    },
     methods: {
        changeSlide(indexNumber){
            this.myCarousel.slideTo(indexNumber);
        },
        slideButtonClicked(indexNumber) {
            this.myCarousel.slideTo(indexNumber);
            this.clickSound();
        },
        handleStart(data) {
            if(data.slidingToIndex < 0) {
                this.$emit('getChangeChild', data.slidingToIndex + 9);
            }
            else if(data.slidingToIndex > data.slidesCount) {
                this.$emit('getChangeChild', data.slidingToIndex - 9);
            }
            else{
                this.$emit('getChangeChild', data.slidingToIndex)
            }
            console.log(data);
            this.clickSound();
        },
        //클릭 효과음
        clickSound() {
            const audio = this.$refs.clickSound; //ref지정된 오디오 태그
            if (audio) {
                audio.play();
            }
        }
    }
}
</script>
<template>
    <div class="pokemon-carousel-container">
        <div class="slide-container">
            <Carousel :itemsToShow="4" :wrapAround="true" :transition="200" ref="myCarousel" :mouseDrag="false"
            @slide-start="handleStart">
			<Slide v-for="data in carouselArray" :key="data.no" @click="myCarousel.slideTo(data.no)">
				<div class="carousel__item">
					<img class="slideImg" :src="'src/static/carousel/'+ data.name + '.webp'" width="200px" height="200px" />
				</div>
			</Slide>
		</Carousel>
        </div>
        <div class="slide-buttons">
            <div>
                <button
                 v-for="index in carouselArray.slice(0, 4)" 
                 @click="slideButtonClicked(index.no)"
                 :class="pokemonNo === index.no ? 'selected' : ''">
                    <img :src="'src/static/carousel/icon/' + index.name + '.webp'" width="60px" height="60px"/>
                </button>
            </div>
            <div>
                <button 
                v-for="index in carouselArray.slice(4, 9)" 
                @click="slideButtonClicked(index.no)" 
                :class="pokemonNo === index.no ? 'selected' : ''">
                    <img :src="'src/static/carousel/icon/' + index.name + '.webp'" width="60px" height="60px"/>
                </button>

            </div>
            <audio ref="clickSound">
                    <source src="../static/plink.mp3" type="audio/mp3" />
            </audio>
        </div>
    </div>
</template>

<style>
</style>