import { Helmet } from "react-helmet-async";
import shopImg from "../../../assets/slide 1.png";
import bookStoreImg from "../../../assets/bookstore.png";
import mobilStoreImg from "../../../assets/mobilestore.png";
import clothStoreImg from "../../../assets/slide 3.png";
import shoeStoreImg from "../../../assets/slide 4.png";
import Cover from "../../Shared/Cover/Cover";
import useShop from "../../../hooks/useShop";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ShopCategory from "../ShopCategory/ShopCategory";


const Shop = () => {
    const [items] = useShop();
    const book = items.filter(item => item.category === 'book');
    const mobile = items.filter(item => item.category === 'mobile');
    const shirt = items.filter(item => item.category === 'shirt');
    const pants = items.filter(item => item.category === 'pants');
    const shoes = items.filter(item => item.category === 'shoes');
    // const offered = items.filter(item => item.category === 'offered');
    
    


  return (
    <div>
      <Helmet>
        <title>ShopHub | Shops</title>
      </Helmet>
      <Cover img={shopImg} title="Our Shops"></Cover>

      {/* main cover */}
      {/* <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle> */}

      {/* offered */}
      {/* <ShopCategory items={offered}></ShopCategory> */}

      {/* book */}
      <ShopCategory items={book} title={"book"} img={bookStoreImg}></ShopCategory>

      {/* mobile */}
      <ShopCategory items={mobile} title={"mobile"} img={mobilStoreImg}></ShopCategory>

      {/* shirt */}
      <ShopCategory items={shirt} title={"shirt"} img={clothStoreImg}></ShopCategory>

       {/* pants */}
       <ShopCategory items={pants} title={"pants"} img={clothStoreImg}></ShopCategory>

         {/* shoes */}
         <ShopCategory items={shoes} title={"shoes"} img={shoeStoreImg}></ShopCategory>
        
    </div>
  );
};

export default Shop;
