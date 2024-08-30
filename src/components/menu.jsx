import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers";
import data from "../data/data.json";
import Cart from "./cart";

const { coffee, pastries, tea } = data.cafe.menu;

const Item = ({ name, price, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price }));
  };

  return (
    <div className="item-card m-2">
      <img
        className="w-[250px] h-[250px] object-cover"
        src={image}
        alt={name}
      />
      <h3 className="card-title">{name}</h3>
      <p>
        {" "}
        {"$ "}
        {price}
      </p>
      <button
        className="btn btn-primary hover:btn-secondary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Menu = () => {
  const [coffeeSortOption, setCoffeeSortOption] = useState("price-asc");
  const [teaSortOption, setTeaSortOption] = useState("price-asc");
  const [pastriesSortOption, setPastriesSortOption] = useState("price-asc");

  const handleSortChange = (e, setSortOption) => {
    setSortOption(e.target.value);
  };

  const sortItems = (items, sortOption) => {
    return [...items].sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      } else if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });
  };

  return (
    <>
      <div className="bg-base-200">
        <div>
          <h2 className="card-title text-3xl p-2">Coffee</h2>
          <div className="p-2">
            <label htmlFor="coffee-sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="coffee-sort"
              value={coffeeSortOption}
              onChange={(e) => handleSortChange(e, setCoffeeSortOption)}
              className="select select-bordered w-full max-w-xs"
              select
              select-bordered
              w-full
              max-w-xs
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="flex flex-wrap">
            {sortItems(coffee, coffeeSortOption).map((item, index) => (
              <Item
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="card-title text-3xl p-2">Tea</h2>
          <div className="p-2">
            <label htmlFor="tea-sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="tea-sort"
              value={teaSortOption}
              onChange={(e) => handleSortChange(e, setTeaSortOption)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="flex flex-wrap">
            {sortItems(tea, teaSortOption).map((item, index) => (
              <Item
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="card-title text-3xl p-2">Pastries</h2>
          <div className="p-2">
            <label htmlFor="pastries-sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="pastries-sort"
              value={pastriesSortOption}
              onChange={(e) => handleSortChange(e, setPastriesSortOption)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
          <div className="flex flex-wrap">
            {sortItems(pastries, pastriesSortOption).map((item, index) => (
              <Item
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
};

export default Menu;
