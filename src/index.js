import Vue from 'vue'
import test from "./components/index.vue";
console.error(`test:${test}`)
new Vue({
    render: h => h(test)
  }).$mount('#app')
