import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { ConCart } from "../context/Context";

const Cart = () => {
  const { cart } = useContext(ConCart);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total &#x20B9; {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
        {console.log(`cart length is: ${cart.length}`)}
      </div>
    </div>
  );
};

export default Cart;
