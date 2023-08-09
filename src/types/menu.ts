export type Page = {
  id: string;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
  };
};

export type Category = {
  id: string;
  attributes: {
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    pages?: {
      data: Page[];
    };
  };
};

export type Categories = {
  data: Category[];
};
