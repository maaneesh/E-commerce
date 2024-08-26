import React from "react";

function Header() {
  return (
    <>
      <div className="flex justify-between p-4  text-white bg-slate-800">
        <div>
          <h1 className="text-4xl font-bold">A-Z Shop</h1>
        </div>
        <div className="flex px-4 gap-2">
          <h2 className="btn p-2 bg-orange-400 rounded">Cart</h2>
          <h2 className="btn p-2  bg-orange-400 rounded"> Account</h2>
        </div>
      </div>
    </>
  );
}

export default Header;
