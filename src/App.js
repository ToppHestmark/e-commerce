import React from "react";

// import Products from "./components/Products/Products";
// import Navbar from './components/Navbar/Navbar';

import { Products, Navbar } from "./components";

const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Products />{" "}
    </>
  );
};

export default App;
