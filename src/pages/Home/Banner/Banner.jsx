import bannerImg from "../../../assets/banner.png"


const Banner = () => {
  return (
    <div
      className="hero min-h-screen mb-24"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to ShopHub</h1>
          <p className="mb-5">
          Your Shop, Your Way: Explore, Manage, Enjoy. Dive into a World of Management. Where Stories Unfold, Ideas Bloom, and Dreams Take Flight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
