import React from "react";
import './cart.css';
import CartButton from "./cartButton";
const Cart = () => {
    return (
        <div className="cart">
            <nav>
                <h1>CartData</h1>
                {/* <button>My Cart <span>1</span></button> */}
                <CartButton />
            </nav>
        </div>
    );
};

export default Cart;