import React from 'react';

export const ProductDescription = ({product, conceptType}) => {
    return(
        <section className="pdp-wrapper container">
            <a href={`/${conceptType}/plp`}  className="back-button">Go Back to Listing</a>
            <div className="product-wrapper">
                <div className="pdp-img-wrapper">
                    <img src={product.imageUrl} className="pdp-product-image"/>
                </div>
                <div className="pdp-product-desc">
                    <p className="pdp-department">
                        <span className="title">Product Department </span><span>:</span> {product.department}
                    </p>
                    <p className="pdp-product">
                        <span className="title">Product Name </span><span>:</span> {product.productName}
                    </p>
                    <p className="pdp-price">
                        <span className="title">Product Price </span><span>:</span> {`$ ${product.price}`}
                    </p>
                    <p className="pdp-desc">
                        <span className="title">Product Description</span><span>:</span> {`${product.description}`}
                    </p>
                </div>
            </div>
        </section>
    )
}