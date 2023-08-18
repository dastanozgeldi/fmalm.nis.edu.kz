export type PageCore = {
  id: string;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    image: any;
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
      data: PageCore[];
    };
  };
};

export type Categories = {
  data: Category[];
};
