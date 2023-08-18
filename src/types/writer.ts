import { ArticleCore } from "./article";

export type Writer = {
  id: string;
  attributes: {
    name: string;
    picture: any;
    email: string;
    articles?: {
      data: ArticleCore[];
    };
  };
};
