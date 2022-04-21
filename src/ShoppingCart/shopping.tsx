import React from "react";
import { useSelector } from "react-redux";
import { isTemplateMiddle } from "typescript";
import ShoppingItem from "./shopping-item";
import './shopping.css';
const Shopping = () => {
    const cartItem: any = useSelector<any>(state => state.cart.items);
    return (
        <div className="shopping-data">
            <div className="head">
                <h1>Your Shopping Cart</h1>
            </div>
            {cartItem.map((item: any) => <ShoppingItem key={item.id} id={item.id} quantity={item.quantity} price={item.price} title={item.name} total={item.totalPrice} />)}

        </div>
    );
};

export default Shopping;