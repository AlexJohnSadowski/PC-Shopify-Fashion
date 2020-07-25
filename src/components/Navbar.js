import React, {useContext} from 'react'
import { Container, Anchor, Icon } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {
    const { openCart } = useContext(ShopContext)


    return (
        <div>
            <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
                <Link to="/"><Icon name="Store" size="4vh" color="black500" /></Link>
                <Anchor onClick={() => openCart()}><Icon name="Bag" size="4vh" color="black500" /></Anchor>
            </Container>
            
        </div>
    )
}

export default Navbar
