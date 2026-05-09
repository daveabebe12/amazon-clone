import React, { useEffect, useState } from "react";
// import classes from './ProductDetail.module.css'
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/loading";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <LayOut>
        <Loader/>
      </LayOut>
    );
  }

  if (!product.id) {
    return (
      <LayOut>
        <div>Product not found.</div>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
        <h1>{product.title}</h1>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <div>
          <strong>Rating:</strong> {product.rating?.rate} (
          {product.rating?.count} reviews)
        </div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#f0c14b",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </LayOut>
  );
}

export default ProductDetail;
