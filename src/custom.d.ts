declare module "*.svg" {
	const content: any;
	export default content;
}
// 定义全局类型，可以在任何文件中使用
type RecordItem = {
	tags: string[];
	notes: string;
	type: string;
	amount: number;
	createdAt?: Date;
};
type Tag = {
	id: string;
	name: string;
};
type TagListModel = {
	data: Tag[];
	fetch: () => Tag[];
	create: (name: string) => "success" | "duplicated"; // success表示成功，duplicated表示内容重复
	update: (id: string, name: string) => "success" | "not found" | "duplicated";
	remove: (id: string) => boolean;
	save: () => void;
};

interface Window {
	tagList: Tag[];
	createTag: (name: string) => void;
	findTag: (id: string) => Tag | undefined;
	removeTag: (id: string) => boolean;
	updateTag: (
		id: string,
		name: string
	) => "success" | "not found" | "duplicated";
}
