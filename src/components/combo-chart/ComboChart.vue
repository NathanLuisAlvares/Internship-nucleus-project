<template>
  <div id="app" style="width:65%;">
    <h4> Combo Chart </h4>
    <GChart
      type="ComboChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
  import { date } from "quasar";
  import dashboardData from "src/nucleus/DashboardData.json";
  import { GChart } from 'vue-google-charts';

  export default {
    name: 'ComboCharts',
    components: {
      GChart,
    },
    data() {
      return{
        chartData: [],
        chartOptions: {
          title: 'Monthly Count of Status, Type and Date',
          vAxis: { title: 'No. of People' },
          hAxis: { title: 'Month' },
          seriesType: 'bars',
          series: { 6: { type: 'line' } },
          width: 1400,
          height: 600,
        },
        fetchedCommunications: []
      }
    },
    methods:{
      fetchData(){
          var rd1=0,wq1=0,rs1=0,si1=0,wp1=0,o1=0, avg_jan=0
          var rd2=0,wq2=0,rs2=0,si2=0,wp2=0,o2=0, avg_feb=0
          var rd3=0,wq3=0,rs3=0,si3=0,wp3=0,o3=0, avg_mar=0
          var rd4=0,wq4=0,rs4=0,si4=0,wp4=0,o4=0, avg_apr=0
          var rd5=0,wq5=0,rs5=0,si5=0,wp5=0,o5=0, avg_may=0
          var rd6=0,wq6=0,rs6=0,si6=0,wp6=0,o6=0, avg_jun=0
          var rd7=0,wq7=0,rs7=0,si7=0,wp7=0,o7=0, avg_jul=0;
          var rd8=0,wq8=0,rs8=0,si8=0,wp8=0,o8=0, avg_aug=0
          var rd9=0,wq9=0,rs9=0,si9=0,wp9=0,o9=0, avg_sep=0
          var rd10=0,wq10=0,rs10=0,si10=0,wp10=0,o10=0, avg_oct=0
          var rd11=0,wq11=0,rs11=0,si11=0,wp11=0,o11=0, avg_nov=0
          var rd12=0,wq12=0,rs12=0,si12=0,wp12=0,o12=0, avg_dec=0
          var responseData = dashboardData;
          if (responseData.Status === "OK") {
            this.fetchedCommunications = responseData.ResponseJson.Communications;
            var self = this;
            this.fetchedCommunications.forEach(function (communication) {
              var obj = {}, obj1 = {}, obj2 = {};
              obj2["Type"] = self.truncateString(communication.Type);
              obj["Status"] = self.truncateString(communication.Status);
              obj1["Date"] = self.formatDate(communication.CreatedOn)

            if(obj2.Type=="Road Defects")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {rd1++}
                if(obj1.Date=="Feb")
                {rd2++}
                if(obj1.Date=="Mar")
                {rd3++}
                if(obj1.Date=="Apr")
                {rd4++}
                if(obj1.Date=="May")
                {rd5++}
                if(obj1.Date=="Jun")
                {rd6++}
                if(obj1.Date=="Jul")
                {rd7++}
                if(obj1.Date=="Aug")
                {rd8++}
                if(obj1.Date=="Sep")
                {rd9++}
                if(obj1.Date=="Oct")
                {rd10++}
                if(obj1.Date=="Nov")
                {rd11++}
                if(obj1.Date=="Dec")
                {rd12++}
              }
            }

            if(obj2.Type=="Water Quality")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {wq1++}
                if(obj1.Date=="Feb")
                {wq2++}
                if(obj1.Date=="Mar")
                {wq3++}
                if(obj1.Date=="Apr")
                {wq4++}
                if(obj1.Date=="May")
                {wq5++}
                if(obj1.Date=="Jun")
                {wq6++}
                if(obj1.Date=="Jul")
                {wq7++}
                if(obj1.Date=="Aug")
                {wq8++}
                if(obj1.Date=="Sep")
                {wq9++}
                if(obj1.Date=="Oct")
                {wq10++}
                if(obj1.Date=="Nov")
                {wq11++}
                if(obj1.Date=="Dec")
                {wq12++}
              }
            }

            if(obj2.Type=="Road Signs")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {rs1++}
                if(obj1.Date=="Feb")
                {rs2++}
                if(obj1.Date=="Mar")
                {rs3++}
                if(obj1.Date=="Apr")
                {rs4++}
                if(obj1.Date=="May")
                {rs5++}
                if(obj1.Date=="Jun")
                {rs6++}
                if(obj1.Date=="Jul")
                {rs7++}
                if(obj1.Date=="Aug")
                {rs8++}
                if(obj1.Date=="Sep")
                {rs9++}
                if(obj1.Date=="Oct")
                {rs10++}
                if(obj1.Date=="Nov")
                {rs11++}
                if(obj1.Date=="Dec")
                {rs12++}
              }
            }

            if(obj2.Type=="Sewage Issues")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {si1++}
                if(obj1.Date=="Feb")
                {si2++}
                if(obj1.Date=="Mar")
                {si3++}
                if(obj1.Date=="Apr")
                {si4++}
                if(obj1.Date=="May")
                {si5++}
                if(obj1.Date=="Jun")
                {si6++}
                if(obj1.Date=="Jul")
                {si7++}
                if(obj1.Date=="Aug")
                {si8++}
                if(obj1.Date=="Sep")
                {si9++}
                if(obj1.Date=="Oct")
                {si10++}
                if(obj1.Date=="Nov")
                {si11++}
                if(obj1.Date=="Dec")
                {si12++}
              }
            }

            if(obj2.Type=="Water Pipeline")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {wp1++}
                if(obj1.Date=="Feb")
                {wp2++}
                if(obj1.Date=="Mar")
                {wp3++}
                if(obj1.Date=="Apr")
                {wp4++}
                if(obj1.Date=="May")
                {wp5++}
                if(obj1.Date=="Jun")
                {wp6++}
                if(obj1.Date=="Jul")
                {wp7++}
                if(obj1.Date=="Aug")
                {wp8++}
                if(obj1.Date=="Sep")
                {wp9++}
                if(obj1.Date=="Oct")
                {wp10++}
                if(obj1.Date=="Nov")
                {wp11++}
                if(obj1.Date=="Dec")
                {wp12++}
              }
            }

            if(obj2.Type=="Other")
            {
              if(obj.Status=="ASSIGNED" || obj.Status=="NEW" || obj.Status=="CLOSED")
              {
                if(obj1.Date=="Jan")
                {o1++}
                if(obj1.Date=="Feb")
                {o2++}
                if(obj1.Date=="Mar")
                {o3++}
                if(obj1.Date=="Apr")
                {o4++}
                if(obj1.Date=="May")
                {o5++}
                if(obj1.Date=="Jun")
                {o6++}
                if(obj1.Date=="Jul")
                {o7++}
                if(obj1.Date=="Aug")
                {o8++}
                if(obj1.Date=="Sep")
                {o9++}
                if(obj1.Date=="Oct")
                {o10++}
                if(obj1.Date=="Nov")
                {o11++}
                if(obj1.Date=="Dec")
                {o12++}
              }
            }

                avg_jan=(rd1+wq1+rs1+si1+wp1+o1)/6
                avg_feb=(rd2+wq2+rs2+si2+wp2+o2)/6
                avg_mar=(rd3+wq3+rs3+si3+wp3+o3)/6
                avg_apr=(rd4+wq4+rs4+si4+wp4+o4)/6
                avg_may=(rd5+wq5+rs5+si5+wp5+o5)/6
                avg_jun=(rd6+wq6+rs6+si6+wp6+o6)/6
                avg_jul=(rd7+wq7+rs7+si7+wp7+o7)/6
                avg_aug=(rd8+wq8+rs8+si8+wp8+o8)/6
                avg_sep=(rd9+wq9+rs9+si9+wp9+o9)/6
                avg_oct=(rd10+wq10+rs10+si10+wp10+o10)/6
                avg_nov=(rd11+wq11+rs11+si11+wp11+o11)/6
                avg_dec=(rd12+wq12+rs12+si12+wp12+o12)/6
            });

            this.chartData=[
            ['Month','Road Defects','Water Quality','Road Signs','Sewage Issues','Water Pipeline','Other','Average'],
            ['JAN', rd1, wq1, rs1, si1, wp1, o1, avg_jan],
            ['FEB', rd2, wq2, rs2, si2, wp2, o2, avg_feb],
            ['MAR', rd3, wq3, rs3, si3, wp3, o3, avg_mar],
            ['APR', rd4, wq4, rs4, si4, wp4, o4, avg_apr],
            ['MAY', rd5, wq5, rs5, si5, wp5, o5, avg_may],
            ['JUN', rd6, wq6, rs6, si6, wp6, o6, avg_jun],
            ['JUL', rd7, wq7, rs7, si7, wp7, o7, avg_jul],
            ['AUG', rd8, wq8, rs8, si8, wp8, o8, avg_aug],
            ['SEP', rd9, wq9, rs9, si9, wp9, o9, avg_sep],
            ['OCT', rd10, wq10, rs10, si10, wp10, o10, avg_oct],
            ['NOV', rd11, wq11, rs11, si11, wp11, o11, avg_nov],
            ['DEC', rd12, wq12, rs12, si12, wp12, o12, avg_dec]
          ]
        }
      },
      formatDate(unformatedDate) {
        let formattedString = date.formatDate(unformatedDate, "MMM");
        return formattedString;
      },
      truncateString(string) {
        if (string !== undefined && string !== null) {
          if (string.length < 30) {
            return string;
          } else {
            return string.substring(0, 30) + "...";
          }
        } else {
          return "";
        }
      },
    },
    mounted() {
      this.$q.loading.hide();
      this.fetchData();
    },
  };
</script>
