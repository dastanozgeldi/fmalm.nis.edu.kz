export type ArticleCore = {
  id: string;
  attributes: {
    title: string;
    description: string;
    content: string;
    image: any;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    type: string;
    author: any;
    topic: any;
  };
};
