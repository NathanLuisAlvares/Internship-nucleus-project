<template>
  <div class="q-ma-sm">

    <q-table
      :title="'Table Dashboard'"
      :rows="filteredData"
      :columns="columns"
      row-key="name"
      class="gt-sm"
      >

      <template v-slot:top>
        <div class="col-2 q-table__title">Table Dashboard</div>
          <q-toggle dense v-model="visibleFilters" class="q-mb-md" />
            <q-slide-transition>
              <div class="q-gutter-md row justify-center" v-show="visibleFilters">
                <TypeFilter @filterType='handleFilterType' :type="choosefilterType"></TypeFilter>
                <StatusFilter @filterStatus="handleFilterStatus" :status="choosefilterStatus"></StatusFilter>
                <DateFilter @filterDate="handleFilterDate" :date="{from: startDateChoosen,to: endDateChoosen}"></DateFilter>
                <SearchFilter @filterSearch="handleFilterSearch" :searchKeywords="filterSearchKeyword"></SearchFilter>
                <div>
                  <q-btn  icon-right="search" label="Apply Filters" class="filterBtns" @click="applyFilters"/>
                  <q-btn  icon-right="refresh" label="Reset Filters" class="filterBtns" @click="resetFilters"/>
                </div>
              </div>
            </q-slide-transition>
      </template>

        <!-- <template v-slot:top>
          <div class="col-2 q-table__title">Table Dashboard</div>

            <q-select
              filled
              v-model="filterStatus"
              :options="statusOptions"
              label="Status"
              debounce="300"
              style="width: 150px"
              clearable
            />

            <q-select
              class="q-pl-lg"
              filled
              v-model="filterType"
              :options="typeOptions"
              label="Type"
              debounce="300"
              style="width: 210px"
              clearable
            />

            <q-btn icon="event" round color="primary">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">

                <div class="text-bold">Start Date:</div>
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input filled v-model="filterOnCreatedFrom" clearable>
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="filterOnCreatedFrom" mask="YYYY-MM-DD HH:mm:ss">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="filterOnCreatedFrom" mask="YYYY-MM-DD HH:mm:ss" with-seconds format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

                <div class="text-bold">End Date:</div>
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input filled v-model="filterOnCreatedTo" clearable>
                    <template v-slot:prepend>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-date v-model="filterOnCreatedTo" mask="YYYY-MM-DD HH:mm:ss">
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="filterOnCreatedTo" mask="YYYY-MM-DD HH:mm:ss" with-seconds format24h>
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

              </q-popup-proxy>
            </q-btn>

            <q-btn label="APPLY"></q-btn>

            <q-space/>

            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
              clearable>
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>

        </template> -->

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="CommunicationId" :props="props">{{ props.row.CommunicationId }}</q-td>
          <q-td key="Subject" :props="props">{{ props.row.Subject }}</q-td>
          <q-td key="Status" :props="props">{{ props.row.Status }}</q-td>
          <q-td key="Type" :props="props">{{ props.row.Type }}</q-td>
          <q-td key="Date" :props="props">{{ props.row.Date }}</q-td>
          <q-td key="Action"  :props="props"><q-btn color="primary" size="sm" label="View"
            @click="redirectToViewCommunicationDetail(props.row.CommunicationId)" /></q-td>
        </q-tr>
      </template>
    </q-table>

    <div class="lt-md" >
      <div v-if="data.length==0" class="flex flex-center">No Results Found!</div>
      <div>
        <q-card class="q-mb-sm" v-for="(task,index) in data" :key="index">
          <q-card-section>
            <div class="text-h6">{{task.Subject}}</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div v-for="(column,index) in columns" :key="index">
              <q-input v-if="column.name!='Action'" readonly v-model="task[column.name]" :label="column.label" />
              <q-btn v-if="column.name=='Action'" color="primary" class="q-mt-sm full-width " text-color="white" label="View" title="View Task" @click="redirectToViewCommunicationDetail(task)"/>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- <div class="q-pa-md q-gutter-sm" style="width: 100%">
      <q-dialog v-model="basic" >
        <q-card>
          <q-card-section class="text-center">
            <div class="text-h4 text-bold bg-primary text-white "  style="width:100%">Displaying Customer details</div>
          </q-card-section>
          <div class="text-h6 q-pt-sm ">
          <div class="q-pa-sm">
            <q-input
                v-model="sr.CommunicationId"
                filled
                type="name"
                label="Id"
                style="width:100%"
                outlined
                class="q-mt-sm"
                readonly
              >
              </q-input>
              <q-input
                v-model="sr.CreatedOn"
                filled
                type="name"
                label="CreatedOn"
                style="width:100%"
                outlined
                class="q-mt-sm"
                readonly
              >
              </q-input> <q-input
                v-model="sr.Type"
                filled
                type="name"
                label="Type"
                style="width:100%"
                outlined
                class="q-mt-sm"
                readonly
              >
              </q-input>

              <q-input
                v-model="sr.Status"
                filled
                type="name"
                label="Status"
                style="width:100%"
                outlined
                class="q-mt-sm"
                readonly
              >
              </q-input>
              <q-input
                v-model="sr.Subject"
                filled
                type="name"
                label="Subject"
                style="width:100%"
                outlined
                class="q-mt-sm"
                readonly
              >
              </q-input>

              </div>
          </div>
          <q-card-actions >
          <q-btn flat label="OK" color="primary" v-close-popup  style="width:100%" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div> -->
  </div>
