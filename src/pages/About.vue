<script>
// import { ref } from "vue";
// import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
// import home_1 from "../static/carousel/이브이.webp";
// import home_2 from "../static/carousel/샤미드.webp";
// import home_3 from "../static/carousel/쥬피썬더.webp";
// import home_4 from "../static/carousel/부스터.webp";
// import home_5 from "../static/carousel/에브이.webp";
// import home_6 from "../static/carousel/블래키.webp";
// import home_7 from "../static/carousel/리피아.webp";
// import home_8 from "../static/carousel/글레이시아.webp";
// import home_9 from "../static/carousel/님피아.webp";

//import "vue3-carousel/dist/carousel.css";

export default {
	name: "About",
	// components: {
	// 	Carousel,
	// 	Slide,
    //     Navigation,
	// 	Pagination,
	// },
    // setup() {
    //     const myCarousel = ref(null);
    //     return {
    //         myCarousel
    //     }
    // },
	// data() {
	// 	return {
	// 		slides: [home_1, home_2, home_3, home_4, home_5, home_6, home_7, home_8, home_9],
	// 	};
	// },
    // methods: {
    //     handleStart(data) {
    //         if(data.slidingToIndex >= data.slidesCount) {
    //             console.log(0)
    //         }
    //         else if(data.slidingToIndex < 0) {
    //             console.log(data.slidesCount - 1)
    //         }
    //         else{
    //             console.log(data.slidingToIndex)
    //         }
    //     },
    //     // handleEnd(data) {
    //     //     console.log(data)
    //     // },
    //     // handleLoop(data){
    //     //     console.log(data)
    //     // }
    // }
};
</script>
<template>
    <!-- <div class="container">
        <div class="wrapper">
		<Carousel :itemsToShow="3" :wrapAround="true" :transition="500" ref="myCarousel"
            @slide-start="handleStart">
			<Slide v-for="slide in slides" :key="slide">
				<div class="carousel__item">
					<img class="slideImg" :src="slide" width="100px"/>
				</div>
			</Slide>
		</Carousel>

        <button @click="myCarousel.slideTo(8)">클릭</button>
        
	</div>
    </div> -->
	
</template>


<style>

</style>