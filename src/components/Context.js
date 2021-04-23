import React from 'react'
import {storeProducts, detailProducts} from './Data'

const ProductContext= React.createContext()

class ProductProvider extends React.Component{
    constructor(props){
        super()
        this.state={
            products: [],
            details: detailProducts,
            cart:[],
            itemsPrice:0,
            taxPrice:0,
            totalPrice:0
        }
    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts=()=>{
        let tempProducts = []
        storeProducts.forEach(item =>{
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(()=>{
            return{
                products: tempProducts
            }
        })
    }
    getItem=(id)=>{
        const product= this.state.products.find(item => item.id=== id)
        return product
    }
    addToCart=(id)=>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        product.total = product.price

        this.setState(()=>{
            return{
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        },
        ()=>{
            this.addTotal()
        })
    }
    addTotal=(id)=>{
        let itemsCost = 0
        this.state.cart.map(item => itemsCost += item.price)
        const taxCost = itemsCost * 0.05
        const totalCost = itemsCost + taxCost
        this.setState(()=>{
            return{
                itemsPrice: itemsCost,
                taxPrice: taxCost,
                totalPrice: totalCost
            }
        })
    }
    incrementItem=(id)=>{
        console.log('item incemented')
    }
    decrementItem=(id)=>{
        console.log('item decremented')
    }
    removeItem=(id)=>{
        console.log('item removed')
    }
    clearCart=(id)=>{
        console.log('cart cleared')
    }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                incrementItem: this.incrementItem,
                decrementItem: this.decrementItem,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}