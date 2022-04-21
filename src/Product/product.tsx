import React from "react";
import './product.css';
import ProductItem from "./productDetail";
const Product = () => {
    const data = [
        {
            id: 'p1',
            price: 6,
            title: 'My first Idea',
            description: 'What a wonderfull idea'
        },
        {
            id: 'p2',
            price: 7,
            title: 'My second Idea',
            description: 'What a wonderfull idea before we read'
        },
    ]

    return (
        <div className="product">
            {/* <div className="head">
                <h1>Your Favourite Product</h1>
            </div> */}
            <div className="test">
                {data.map((data) => <ProductItem key={data.id} id={data.id} price={data.price} title={data.title} description={data.description} />)}
            </div>
        </div>
    );
};

export default Product;