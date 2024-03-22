// ProductList.js
import React from 'react'
import ProductItem from '../components/ProductItem'
import productsData from '../data/products' // Importa os dados dos produtos

const ProductList = () => {
    return (
        <div>
            <h2>Produtos</h2>
            <ul>
                {productsData.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    )
}

export default ProductList
