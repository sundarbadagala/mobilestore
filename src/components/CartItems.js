import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

function CartItems({product, value}) {
    const {id, title, company, price, count, total}= product
    const {decrementItem, incrementItem, removeItem}= value
    return (
        <Container>
            <Row>
                <Col>{company} {title}</Col>
                <Col>{price}</Col>
                <Col>
                    <Button onClick={()=>decrementItem(id)}>-</Button>
                    <Button>{count}</Button>
                    <Button onClick={()=>incrementItem(id)}>+</Button>
                </Col>
                <Col>
                    <Button onClick={()=>removeItem(id)}>Remove</Button>
                </Col>
                <Col>{count} * {price} = {total}</Col>
            </Row>
        </Container>
    )
}

export default CartItems
