import React from 'react'
import CartItems  from './CartItems'
import {ProductConsumer} from './Context'

function CartList() {
    return (
        <div className='mt-3'>
            <ProductConsumer>
                {
                    value =>{
                        return(
                            value.cart.map(item => <CartItems key={item.id} product={item} value={value}/>)
                        )
                    }
                }
            </ProductConsumer>
        </div>
    )
}

export default CartList
