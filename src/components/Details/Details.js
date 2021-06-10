import React, { useContext } from 'react'
import {ProductContext} from '../ContextAPI'
import {Container, Alert, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Currency} from '../CurrencyFormat'

function Details() {
    const product= useContext(ProductContext)
    const {id, img, title, price, info, inCart, addToCart}= product.details
    return (
        <Container className='mt-5'>            
            <Alert variant='primary'>
                <Row>
                    <Col sm={4}>
                        <Image thumbnail src={img} alt='' width={400}/>
                    </Col>
                    <Col sm={8}>
                        <span className='font-weight-bold'>Name : {title}</span><br/>
                        <span className='font-weight-bold'>Price : {Currency(price)}</span><hr/>
                        <span className='text-muted'>{info}</span><hr/>                                        
                        <Link to='/'>
                            <Button className='mr-2'>Go To Products</Button>
                        </Link>
                        <Button disabled={inCart ? true : false} onClick={()=>addToCart(id)}>
                            {inCart ? <span>In Cart</span> : <span>Add To Cart</span>}
                        </Button>
                    </Col>
                </Row>
            </Alert>
        </Container>
    )
}

export default Details
