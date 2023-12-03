import { useState } from "react";
import createShopImg from "../../../assets/createshop.png";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useShop from "../../../hooks/useShop";

import CreateTab from "../CreateTab/CreateTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import OrderTab from "../OrderTab/OrderTab";

const CreateShop = () => {
 const categories = ['book', 'mobile', 'shirt', 'pants', 'shoes'];
 const { category } = useParams();
 const initialIndex = categories.indexOf(category);
 const [tabIndex, setTabIndex] = useState(initialIndex);
 const [items] = useShop();
 
  const book = items.filter(item => item.category === 'book');
  const mobile = items.filter(item => item.category === 'mobile');
  const shirt = items.filter(item => item.category === 'shirt');
  const pants = items.filter(item => item.category === 'pants');
  const shoes = items.filter(item => item.category === 'shoes');
  
  return (
    <div>
        <Helmet>
        <title>ShopHub | Explore Shop</title>
      </Helmet>
      <Cover img={createShopImg} title="Explore Our Shop"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Book Shop</Tab>
          <Tab>Mobile Shop</Tab>
          <Tab>Cloth Shop</Tab>
          <Tab>Shoe Shop</Tab>
          <Tab>Doll Shop</Tab>
        </TabList>
        <TabPanel>
        <CreateTab items={book}></CreateTab>
        </TabPanel>
        <TabPanel>
        <CreateTab items={mobile}></CreateTab>
        </TabPanel>
        <TabPanel>
        <CreateTab items={shirt}></CreateTab>
        </TabPanel>
        <TabPanel>
        <CreateTab items={pants}></CreateTab>
        </TabPanel>
        <TabPanel>
        <CreateTab items={shoes}></CreateTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CreateShop;
