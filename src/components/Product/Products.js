import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import {ProductContext} from '../ContextAPI'
import { Container, Row } from 'react-bootstrap'

function Products() {
    const value = useContext(ProductContext)
    return (
        <Container className='d-flex flex-wrap justify-content-center'>
        <Row>
            {   
                value.products.map(item =>
                        <ProductCard key={item.id} product={item} value={value}/>
                    )    
            }
        </Row>
        </Container>
    )
}

export default Products

