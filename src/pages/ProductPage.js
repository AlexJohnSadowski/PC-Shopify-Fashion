import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { Text, Div, Button, Row, Col, Container } from "atomize";
import Loading from "../components/Loading";

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } = useContext(
    ShopContext
  );
  // const [product, setProduct] = useState(null)
  // async function fetchData() {
  //     const fetchedProduct = await fetchProductWithId(id)
  //     setProduct(fetchedProduct)
  // }

  useEffect(() => {
    fetchProductWithId(id);

    // fetchData()
    return () => {
      // setProduct(null)
    };
  }, [fetchProductWithId, id]);

  if (!product.title) return <Loading />;
  return (
      <div className="product-grid">
        <div className="details-image"><img src={product.images[0].src} /></div>
        <div className="details-title">{product.title}</div>
        <div className="details-price">{product.variants[0].price}PLN</div>
        <div className="details-descr">{product.description}</div>
        <button
          className="blue-button"
          onClick={() => addItemToCheckout(product.variants[0].id, 1)}
        >
          Add To Cart
        </button>
      </div>
  );
};

export default ProductPage;
