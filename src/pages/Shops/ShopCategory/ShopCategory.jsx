import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ProductItem from "../../Shared/ProductItem/ProductItem";


const ShopCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
              <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                   items.map(item => <ProductItem key={item._id} item={item}></ProductItem>)
                }
            </div>
            <Link to={`/create-shop/${title}`}><button className="btn btn-outline border-0 border-b-4">Create Shop</button></Link>
        </div>
    );
};

export default ShopCategory;