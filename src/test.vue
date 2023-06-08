<template>
    <div class="main"></div>
</template>

<script>
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

export default {
    data() {
        return {
            syncData: [], // 动态数据
        }
    },
    mounted() {
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line',
                },
            ],
        }

        let chartDom = document.getElementById('main')
        let myChart = echarts.init(chartDom)
        option && myChart.setOption(option)
    },
    methods: {
        // 获取动态数据
        // getSyncData() {
        //     getData().then(res => {
        //         this.syncData = res.data.data
        //     })
        // },
    },
}
</script>