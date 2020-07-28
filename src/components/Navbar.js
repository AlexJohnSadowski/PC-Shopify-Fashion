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
            <Link onClick={() => openCart()} className="shop">Cart</Link>
        </nav>
    )
}

export default Navbar
