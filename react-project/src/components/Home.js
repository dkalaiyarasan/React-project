import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <NavLink to="/about">about</NavLink>
      <h1>Welcome to the world of Geeks!</h1>
    </>
  );
}

export default Home;
