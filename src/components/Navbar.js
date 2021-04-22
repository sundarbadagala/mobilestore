import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Styles.css'

function Navbar() {
    return (
        <Container fluid className='bg-primary p-2'>
            <Row>
                <Col className='ml-3 text-uppercase d-flex align-items-center'>
                    <Link to='/' className='text-decoration-none text-dark'>
                        <span className='font-weight-bold font-italic headear-font'>Mobile Store</span>
                    </Link>
                </Col>
                <Col className='text-right mr-3'>
                    <Link to='/cart'>
                        <Button variant='warning' className=' text-capitalize'>
                            <i className='fas fa-cart-plus'/> my cart
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
