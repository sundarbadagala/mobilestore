import React from 'react'
import {ProductConsumer} from './Context'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Currency} from './CurrencyFormat'
import {Link} from 'react-router-dom'

function CartTotal() {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {itemsPrice, taxPrice, totalPrice}= value
                    return(
                        <Container className='font-weight-bold'>
                            <Row>
                                <Col>
                                    <Button block variant='info' onClick={()=>value.clearCart()}>Clear Cart</Button>
                                    <hr/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={5}>Items price</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{Currency(itemsPrice)}</Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={5}>Tax price</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{Currency(taxPrice)}</Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={5}>Total prece</Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col>{Currency(totalPrice)}</Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col>
                                    <Link to='/sign' className='text-decoration-none'>
                                        <Button block variant='info'>Check Out</Button>
                                    </Link>
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
