import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Branches from "../Branches/Branches";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ShopHub | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularItem></PopularItem>
      <Featured></Featured>
      <Branches></Branches>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
