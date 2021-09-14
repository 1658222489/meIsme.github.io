<template>
    <div class="echartsStyle" ref="echartsRoot" id="echartsRoot"></div>
</template>

<script>
    import {reactive, onMounted, toRefs,ref} from 'vue'
    import * as echarts from 'echarts';
    export default {
        name: "echarts",
        setup() {
            const echartsRoot = ref(null);
            const data = reactive({

            });
            const myEchart = () => {
                // const chartDom = document.getElementById('echartsRoot');
                const chartDom = echartsRoot.value;
                const myChart = echarts.init(chartDom);
                const option= {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                };
                option && myChart.setOption(option);
            };
            onMounted(() => {
                myEchart()
            });
            return {
                echartsRoot,
                ...toRefs(data)
            }
        }
    }
</script>

<style lang='less' scoped>
    .echartsStyle{
        width: 600px;
        height: 500px;
    }
</style>
