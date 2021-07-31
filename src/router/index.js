import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/router/routers/index.js';
const routes = Routes;

console.log(routes);
const router = createRouter({
    /**
     * hash模式：createWebHashHistory，
     * history模式：createWebHistory
     */
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to,from,next) => {
    if(to.path === 'login') return next();
    // const userInfo = sessionStorage.getItem('token');
    const userInfo = '123456';
    if(!userInfo) return next('login');
    next()
});

export default router
