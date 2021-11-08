<template>
        <h1>测试图片精灵|图片切片|图片定位显示</h1>
        <!-- 设置三个div显示 -->
        <div class="vip3"></div>
        <div class="vip4"></div>
        <div class="auth"></div>
</template>

<script>
    import {reactive, onMounted, toRefs} from 'vue'
    export default {
        name: "user",
        setup(){
            const data = reactive({
                sum:'',
            });
         
            onMounted(() => {
                
            })
            return {
                ...toRefs(data)
            }
        }
    }
</script>

<style lang='less' scoped>
        div{
            width: 16px;
            height:  16px;
            background-image: url("../../assets/img/weibo.png");
            background-color: chartreuse;
            margin-top: 10px;
        }
        /* 从精灵图片中获取需要的图片 */
        .vip3{              /* 获取vip3 */
            background-position: -24px -48px;
        }
        .vip4{              /* 获取vip4 */
            background-position: -24px -72px;
        }
        .auth{              /* 获取微博认证 */
            width: 95px;    /* 微博认证和vip大小不一样，需单独指定 */
            height: 35px;
            background-position: -425px -50px; 
        }
</style>
