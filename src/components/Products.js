import React from 'react'
import ProductCard from './ProductCard'
import {ProductConsumer} from './Context'
import { Container, Row } from 'react-bootstrap'

function Products() {
    return (
        <Container className='d-flex flex-wrap justify-content-center'>
        <Row>
        <ProductConsumer>
            {
                value =>{
                    return(
                        value.products.map(item =>
                                <ProductCard key={item.id} product={item} value={value}/>
                            )
                    )
                }
            }
        </ProductConsumer>
        </Row>
        </Container>
    )
}

export default Products

