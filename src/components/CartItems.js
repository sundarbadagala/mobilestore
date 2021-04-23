import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './Styles.css'

function CartItems({product, value}) {
    const {id, title, company, price, count, total}= product
    const {decrementItem, incrementItem, removeItem}= value
    return (
        <Container className='mb-3'>
            <Row>
                <Col md={3} xs={6}>{company} {title}</Col>
                <Col md={2} xs={6}>{price}</Col>
                <Col md={3} xs={6}>
                    <Button onClick={()=>decrementItem(id)} variant='danger' className='btn-circle ' size='sm'>
                        <i className='fas fa-minus'/>
                    </Button>
                    <Button variant='outline-dark' disabled className='btn-size mx-2' size='sm'>
                        {count}
                    </Button>
                    <Button onClick={()=>incrementItem(id)} variant='success' className='btn-circle' size='sm'>
                        <i className='fas fa-plus'/>
                    </Button>
                </Col>
                <Col md={1} xs={6} >
                    <Button onClick={()=>removeItem(id)} variant='secondary' className='btn-circle' size='sm'>
                        <i className='fas fa-trash'/>
                    </Button>
                </Col>
                <Col md={3} xs={12}>
                    <span>{count}</span>
                    <i className='fas fa-times mx-2'/> 
                    <span>{price} </span>
                    <i className='fas fa-equals mx-2'/> 
                    <Button variant='secondary' className='p-0'>{total}</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CartItems
