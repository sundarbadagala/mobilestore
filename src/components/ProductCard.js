import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function ProductCard({product, value}) {
    const {id, img, title, company, price, inCart}= product
    const {addToCart} = value
    return (
        <div>
            <Card style={{width:'180px'}} className='m-2'>
                <Link to='/details'>
                    <Card.Img src={img} alt='' height='180px'/>
                </Link>
                <Card.Header>
                    <span>{company}</span><br/>
                    <span>{title}</span><br/>
                    <span>{price}</span><br/>
                </Card.Header>
                <Card.Body className='p-1'>
                    <Button block onClick={()=>addToCart(id)} disabled={inCart ? true : false}>
                        {inCart ? <span>in Cart</span>: <span>add to cart</span>}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
