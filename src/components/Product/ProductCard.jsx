import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormate from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import {Type} from '../../utility/action.type.js'

// import Link from 'react-router-dom'

function ProductCard({ product }) {
  const { image, title, rating, price, description } = product;

    const [state, dispatch] = useContext(DataContext)

    const addToCart =()=>{
      dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
          image, title, rating, price, description
        }
      })
    }

  return (
    <div className={`${classes.card_container}`}>
      <Link to={`/products/${product.id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormate amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
