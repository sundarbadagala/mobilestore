import React, { useContext } from 'react'
import CartItems  from './CartItems'
import {ProductContext} from '../ContextAPI'

function CartList() {
    const product= useContext(ProductContext)
    return (
        <div className='mt-3'>
            {
                product.cart.map(item => <CartItems key={item.id} product={item} value={product}/>)    
            }
        </div>
    )
}

export default CartList
