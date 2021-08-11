import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/router/routers';
const routes = Routes;

const router = createRouter({
    /**
     * hash模式：createWebHashHistory，
     * history模式：createWebHistory
     */
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes:routes,
});

router.beforeEach((to,from,next) => {
    if(to.path === 'login') return next();
    // const userInfo = sessionStorage.getItem('token');
    const userInfo = '123456';
    if(!userInfo) return next('login');
    next()
});

export default router
