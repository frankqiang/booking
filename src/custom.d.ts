declare module '*.svg' {
	const content: any;
	export default content;
}
// 定义全局类型，可以在任何文件中使用
type RootState = {
	recordList: RecordItem[];
	tagList: Tag[];
	currentTag?: Tag;
};
type RecordItem = {
	tags: Tag[];
	notes: string;
	type: string;
	amount: number;
	createdAt?: string;
};
type Tag = {
	id: string;
	name: string;
};
type TagListModel = {
	data: Tag[];
	fetch: () => Tag[];
	create: (name: string) => 'success' | 'duplicated'; // success表示成功，duplicated表示内容重复
	update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
	remove: (id: string) => boolean;
	save: () => void;
};

interface Window {}
