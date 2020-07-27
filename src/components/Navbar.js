import React, {useContext} from 'react'
import { Anchor, Icon } from 'atomize'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {
    const { openCart } = useContext(ShopContext)

    return (
        <nav>
            
            <Link to="/" className="logo">Patrice Cadet</Link>
            <Link to="/products" className="shop">products</Link>
            <Anchor onClick={() => openCart()}><Icon name="Bag" size="5vh" color="black" /></Anchor>
        </nav>
    )
}

export default Navbar
