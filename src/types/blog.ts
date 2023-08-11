export type BlogPostCore = {
  id: string;
  attributes: {
    title: string;
    description: string;
    content: string;
    image: object;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    type: string;
  };
};
