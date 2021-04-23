import React from 'react'
import {ProductConsumer} from './Context'
import {Container, Row, Col, Button} from 'react-bootstrap'

function CartTotal() {
    return (
        <ProductConsumer>
            {
                value=>{
                    return(
                        <Container className='border'>
                            <Row>
                                <Col>
                                    <Button onClick={()=>value.clearCart()}>Clear Cart</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Items price</Col>
                                <Col>{value.itemsPrice}</Col>
                            </Row>
                            <Row>
                                <Col>Tax price</Col>
                                <Col>{value.taxPrice}</Col>
                            </Row>
                            <Row>
                                <Col>Total prece</Col>
                                <Col>{value.totalPrice}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button>Check Out</Button>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            }
        </ProductConsumer>
    )
}

export default CartTotal
