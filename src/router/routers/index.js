import main from '@/components/index.vue'
import view from '@/components/menus/menu.vue'
/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu显示的name
 *  icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */
const Routes = [
    {
        path: '/',
        redirect: '/home',
        isShow: false
    },
    {
        path: '/login',
        name: '登录',
        isShow: false,
        component: () => import('@/components/login/login.vue'),
    },
    {
        path: '/home',
        name: '首页',
        isShow: false,
        component:main,
        redirect:'/home/index',
        children:[
            {
                path: '/home/index',
                isShow: false,
                icon: 'el-icon-s-home',
                component: () => import('@/views/home.vue'),
            },
        ]
    },
    {
        path: '/system',
        name: '系统管理',
        isShow: true,
        icon: 'el-icon-s-home',
        component:main,
        children:[
            {
                path: 'user',
                name: '用户管理',
                isShow: true,
                icon: 'el-icon-user',
                component:view,
                children:[
                    {
                        path: '/system/user/home',
                        name: '添加用户',
                        isShow: true,
                        icon: 'el-icon-user',
                        component: () => import('@/views/system/Home.vue')
                    },
                    {
                        path: '/system/user/user',
                        name: '用户列表',
                        isShow: true,
                        icon: 'el-icon-user',
                        component: () => import('@/views/system/user.vue')
                    }
                ]
            },
            {
                path: '/system/doc',
                name: '文档',
                isShow: true,
                icon: 'el-icon-s-order',
                component: () => import('@/views/system/About.vue'),
            },
        ]
    },
];
export default Routes;
