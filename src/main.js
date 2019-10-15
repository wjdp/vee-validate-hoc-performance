import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.performance = true;

import { extend, localize } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

// Install rules
extend("required", required);

// Install messages
localize({ en });


new Vue({
  render: h => h(App),
}).$mount('#app')
