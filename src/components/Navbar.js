import React, { useContext } from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Styles.css'
import {ProductContext} from './Context'

function Navbar() {
    const product= useContext(ProductContext)
    const {cart}= product
    return (
        <Container fluid className='bg-primary p-2'>
            <Row>
                <Col className='ml-3 text-uppercase d-flex align-items-center'>
                    <Link to='/' className='text-decoration-none text-dark'>
                        <span className='font-weight-bold font-italic headear-font text-light'>Mobile Store</span>
                    </Link>
                </Col>
                <Col className='text-right mr-3'>
                    <Link to='/cart'>
                        <Button variant='warning' className=' text-capitalize'>
                            <i className='fas fa-cart-plus'/> 
                            <span className='mx-1'>my cart</span>
                            {cart.length>0 && <Badge variant='danger' pill> {cart.length} </Badge>}
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
