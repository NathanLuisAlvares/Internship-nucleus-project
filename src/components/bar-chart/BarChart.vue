<template>
  <div id="app" style="width:70%;">
      <h4>Bar Chart for Types</h4>
      <GChart
        type="BarChart"
        :data="chartata"
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
    name: "Bar",
    data() {
      return {
         chartata:[],

        chartOptions: {
          width: 1100,
          height: 550,
         title:'Types',
        },
        fetchedCommunications: [],

      };
    },
    methods: {

      fetchData() {
          var a=0;
          var b=0;
          var c=0;
          var d=0;
          var e=0;
          var f=0;
        var responseData = dashboardData;
        if (responseData.Status === "OK") {
          this.fetchedCommunications = responseData.ResponseJson.Communications;
          var self = this;
          this.fetchedCommunications.forEach(function (communication) {
            var obj = {};
            obj["CommunicationId"] = communication.CommunicationId;
            obj["Type"] = self.truncateString(communication.Type);
            if(obj.Type=="Road Defects"){
                  a++;
              }
              if(obj.Type=="Water Quality"){
                  b++;
              }
              if(obj.Type=="Road Signs"){
                  c++;
              }
              if(obj.Type=="Sewage Issues"){
                  d++;
              }
              if(obj.Type=="Water Pipeline"){
                  e++;
              }
              if(obj.Type=="Other"){
                  f++;
              }
          });
          this.chartata=[
          ["Types", "No of users"],
          ["Road Defects", a],
          ["Water Quality", b],
          ["Road Signs", c],
          ["Sewage Issues", d],
          ["Water Pipeline", e],
          ["Other", f],
        ]
        }
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

  <style>

  </style>
