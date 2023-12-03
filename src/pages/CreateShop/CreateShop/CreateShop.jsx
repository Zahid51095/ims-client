import { useState } from "react";
import createShopImg from "../../../assets/createshop.png";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useShop from "../../../hooks/useShop";

import CreateTab from "../CreateTab/CreateTab";
// import OrderTab from "../OrderTab/OrderTab";

const CreateShop = () => {
    
  const [tabIndex, setTabIndex] = useState(0);
  const [items] = useShop();
  const book = items.filter(item => item.category === 'book');
  const mobile = items.filter(item => item.category === 'mobile');
  const shirt = items.filter(item => item.category === 'shirt');
  const pants = items.filter(item => item.category === 'pants');
  const shoes = items.filter(item => item.category === 'shoes');
  
  return (
    <div>
      <Cover img={createShopImg} title="Create Shop"></Cover>
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
