import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading</div>;
  return (
    <div className="container">
      <div className="main-grid">
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
                <div className="product-image"><img src={product.images[0].src} /></div>
                <div className="product-title">{product.title}</div>
                <div className="product-price">{product.variants[0].price} zł</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
