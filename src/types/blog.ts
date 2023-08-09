export type BlogPostCore = {
  id: string;
  attributes: {
    title: string;
    description: string;
    content: string;
    cover: object;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
};
