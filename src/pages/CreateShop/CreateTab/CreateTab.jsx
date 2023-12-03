import ShopCard from "../../../components/ShopCard/ShopCard";


const CreateTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
           items.map(item => <ShopCard key={item._id} item={item}></ShopCard>)
         }
        </div>
    );
};

export default CreateTab;