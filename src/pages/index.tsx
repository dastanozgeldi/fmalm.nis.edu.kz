import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Motto } from "../components/home/Motto";
import Carousel from "../components/home/Slider";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page title="Home">
      <Carousel />
      <Motto />
    </Page>
  );
}
