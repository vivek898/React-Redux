import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/ui-slice";

const CartButton = () => {
    const cartData: any = useSelector<any>(state => state.cart.totalQuantity)
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(uiAction.toggle());
    }
    return (
        <div className="cart-button">
            <button onClick={toggleHandler}>
                <p>My Cart</p>
                <span>{cartData}</span>
            </button>
        </div>
    );
};

export default CartButton;