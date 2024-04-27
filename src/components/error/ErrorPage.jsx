import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center text-center text-2xl">
      <h2> Not found page</h2>
      <Link to="/">
        <button className="btn mt-3">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
