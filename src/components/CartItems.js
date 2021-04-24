import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Currency} from './CurrencyFormat'

function CartItems({product, value}) {
    const {id, title, company, price, count, total}= product
    const {decrementItem, incrementItem, removeItem, handleDetails}= value
    return (
        <Container className='mb-3 font-weight-bold'>
            <hr/>
            <Row>
                <Col md={3} xs={6} className='mb-2'>
                    <div onClick={()=>handleDetails(id)}>
                        <Link to='/details' className='text-decoration-none text-dark'>
                            {company} {title}
                        </Link>
                    </div>
                </Col>
                <Col md={2} xs={6}>{Currency(price)}</Col>
                <Col md={3} xs={8} className='mb-2'>
                    <Button onClick={()=>decrementItem(id)} variant='outline-dark' size='sm'>
                        <i className='fas fa-minus'/>
                    </Button>
                    <Button variant='outline-dark' disabled className='btn-size mx-2' size='sm'>
                        {count}
                    </Button>
                    <Button onClick={()=>incrementItem(id)} variant='outline-dark' size='sm'>
                        <i className='fas fa-plus'/>
                    </Button>
                </Col>
                <Col md={1} xs={4} >
                    <Button onClick={()=>removeItem(id)} variant='secondary' size='sm'>
                        <i className='fas fa-trash'/>
                    </Button>
                </Col>
                <Col md={3} xs={12}>
                    <span>{count}</span>
                    <i className='fas fa-times mx-2'/> 
                    <span>{price} </span>
                    <i className='fas fa-equals mx-2'/> 
                    <Button variant='dark' className='p-0'>{Currency(total)}</Button>
                </Col>
            </Row>
            <hr/>
        </Container>
    )
}

export default CartItems
