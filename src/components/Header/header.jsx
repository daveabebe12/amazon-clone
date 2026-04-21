import React from "react";
import classes from "./header.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./lowerHeader";

function header() {
  return (
    <section>
      <section className={classes.header_container}>
        {/* left side links */}
        <div className={classes.logo_container}>
          {/* logo */}
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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
          <a href="" className = {classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
              alt=""
            />
            <section>
              <option value="">EN</option>
            </section>
          </a>
          <a href="">
            {/* sign in */}
            <div>
              <p>Sign in</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* return and orders */}
          <a href="">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </a>
          {/* cart */}
          <a href="" className={classes.cart}>
            <BiCart size={35}/>
            <span>0</span>
          </a>
        </div>
      </section>
<LowerHeader/>
    </section>
  );
}
export default header;