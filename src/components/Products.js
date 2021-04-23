import React from 'react'
import ProductCard from './ProductCard'
import {ProductConsumer} from './Context'

function Products() {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
        <ProductConsumer>
            {
                value =>{
                    return(
                        value.products.map(item =>
                                <ProductCard key={item.id} product={item} value={value}/>
                            )
                    )
                }
            }
        </ProductConsumer>
        </div>
    )
}

export default Products

