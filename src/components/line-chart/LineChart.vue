<template>
  <div id="app" style="width:65%;">
      <h4>Line Chart for CreatedOn </h4>
      <GChart
        type="LineChart"
        :data="data1"
        :options="chartOptions"
      />
    </div>

  </template>

  <script>
  import { date } from "quasar";
  import { ref } from "vue";
  import { GChart } from 'vue-google-charts'
  import dashboardData from "src/nucleus/DashboardData.json";

  export default {
    components: {
      GChart
    },
    name: "line-chart",
    data() {
      return {
         data1:[],

        chartOptions: {

          width: 1100,
          height: 550,
          is3D: true,
          colors:['#5fc99d'],
          hAxis: {

          title:'Month',
        },
        vAxis: {

          title:'No of people',

        }
        },
        fetchedCommunications: [],



      };
    },
    methods: {

      fetchData() {
          var a=0,b=0,c=0,d=0,e=0,f=0;
          var g=0,h=0,i=0,j=0,k=0,l=0;
        var responseData = dashboardData;
        if (responseData.Status === "OK") {
          this.fetchedCommunications = responseData.ResponseJson.Communications;
          var self = this;
          this.fetchedCommunications.forEach(function (communication) {
            var obj = {};
            obj["CommunicationId"] = communication.CommunicationId;
            obj["Date"] = self.formatDate(communication.CreatedOn)


              if(obj.Date=="Jan"){  a++; }
              if(obj.Date=="Feb"){ b++;}
              if(obj.Date=="Mar"){c++;}
              if(obj.Date=="Apr"){ d++;}
              if(obj.Date=="May"){ e++;}
              if(obj.Date=="Jun"){ f++;}
              if(obj.Date=="Jul"){ g++;}
              if(obj.Date=="Aug"){ h++;}
              if(obj.Date=="Sep"){i++;}
              if(obj.Date=="Oct"){j++;}
              if(obj.Date=="Nov"){ k++;}
              if(obj.Date=="Dec"){l++;}

          });

          this.data1=[
          ["CreatedOn", "Total no of people"],
          ["JAN", a],
          ["FEB", b],
          ["MAR", c],
          ["APR", d],
          ["MAY", e],
          ["JUN", f],
          ["JUL", g],
          ["AUG", h],
          ["SEPT",i],
          ["OCT", j],
          ["NOV", k],
          ["DEC", l],


        ]


        }
      },


      formatDate(unformatedDate) {
            let formattedString = date.formatDate(unformatedDate, "MMM");

            return formattedString;
        },

    },
    mounted() {
      //this.$q.loading.hide();
      this.fetchData();

    },
  };
  </script>

  <style>

  </style>
