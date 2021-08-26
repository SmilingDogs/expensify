import React from "react";
import { Link } from "react-router-dom";

const Page404 = ({ color }) => {
  const styles = { color};

  return (
    <div>
      <h1 style={styles}>404! Page Not Found...</h1>
      <Link to="/">Go Home</Link>
    </div>
  )
}
export default Page404;
