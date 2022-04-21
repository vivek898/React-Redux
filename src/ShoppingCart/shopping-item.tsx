import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const ShoppingItem = (props: any) => {
    const { title, quantity, price, total, id } = props;
    console.log(total);

    const dispatch: any = useDispatch();
    const addItemHandler = () => {
        dispatch(cartAction.addItem({ title, price, id }));
    };
    const removeItemHandler = () => {
        dispatch(cartAction.removeItem(id));
    }
    return (
        <div className="shopping">
            <div className="all">
                <div className="test">
                    <div className="item">
                        <h1>{title}</h1>
                        <h5>${total} <span>($6/item)</span></h5>
                    </div>
                </div>
                <div className="division">
                    <div className="span">
                        <span>x </span>
                        <h1>{quantity}</h1>
                    </div>
                    <div className="button">
                        <button onClick={removeItemHandler}>-</button>
                        <button onClick={addItemHandler}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingItem;