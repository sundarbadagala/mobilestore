import React, { useContext } from 'react'
import {ProductContext} from '../ContextAPI'
import CartList from './CartList'
import CartTotal from './CartTotal'
import {Container, Alert} from 'react-bootstrap'

function Cart() {
    const product = useContext(ProductContext)
    return (
        <Container>
            {
                (product.cart.length > 0)? 
                    <React.Fragment>
                        <CartList/>
                        <CartTotal/>
                    </React.Fragment>:
                    <Alert variant='danger' className='text-center mt-5 text-capitalize p-0'>
                        <h3>Cart is empty</h3>
                    </Alert>
            }
        </Container>
    )
}

export default Cart
