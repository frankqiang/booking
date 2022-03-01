import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

/* 全局数据仓库 */
const store = {
	/* record 数据仓库 */
	// 获取tag的name的列表
	recordList: recordListModel.fetch(),
	// 创建一个tag的name
	createRecord: (record: RecordItem) => {
		return recordListModel.create(record);
	},

	/* tag 数据仓库 */
	// 声明全局属性，用来保存fetch到的数据
	tagList: tagListModel.fetch(),
	findTag(id: string) {
		return this.tagList.filter((t) => t.id === id)[0];
	},
	// 声明全局属性，用来创建tag
	createTag: (name: string) => {
		const message = tagListModel.create(name);
		if (message === "duplicated") {
			window.alert("标签名重复了");
		} else if (message === "success") {
			window.alert("添加成功");
		}
	},
	// 声明全局属性，用来删除tag
	removeTag: (id: string) => {
		return tagListModel.remove(id);
	},
	// 声明全局属性，用来更新tag
	updateTag: (id: string, name: string) => {
		return tagListModel.update(id, name);
	},
};
export default store;
