<template>
    <v-chart class="chart" :autoresize="true" :option="option" />
</template>
  
<script>
import * as echarts from 'echarts'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
    GridComponent,
    AxisPointerComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { getPreviousDate } from '@/utils'
import { ref, defineComponent } from "vue";

use([
    GridComponent,
    AxisPointerComponent,
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);



export default defineComponent({
    name: "LineChart",
    components: {
        VChart
    },
    setup: () => {

        const option = ref({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: "10%",
                left: "4%",
                right: "4%",
                bottom: "8%",
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    margin: 20,
                    color: "#cbcbcb",
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                data: getPreviousDate(new Date())
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        type: [5, 5],
                        // cap: "round",
                        dashOffset: 5,
                        width: 1.4,
                        // opacity: 0.5
                    }
                }
            },
            series: [
                {
                    type: 'line',
                    // showAllSymbol: true,
                    smooth: true,
                    symbol: "none",
                    // symbolSize: 6,
                    lineStyle: {
                        normal: {
                            width: 3,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#165DFF",
                                },
                                {
                                    offset: 1,
                                    color: "#7BC0FC",
                                },
                            ],
                                false), // 线条颜色
                        },
                    },
                    // itemStyle: {
                    //     color: "red",
                    //     borderColor: "#fff",
                    //     borderWidth: 3,
                    // },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(22, 93, 255,0.2)",
                                    },
                                    {
                                        offset: 1,
                                        color: " rgba(123, 192, 252,0)",
                                    },
                                ],
                                false
                            ),
                        },
                    },
                    data: [100, 800, 300, 600, 135, 700, 260]
                }
            ]
        });

        return { option };
    }
});
</script>
  
<style scoped>
.chart {
    height: 100%;
}
</style>