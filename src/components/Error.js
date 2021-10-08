import React from "react";
import notFound from "../img/notfound.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <Link to="/" className="error-link">
        <img src={notFound} alt="404" />
      </Link>
    </div>
  );
}

export default Error;
