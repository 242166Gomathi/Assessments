import React from 'react';

const Products = ({ title, description, imageUrl, price, type, rating }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt="Product" className="product-image" />
            <div className="product-details">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="type-rating">
                    <div>Type: {type}</div>
                    <div>Rating: {rating}</div>
                </div>
                <div className="price">Price: ${price}</div>
                <div className="button-container">
                    <button className="button like">Like</button>
                    <button className="button share">Share</button>
                    <button className="button purchase">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Products;