</template>

<script>
  import { date } from "quasar";
  import { ref } from "vue";
  import serviceHandlerMixin from "src/components/serviceHandlerMixin"
  import dashboardData from "./DashboardData.json"
  import TypeFilter from "src/components/TypeFilter.vue";
  import StatusFilter from "../components/StatusFilter.vue";
  import SearchFilter from "src/components/SearchFilter.vue";
  import DateFilter from "../components/DateFilter.vue";
  export default {
    name: "viewConsumerCommunicationDashboard",
    // setup() {
    //     return {
    //         basic:ref(false),
    //         sr:ref({}),
    //         statusOptions: [
    //           "Assigned",
    //           "Closed",
    //           "New"
    //         ],
    //         typeOptions: [
    //           "Road Defects",
    //           "Water Quality",
    //           "Road Signs",
    //           "Sewage Issues",
    //           "Water Pipeline",
    //           "Other"
    //         ]
    //       };
    //     },
        data() {
          return {
            data: [],
            // filterStatus: "",
            // filterOnCreatedFrom:"",
            // filterOnCreatedTo:"",
            // filterOnCreatedRange:{from:'', to:''},
            columns: [{ name: "CommunicationId", label: "Id", align: "left", field: "CommunicationId" },
            { name: "Subject", label: "Subject", align: "center", field: "Subject" },
            { name: "Status", label: "Status", align: "center", field: "Status", },
            { name: "Type", label: "Type", align: "center", field: "Type" },
            { name: "Date", label: "Created On", align: "center", field: "Date", sortable: true },
            { name: "Action", label: "View", align: "center", field: "Action" }],
            fetchedCommunications: [],
            choosefilterType: '',
            choosefilterStatus: '',
            filterSearchKeyword: '',
            startDateChoosen: '',
            endDateChoosen: '',
            stringfyData: '',
            option: '',
            filteredData: [],
            tempFilteredData0: [],
            tempFilteredData1: [],
            visibleFilters: ref(false),
          };
        },
        computed: {
        },
        // watch:{
        //   filterStatus(val){
        //     console.log(val)
        //   }
        // },
        methods: {
        redirectToHome: function () {
            this.$router.push("/theHub");
        },
        formatDate(unformatedDate) {
            let formattedString = date.formatDate(unformatedDate, "DD MMM YYYY");
            return formattedString;
        },
        redirectToViewCommunicationDetail(communId) {
          // this.sr = dashboardData;
          // this.basic = true;

          this.$q.loading.show
          this.$router.push({name: 'viewCommunicationDetail', params: {CommunicationId: communId}});
          // or
          // this.$router.push({path : 'view/communId'})
        },
        handleFilterType(type){
          this.choosefilterType = type;
        },
        handleFilterStatus(status){
          this.choosefilterStatus = status;
        },
        handleFilterSearch(searchKeyword){
          this.filterSearchKeyword = searchKeyword;
          this.filterBySearch();
        },
        handleFilterDate(date){
          this.startDateChoosen = Date.parse(this.formatDate(date.from));
          this.endDateChoosen = Date.parse(this.formatDate(date.to));
        },
        applyFilters(){
          this.filterSearchKeyword = '',
          this.filterMyData();
        },
        resetFilters(){
          this.choosefilterType = '',
          this.choosefilterStatus = '',
          this.startDateChoosen = '',
          this.endDateChoosen = '',
          this.filterSearchKeyword = '',
          this.filterMyData();
        },
        fetchCommunications() {
            this.data = [];
            var responseData = dashboardData;
            if (responseData.Status === "OK") {
                this.fetchedCommunications = responseData.ResponseJson.Communications;
                var self = this;
                this.fetchedCommunications.forEach(function (communication) {
                    var obj = {};
                    obj["CommunicationId"] = communication.CommunicationId;
                    obj["Subject"] = self.truncateString(communication.Detail.Subject);
                    obj["Status"] = communication.Status;
                    obj["Type"] = communication.Type;
                    obj["Date"] = self.formatDate(communication.CreatedOn);
                    obj["Action"] = "";
                    self.data.push(obj);
                });
                this.filteredData = this.data;
            }
        },
        filterMyData(){
          if(this.data.length > 0){
            if((this.choosefilterType == 'All' && this.choosefilterStatus == 'All' && this.startDateChoosen == '' && this.endDateChoosen == '')
            || (this.choosefilterType == 'All' && this.choosefilterStatus == '' && this.startDateChoosen == '' && this.endDateChoosen == '')
            || (this.choosefilterType == '' && this.choosefilterStatus == 'All' && this.startDateChoosen == '' && this.endDateChoosen == '')
            || (this.choosefilterType == '' && this.choosefilterStatus == '' && this.startDateChoosen == '' && this.endDateChoosen == '')){
              //If Type and Status filter is not choosen or choosen as All
              console.log("Output Log 1")
              this.filteredData = this.data;
            }else if((this.choosefilterStatus == '' || this.choosefilterStatus == 'All')
            &&(this.startDateChoosen == '' && this.endDateChoosen == '')){
              //If Status filter and Date Filter is not choosen or choosen as All
              console.log("Output Log 2")
              this.filteredData = this.data.filter((tempData)=>{
                return tempData.Type == this.choosefilterType
              })
            }else if((this.choosefilterType == '' || this.choosefilterType == 'All')
            &&(this.startDateChoosen == '' && this.endDateChoosen == '')){
              //If Type filter and Date filter is not choosen or choosen as All
              console.log("Output Log 3")
              this.filteredData = this.data.filter((tempData)=>{
                return tempData.Status == this.choosefilterStatus
              })
            }else if((this.choosefilterType == '' || this.choosefilterType == 'All')
            &&(this.choosefilterStatus == '' || this.choosefilterStatus == 'All')){
              //If Type filter and Status filter is not choosen or choosen as All
              console.log("Output Log 4")
              this.filteredData = this.data.filter((tempData)=>{
                return (Date.parse(tempData.Date) >= this.startDateChoosen && Date.parse(tempData.Date)<=this.endDateChoosen)
              })
            }else if((this.choosefilterType != '' || this.choosefilterType != "All")
            && (this.choosefilterStatus != '' || this.choosefilterStatus != "All")
            && (this.startDateChoosen == '' && this.endDateChoosen=='')){
              console.log("Output Log 6")
              this.tempFilteredData0 = this.data.filter((tempData)=>{
                return tempData.Type == this.choosefilterType
              })
              this.filteredData = this.tempFilteredData0.filter((tempData)=>{
                return tempData.Status == this.choosefilterStatus
              })
            }else if((this.choosefilterType != '' || this.choosefilterType != "All")
            && (this.startDateChoosen != '' && this.endDateChoosen != '')
            && (this.choosefilterStatus == '' || this.choosefilterStatus == 'All')){
              console.log("Output Log 7")
              this.tempFilteredData0 = this.data.filter((tempData)=>{
                return tempData.Type == this.choosefilterType
              })
              this.filteredData = this.tempFilteredData0.filter((tempData)=>{
                return (Date.parse(tempData.Date) >= this.startDateChoosen && Date.parse(tempData.Date)<=this.endDateChoosen)
              })
            }else if((this.choosefilterStatus != '' || this.choosefilterStatus != "All")
            && (this.startDateChoosen != '' && this.endDateChoosen != '')
            && (this.choosefilterType == '' || this.choosefilterType == 'All')){
              console.log("Output Log 8")
              this.tempFilteredData0 = this.data.filter((tempData)=>{
                return tempData.Status == this.choosefilterStatus
              })
              this.filteredData = this.tempFilteredData0.filter((tempData)=>{
                return (Date.parse(tempData.Date) >= this.startDateChoosen && Date.parse(tempData.Date)<=this.endDateChoosen)
              })
            }
            else{
              //Mixture of both Filters
              console.log("Output Log 5")
              this.tempFilteredData0 = this.data.filter((tempData)=>{
                return tempData.Type == this.choosefilterType
              })
              this.tempFilteredData1 = this.tempFilteredData0.filter((tempData)=>{
                return tempData.Status == this.choosefilterStatus
              })
              this.filteredData = this.tempFilteredData1.filter((tempData)=>{
                return (Date.parse(tempData.Date) >= this.startDateChoosen && Date.parse(tempData.Date)<=this.endDateChoosen)
              })
            }
          }
        },
        filterBySearch(){
          if(this.filteredData.length > 0){
            this.filteredData = this.filteredData.filter((tempData)=>{
              this.stringfyData = JSON.stringify(tempData);
              this.stringfyData = this.stringfyData.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()""]/g," ");
              this.stringfyData = this.stringfyData.replace(/\s{2,}/g," ");
              return this.filterSearchKeyword
              .toLocaleLowerCase()
              .split(" ")
              .every(v => this.stringfyData.toLowerCase().includes(v));
            })
          }
        },
        truncateString(string) {
            if (string !== undefined && string !== null) {
                if (string.length < 30) {
                    return string;
                }
                else {
                    return string.substring(0, 30) + "...";
                }
            }
            else {
                return "";
            }
        },
    },
    mounted() {
        this.$q.loading.hide();
        this.fetchCommunications();
    },
    mixins: [serviceHandlerMixin],
    components: { TypeFilter, StatusFilter, SearchFilter, DateFilter }
}
</script>
<style type="text/css">
  .selectStyle{
    min-width: 150px;
  }
  tr:nth-child(even) {
    background-color: #3498db10 !important;
  }
  .filterBtns{
    margin:20px;
    background: #00203f;
    color: white
  }
</style>
