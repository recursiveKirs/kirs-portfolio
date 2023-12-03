import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>
        Looks like your lost why dont you go back <Link to="/">Home</Link>?
      </p>
    </div>
  );
};
