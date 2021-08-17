import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/router/routers';
// 导入routers的路由
const routes = Routes;
// 创建初始化router
const router = createRouter({
    /**
     * hash模式：createWebHashHistory，
     * history模式：createWebHistory
     */
  history: createWebHistory(),
  routes:routes,
});

//配置导航守卫
router.beforeEach((to,from,next) => {
    //如果访问的是登录页，直接放行
    if(to.path === '/login') return next();
    // 获取token
    // const userInfo = sessionStorage.getItem('token');
    const userInfo = '565432';
    // 判断token是否存在，如果不存在返回登录页，存在就允许跳转
    if(!userInfo) return next('/login');
    next()
});

export default router
