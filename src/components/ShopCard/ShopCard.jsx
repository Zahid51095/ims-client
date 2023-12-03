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
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400">Create Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
