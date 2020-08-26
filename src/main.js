import Vue from "vue";
import App from "./App.vue";
import VuePlyr from "vue-plyr";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ["ended"]
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
