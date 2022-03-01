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
import tagListModel from "@/models/tagListModel";
import recordListModel from "./models/recordListModel";

Vue.config.productionTip = false;

// 注册全局Nav组件
Vue.component("Nav", Nav);
// 注册全局Layout组件
Vue.component("Layout", Layout);
// 注册全局Icon组件
Vue.component("Icon", Icon);
/* record 数据仓库 */
// 获取tag的name的列表
window.recordList = recordListModel.fetch();
// 创建一个tag的name
window.createRecord = (record: RecordItem) => {
	return recordListModel.create(record);
};

/* tag 数据仓库 */
// 声明全局属性，用来保存fetch到的数据
window.tagList = tagListModel.fetch();
window.findTag = (id: string) => {
	return window.tagList.filter((t) => t.id === id)[0];
};
// 声明全局属性，用来创建tag
window.createTag = (name: string) => {
	const message = tagListModel.create(name);
	if (message === "duplicated") {
		window.alert("标签名重复了");
	} else if (message === "success") {
		window.alert("添加成功");
	}
};
// 声明全局属性，用来删除tag
window.removeTag = (id: string) => {
	return tagListModel.remove(id);
};
// 声明全局属性，用来更新tag
window.updateTag = (id: string, name: string) => {
	return tagListModel.update(id, name);
};
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
