import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入Nav组件
import Nav from "./components/Nav.vue";
// 引入Layout组件
import Layout from "./components/Layout.vue";
// 引入Layout组件
import Icon from "./components/Icon.vue";

Vue.config.productionTip = false;

// 注册全局Nav组件
Vue.component("Nav", Nav);
// 注册全局Layout组件
Vue.component("Layout", Layout);
// 注册全局Icon组件
Vue.component("Icon", Icon);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
