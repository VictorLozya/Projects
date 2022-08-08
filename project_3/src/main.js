import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import router from "./router";
import { Plugin } from "vue-responsive-video-background-player";
import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);
Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
