/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */
const Routes = [
    {
        path: '/',
        redirect: '/index',
        isShow: false
    },
    {
        path: '/login',
        name: '登录',
        isShow: false,
        component: () => import('@/components/login/login.vue'),
    },
    {
        path: '/index',
        name: '首页',
        isShow: false,
        meta: {icon: 'el-icon-s-order'},
        component: () => import('@/components/index.vue'),
        children:[
            {
                path: '/system',
                name: '系统管理',
                isShow: true,
                icon: 'el-icon-s-home',
                children:[
                    {
                        path: '/user',
                        name: '用户管理',
                        isShow: true,
                        icon: 'el-icon-s-home',
                        component: () => import('@/views/system/user.vue')
                    },
                ]
            },

            {
                path: '/doc',
                name: '文档',
                isShow: true,
                icon: 'el-icon-s-order',
                component: () => import('@/views/system/About.vue'),


            },
            {
                path: '/home',
                name: '测试',
                isShow: true,
                icon: 'el-icon-s-order',
                component: () => import('@/views/system/Home.vue'),
            },
        ]
    },
];
export default Routes;
