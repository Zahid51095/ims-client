

const ProductItem = ({item}) => {
    const { name, image, price, description} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <h3 className="uppercase">{name}-----</h3>
            <p>{description}</p>
            <p className="text-blue-500">${price}</p>
        </div>
    );
};

export default ProductItem;