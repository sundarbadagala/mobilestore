import React from 'react'
import {ProductConsumer} from './Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

function Cart() {
    return (
        <ProductConsumer>
            {
                value=>{
                    if(value.cart.length > 0){
                        return(
                            <React.Fragment>
                                <CartList/>
                                <CartTotal/>
                            </React.Fragment>
                        )
                    }else{
                        return(
                            <div>Cart is empty</div>
                        )
                    }
                }
            }
        </ProductConsumer>
    )
}

export default Cart
