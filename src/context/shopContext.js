import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: '4fa429e286eadf6c966eb7a7a6938ede',
    domain: 'reactprojectdiv.myshopify.com/'
})

class ShopProvider extends Component {

    state = {
        products:[],
        product:{},
        checkout:{},
        isCartOpen: false,
        test:'test'
    }

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        this.setState({ checkout: checkout })
        console.log(checkout)
    }

    addItemToCart = async (variantId, quantity) => {
        
    }

    fetchAllProducts = async () => {
        
    }

    fetchProductWithId = async () => {
        
    }

    closeCart= async () => {
        
    }

    openCart = async () => {
        
    }


    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer

export { ShopConsumer, ShopContext}

export default ShopProvider