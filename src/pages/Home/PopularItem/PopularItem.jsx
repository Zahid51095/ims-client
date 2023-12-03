import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductItem from "../../Shared/ProductItem/ProductItem";


const PopularItem = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular');
            setItems(PopularItems)
        })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle heading="From Our Shops" subHeading="Best Selling Products"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <ProductItem key={item._id} item={item}></ProductItem>)
                }
            </div>
        </section>
    );
};

export default PopularItem;