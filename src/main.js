import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-155132777-1" }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
