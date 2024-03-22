// ProductItem.js
import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price}</p>
        </li>
    )
}

export default ProductItem
