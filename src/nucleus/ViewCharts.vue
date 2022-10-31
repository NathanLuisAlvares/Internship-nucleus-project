<template>
    <q-page class="flex flex-center" padding>
          <div class="row-1">
            <q-card>
              <div class="col">
                <ComboChart/>
              </div>
            </q-card>
            <q-card>
              <div class="col">
                <BarChart/>
              </div>
            </q-card>
            <q-card>
              <div class="col">
                <LineChart/>
              </div>
            </q-card>
            <q-card>
              <div class="col">
                <PieChart/>
              </div>
            </q-card>
          </div>

    </q-page>
</template>
<script>
import BarChart from 'src/components/bar-chart/BarChart.vue';
import LineChart from 'src/components/line-chart/LineChart.vue';
import PieChart from 'src/components/pie-chart/PieChart.vue';
import ComboChart from '../components/combo-chart/ComboChart.vue';

export default {
  name: 'ViewCharts',
  components: {
    BarChart,
    LineChart,
    PieChart,
    ComboChart
},
};
</script>

<style>

</style>
