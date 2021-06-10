import React from 'react'
import {storeProducts, detailProducts} from './productsData'

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
        this.state.cart.map(item => itemsCost += item.total)
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
        let tempCart = [...this.state.cart]
        const index = tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price

        this.setState(()=>{
            return{
                cart : [...tempCart]
            }
        },
        ()=>{
            this.addTotal()
        })
    }
    decrementItem=(id)=>{
        let tempCart = [...this.state.cart]
        const index = tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        product.count = product.count - 1
        if(product.count === 0){
            this.removeItem(id)
        }else{
            product.total = product.count * product.price
            this.setState(()=>{
                return{
                    cart: [...tempCart]
                }
            },()=>{
                this.addTotal()
            }) 
        }
    }
    removeItem=(id)=>{
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        const removedItem = tempProducts[index]
        removedItem.inCart = false
        removedItem.count = 0
        removedItem.total = 0

        this.setState(()=>{
            return{
                products: [...tempProducts],
                cart: [...tempCart]
            }
        },
        ()=>{
            this.addTotal()
        })
    }
    clearCart=()=>{
        this.setState(()=>{
            return{
                cart:[]
            }
        },
        ()=>{
            this.setProducts()
            this.addTotal()
        })
    }
    handleDetails=(id)=>{
        const product = this.getItem(id)
        this.setState(()=>{
            return{
                details: product
            }
        })
    }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                incrementItem: this.incrementItem,
                decrementItem: this.decrementItem,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleDetails: this.handleDetails
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}