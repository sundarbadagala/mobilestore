import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Styles.css'
import {Currency} from './CurrencyFormat'

function ProductCard({product, value}) {
    const {id, img, title, company, price, inCart}= product
    const {addToCart, handleDetails} = value
    return (
        <div>
            <Card className='m-2 card-size card-hover text-hover'>
                <div onClick={()=>handleDetails(id)} className='flow-hidden'>
                <Link to='/details'>
                    <Card.Img src={img} alt='' className='card-size img-hover'/>
                </Link>
                </div>
                <Card.Header>
                    <span>{company}</span><br/>
                    <span>{title}</span><br/>
                    <span>{Currency(price)}</span><br/>
                </Card.Header>
                <Card.Body className='p-1'>
                    <Button block onClick={()=>addToCart(id)} disabled={inCart ? true : false}>
                        {inCart ? 
                            <span className=' text-capitalize'>in Cart</span>: <span className='text-capitalize'>add to cart</span>
                        }
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
