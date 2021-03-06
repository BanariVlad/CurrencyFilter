import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter('currency', (value, precision = 0) => {
  if (isNaN(Number(value)) || value === "") {
    return "0.00";
  }

  return parseFloat(value)
    .toFixed(precision)
    .toString()
    .replace(/\B(?=(\d{3})+(?=\b))/g, " ")
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
