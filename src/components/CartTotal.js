import React from 'react'
import {ProductConsumer} from './Context'
import {Container, Row, Col, Button} from 'react-bootstrap'

function CartTotal() {
    return (
        <ProductConsumer>
            {
                value=>{
                    return(
                        <Container className='font-weight-bold'>
                            <Row>
                                <Col>
                                    <Button block variant='info' onClick={()=>value.clearCart()}>Clear Cart</Button>
                                    <hr/>
                                </Col>
                            </Row>
                            <Row className='border'>
                                <Col md={2} xs={5} className='border'>Items price</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{value.itemsPrice}</Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={5}>Tax price</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{value.taxPrice}</Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={5}>Total prece</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{value.totalPrice}</Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Button block variant='info'>Check Out</Button>
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
