<template>
  <div id="app" style="width:70%;">
      <h4>Pie Chart for Status</h4>
      <GChart
        type="PieChart"
        :data="chartdata"
        :options="chartOptions"

      />
    </div>

  </template>

  <script>
  import { GChart } from 'vue-google-charts'
  import dashboardData from "src/nucleus/DashboardData.json";
  import { ref } from "vue";
  export default {
    components: {
      GChart
    },
    name: "Pie",
    data() {
      return {
         chartdata:[],

        chartOptions: {
         title:'Status',
         width: 1100,
        height: 400,
        is3D: true,
        pieStartAngle: 100,
        colors: ['#e0440e', '#e6693e','#f6c7b6'],
        },
        fetchedCommunications: [],

      };
    },
    methods: {

      fetchData() {
          var l=0; var m=0; var n=0;
        var responseData = dashboardData;
        if (responseData.Status === "OK") {
          this.fetchedCommunications = responseData.ResponseJson.Communications;
          this.fetchedCommunications.forEach(function (communication) {
            var obj = {};
            obj["Status"] = communication.Status;
            if(obj.Status=="ASSIGNED"){ l++;}
              if(obj.Status=="NEW"){  m++;}
              if(obj.Status=="CLOSED"){    n++; }
          });
          this.chartdata=[
          ["Status", "Total"],
          ["ASSIGNED", l],
          ["NEW", m],
          ["CLOSED", n],
        ]
        }
      },


      // truncateString(string) {
      //   if (string !== undefined && string !== null) {
      //     if (string.length < 30) {
      //       return string;
      //     } else {
      //       return string.substring(0, 30) + "...";
      //     }
      //   } else {
      //     return "";
      //   }
      // },
    },
    mounted() {
      this.$q.loading.hide();
      this.fetchData();

    },
  };
  </script>

  <style>

  </style>
