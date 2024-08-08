<template>
    <section class="home-container">
        <div class="main"></div>
        <video autoplay muted loop>
            <source src="/bg_Videos/eevee.mp4" type="video/mp4"/>
        </video>
    </section>
</template>
<script>
import '../assets/home.scss';

export default {
    name: 'Home' //라우터 이름
}
</script>