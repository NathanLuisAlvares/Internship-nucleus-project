<template>
  <div class="q-page background" id="div-bg">
    <div class="q-ml-md q-mt-xs q-mr-md">
      <div class="row inline q-mb-md cursor-pointer q-mx-sm"
      style="display:grid; grid-template-columns: auto auto auto; padding: 10px;">
        <q-card
          @click="redirectToDashboard('TableDashboard', 'Nucleus')"
          style="width: 500px"
        >
          <q-img spinner-color="black" src="statics/Nucleus_Dashboard1.png" />
          <q-separator />
          <q-card-section class="full-width">
            <div class="row justify-between">
              <div class="col text-h6 ellipsis">Table Dashboard</div>
              <div class="no-wrap items-center">
                <q-img class="absolute shadow-8" src="statics/Nucleuslogo.png" style="top: 0; right: 12px; transform: translateY(-50%); width: 50px; height: 50px; border-radius: 20%;"/>
                <div class="col-auto text-secondary text-subtitle2 q-pt-md row no-wrap items-center"> Nucleus </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          @click="redirectToDashboard('TableCharts', 'Nucleus')"
          style="width: 500px"
        >
          <q-img spinner-color="black" src="statics/Nucleus-Charts-GIF.gif" />
          <q-separator />
          <q-card-section class="full-width">
            <div class="row justify-between">
              <div class="col text-h6 ellipsis">Analytics Dashboard</div>
              <div class="no-wrap items-center">
                <q-img
                  class="absolute shadow-8"
                  src="statics/Nucleuslogo.png"
                  style="top: 0;
                        right: 12px;
                        transform: translateY(-50%);
                        width: 50px;
                        height: 50px;
                        border-radius: 20%;"
                  />
                <div class="col-auto text-secondary text-subtitle2 q-pt-md row no-wrap items-center"> Nucleus </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card
          @click="redirectToDashboard('TableMaps', 'Nucleus')"
          style="width: 500px"
        >
          <q-img spinner-color="black" src="statics/maps-screenshot.PNG" />
          <q-separator />
          <q-card-section class="full-width">
            <div class="row justify-between">
              <div class="col text-h6 ellipsis">Maps Dashboard</div>
              <div class="no-wrap items-center">
                <q-img class="absolute shadow-8" src="statics/Nucleuslogo.png" style="top: 0; right: 12px; transform: translateY(-50%); width: 50px; height: 50px; border-radius: 20%;"/>
                <div class="col-auto text-secondary text-subtitle2 q-pt-md row no-wrap items-center"> Nucleus </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import serviceHandlerMixin from './serviceHandlerMixin'
export default {
  name: 'LandingPage',
  data() {
    return {};
  },
  methods: {
    redirectToDashboard: function (dashboard, module) {
      if (module == "Nucleus") {
        if (dashboard == "TableDashboard")
        {
          this.$q.loading.show();
          this.$router.push("/nucleus");
        }
        else if (dashboard == "TableCharts")
        {
          // this.$q.loading.show();
          this.$router.push("/nucleus-charts");
        }
        else if (dashboard == "TableMaps")
        {
          // this.$q.loading.show();
          this.$router.push("/nucleus-maps");
        }
      }
    },
  },
  computed: {},
  mounted() {},
  mixins: [serviceHandlerMixin],
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 200px;
}
.background {
  min-height: 90vh;
  background: repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.cardStyle {
  width: 350px;
}
</style>
