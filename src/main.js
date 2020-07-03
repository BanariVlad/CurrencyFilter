import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  if (isNaN(Number(value)) || value === "") {
    return "0.00";
  }

  let formattedValue = parseFloat(value).toFixed(2);
  return formattedValue.toString().replace(/\B(?=(\d{3})+(?!\B))/g, " ");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
