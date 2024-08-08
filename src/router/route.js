import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

//라우트 옵션 할당
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

//라우트 생성 메소드
const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;