import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Classes from "./Product.module.css";
import Loader from "../Loader/loading";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error: " + err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={Classes.products_container}>
      {products.map((singleProduct) => {
        return <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>;
      })}
    </section>
  );
}

export default Product;
