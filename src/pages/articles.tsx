import { Articles } from "../components/home/Articles";
import { Page } from "../layouts/Page";
import { fetchAPI } from "../lib/api";

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
  ]);

  return {
    props: { articles: articlesRes.data },
    revalidate: 1,
  };
}

const ArticlesPage = ({ articles }: any) => {
  return (
    <Page title="Articles">
      <Articles articles={articles}>Все объявления</Articles>
    </Page>
  );
};

export default ArticlesPage;
