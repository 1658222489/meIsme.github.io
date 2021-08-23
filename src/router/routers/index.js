import main from '@/components/index.vue'
import view from '@/components/menus/menu.vue'
/**
 *
 * 路由配置规则：
 * 一级菜单的component必须为 main||() => import('@/components/index.vue')
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu显示的name
 *  breadcrumb: boolean值，true是可以点击面包屑跳转到对应页面，false||不写||null||unfinde不跳转
 *  ----------  ps：一般父级菜单项都不跳转
 *  redirect:'', 路由转发，可以转发到另外一个页面。
 *  -------------例如：访问 / 会转发到home再转发到 /home/index，/home/index才是需要显示的首页
 *  isShow:'', 是否显示为菜单，为TRUE时为菜单，false不是菜单不会在导航栏显示
 *  icon:'',图标，显示在名称前面的图标
 *  children: [], 子路由，menu中的子menu 没有时可为空数组或者不填，
 *  -----------  当一个菜单有三级或者以上的时候需要在他的父级使用:
 *  -----------  component:view||component: () => import('@/components/menus/menu.vue'),这个属性才能显示出多子级菜单
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
        breadcrumb:true,
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
        breadcrumb:false,
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
                        breadcrumb:true,
                        component: () => import('@/views/system/Home.vue')
                    },
                    {
                        path: '/system/user/user',
                        name: '用户列表',
                        isShow: true,
                        icon: 'el-icon-user',
                        breadcrumb:true,
                        component: () => import('@/views/system/user.vue')
                    }
                ]
            },
            {
                path: '/system/doc',
                name: '文档',
                isShow: true,
                breadcrumb:true,
                icon: 'el-icon-s-order',
                component: () => import('@/views/system/About.vue'),
            },
        ]
    },
    {
        path: '/chart',
        name: '图表',
        isShow: true,
        breadcrumb:true,
        icon: 'el-icon-s-order',
        component:main,
        children:[
            {
                path: '/chart/echarts',
                name: '柱状图',
                isShow: true,
                breadcrumb:true,
                icon: 'el-icon-s-order',
                component:() => import('@/views/system/echarts.vue')
            }
        ]
    },
];
export default Routes;
