import React from 'react';

export const ProductListing = ({products, conceptType}) => {
    
    const handleClick = () => window.location = `/${conceptType}/pdp`;

    return(
        <section className="plp-container container">
            <div>
                <img src="/images/sale.jpg" alt="Sale Image Banner" className="sale-banner"/>
            </div>
            <ul className="products-wrapper">
                {products && products.map((item,index) => (
                    <li key={index} className="product-list-item" onClick={handleClick}>
                        <img src={item.imageUrl} className="plp-product-image"/>
                        <div className="plp-product-desc">
                            <p className="plp-department">{item.department}</p>
                            <p className="plp-product">{item.productName}</p>
                            <p className="plp-price">{`$ ${item.price}`}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}