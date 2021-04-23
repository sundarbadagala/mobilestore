import React from 'react'
import {ProductConsumer} from './Context'
import CartList from './CartList'
import CartTotal from './CartTotal'
import {Container, Alert} from 'react-bootstrap'

function Cart() {
    return (
        <Container>
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
                            <Alert variant='danger' className='text-center mt-5 text-capitalize p-0'>
                                <h3>Cart is empty</h3>
                            </Alert>
                        )
                    }
                }
            }
        </ProductConsumer>
        </Container>
    )
}

export default Cart
