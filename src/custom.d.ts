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
