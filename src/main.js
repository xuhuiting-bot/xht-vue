import Vue from 'vue';
import App from './App.vue';

// 引入ChartComponent组件
import ChartComponent from './components/ChartComponent.vue';

Vue.config.productionTip = false;

// 注册ChartComponent组件，使其可以在整个应用中使用
Vue.component('ChartComponent', ChartComponent);

new Vue({
    render: h => h(App),
    // 这里假设你的index.html中有id为app的DOM元素用于挂载Vue实例
    mount: '#app'
}).$mount('#app');