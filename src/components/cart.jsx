import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../reducers";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (name) => {
    dispatch(removeFromCart({ name }));
  };

  const handleQuantityChange = (name, quantity) => {
    dispatch(updateQuantity({ name, quantity }));
  };
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <div className="card bg-base-300 p-2 flex-nowrap">
      <h2 className="card-title">Cart</h2>
      <div></div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="w-1/2">
          <ul>
            {cart.map((item, index) => (
              <li
                className="flex justify-between items-center mb-2"
                key={index}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {item.name} - ${item.price} X
                  </span>
                  <input
                    className="quantity-input w-16 p-1 border rounded"
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.name, parseInt(e.target.value))
                    }
                  />
                </div>
                <button
                  className="btn btn-warning active:btn-warning"
                  onClick={() => handleRemove(item.name)}
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
          <div className="total-section mt-4">
            <h3 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
