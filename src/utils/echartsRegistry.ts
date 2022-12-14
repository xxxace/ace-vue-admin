import VChart from "vue-echarts";
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { App } from "vue";

export default {
    install(vm: App<Element>) {
        use([
            GridComponent,
            LineChart,
            TooltipComponent
        ]);

        vm.component('v-chart', VChart)
    }
}
