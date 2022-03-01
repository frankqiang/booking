import recordStore from "./recordStore";
import tagStore from "./tagStore";

/* 全局数据仓库 */
const store = {
	...recordStore,
	...tagStore,
};
console.log(store);

export default store;
