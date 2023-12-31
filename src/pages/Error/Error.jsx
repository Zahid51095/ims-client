import { Link, useRouteError } from "react-router-dom";
import notFound from "../../assets/404.png";


const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center items-center mt-14 text-5xl font-extrabold" id="error-page">
      <img src={notFound} alt="" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/"><button className="btn btn-secondary mt-4">Go To Home</button></Link>
    </div>
  );
};

export default Error;
