import { useRouteError } from "react-router-dom";
import notFound from "../../assets/404.png";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center items-center mt-14 text-5xl font-extrabold" id="error-page">
      <img src={notFound} alt="" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
