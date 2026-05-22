import React, { useContext } from "react";
import classes from "./header.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./lowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.header_container}>
          {/* left side links */}
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <IoLocationOutline />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={classes.search}>
            {/* dropdown button */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            {/* search */}
            <input type="text" placeholder="search product" />
            {/* search icon */}
            <IoSearch />
          </div>

          {/* right side links */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </Link>
            <Link to="/auth">
              {/* sign in */}
              <div>
                <p>Sign in</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* return and orders */}
            <Link to="/order">
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
      <div className={classes.header_spacer} />
    </>
  );
}
export default Header;
