import React, { Component } from 'react';
import Products from './Products';

// import React, { Component } from 'react';
// import Products from './Products';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "title": "Brown Eggs",
                    "type": "Dairy",
                    "description": "Raw organic brown eggs in a basket",
                    "imageUrl": "https://th.bing.com/th/id/OIP.5yJmhEqJNVBKPeFPfhJ8dQHaE8?rs=1&pid=ImgDetMain",
                    "price": "28.1",
                    "rating": 4
                },
                {
                    "title": "Pomegranate",
                    "type": "Fruits",
                    "description": "Ripe Pomegranates with Leaves",
                    "imageUrl": "https://tse2.mm.bing.net/th/id/OIP.V1ArSq_lyhxZl5g9Y3TK-gHaE7?rs=1&pid=ImgDetMain",
                    "price": "35.1",
                    "rating": 5
                },
                {
                    "title": "Sweet fresh strawberry",
                    "type": "Fruits",
                    "description": "Sweet fresh strawberry on the wooden table",
                    "imageUrl": "https://s3.envato.com/files/227491828/_MG_2200.jpg",
                    "price": "29.45",
                    "rating": 4
                }
            ]
        };
    }

    render() {
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map((product, index) => (
                    <Products 
                        key={index} 
                        title={product.title} 
                        description={product.description} 
                        imageUrl={product.imageUrl} 
                        price={product.price} 
                        type={product.type} 
                        rating={product.rating} 
                    />
                ))}
            </div>
        );
    }
}

export default ProductList;
