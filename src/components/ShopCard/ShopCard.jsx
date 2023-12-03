const ShopCard = ({item}) => {

    const { name, image, description} = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Create Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
