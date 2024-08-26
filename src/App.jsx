import { useState } from "react";
import Header from "./components/header";
import Inventory from "./components/inventory";

function App() {
  return (
    <>
      <div>
        <Header />
        <Inventory />
      </div>
    </>
  );
}

export default App;
