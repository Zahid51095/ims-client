
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductItem from "../../Shared/ProductItem/ProductItem";
import useShop from "../../../hooks/useShop";


const PopularItem = () => {
    const [items] = useShop();
    const popular = items.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle heading="From Our Shops" subHeading="Best Selling Products"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                   popular.map(item => <ProductItem key={item._id} item={item}></ProductItem>)
                }
            </div>
        </section>
    );
};

export default PopularItem;