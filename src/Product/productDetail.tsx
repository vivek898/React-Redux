import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

const ProductItem = (props: any) => {
    const cart: any = useSelector<any>(state => state.cart);
    const dispatch = useDispatch();
    const { title, price, description, id } = props;
    const addItemHandler = () => {
        // const newTotalQuantity = cart.totalQuantity + 1;
        // const updatedItem = cart.items.slice();
        // const existingItem = updatedItem.find((item: any) => item.id === id);
        // if (existingItem) {
        //     const updatedItems = { ...existingItem };
        //     updatedItems.quantity++;
        //     updatedItems.price = updatedItems.price + price;
        //     const existingItemIndex = updatedItem.findIndex((item: any) => item.id === id);
        //     updatedItem[existingItemIndex] = updatedItems;
        // } else {
        //     updatedItem.push({
        //         id: id,
        //         price: price,
        //         quantity: 1,
        //         totalPrice: price,
        //         name: title
        //     })
        // }
        // const newCart = {
        //     totalQuantity: newTotalQuantity,
        //     items: updatedItem
        // }
        // dispatch(cartAction.replaceCart(newCart));
        dispatch(
            cartAction.addItem({
                id,
                title,
                price,
            })
        );
    }
    return (
        <div className="product-item">
            <div className="test-head">
                <h1>{title}</h1>
                <h3>${price.toFixed(2)}</h3>
            </div>
            <div className="first">
                <p>{description}</p>
            </div>
            <div className="buttons">
                <button onClick={addItemHandler}>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductItem;