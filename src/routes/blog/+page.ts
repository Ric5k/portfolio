import type { PageLoad } from './$types';

// 1. Markdownファイルの型を定義する
interface MarkdownFile {
	metadata: {
		title: string;
		date: string;
		excerpt?: string;
	};
}

export const load: PageLoad = async () => {
	// 2. <MarkdownFile> を指定することで、ファイルの中身を正しく認識させる
	const mdFiles = import.meta.glob<MarkdownFile>('/src/posts/*.md', { eager: true });

	// 3. データを整形する
	const posts = Object.entries(mdFiles).map(([path, file]) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		
		return {
			slug,
			title: file.metadata.title,
			date: file.metadata.date
		};
	});

	// 4. ソート処理の修正
	// 文字列のままだと計算できないため、一度 new Date() で日付オブジェクトに変換します
	posts.sort((a, b) => {
		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();
		return dateB - dateA; // 新しい順
	});

	return {
		posts
	};
};