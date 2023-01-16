import { Articles } from "../components/home/Articles";
import { Motto } from "../components/home/Motto";
import { Slider } from "../components/home/Slider";
import { Page } from "../layouts/Page";
import { fetchAPI } from "../lib/api";

export default function Home({ articles }: any) {
  return (
    <Page title="Home">
      <Slider />
      <Motto />
      <Articles showMore articles={articles.slice(0, 3)}>
        Последние объявления
      </Articles>
    </Page>
  );
}

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
