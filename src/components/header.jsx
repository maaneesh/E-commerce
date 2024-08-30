import React from "react";
import data from "../data/data.json";

function Header({ onCartClick }) {
  return (
    <>
      <div className="flex justify-between p-4  text-white bg-slate-800">
        <div>
          <h1 className="text-4xl font-bold">{data.cafe.name}</h1>
        </div>
        <div className="flex px-4 gap-2">
          <button
            onClick={onCartClick}
            className="btn-primary p-2 bg-orange-400 rounded hover:bg-lime-500 active:font-bold"
          >
            Cart
          </button>
          <h2 className="btn-primary p-2  bg-orange-400 rounded"> Account</h2>
        </div>
      </div>
    </>
  );
}

export default Header;
