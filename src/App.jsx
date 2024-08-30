import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <div>
        <Header />

        <Menu />
        <Cart />
      </div>
    </>
  );
}

export default App;
