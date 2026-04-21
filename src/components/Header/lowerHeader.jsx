import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css"


function lowerHeader() {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
                <AiOutlineMenu />
                <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Gift Cards</li>
            <li>Sell</li>
            <li>Registry</li>
            <li>Prime Video</li>
            <li>Costomer Service</li>
        </ul>
    </div>
  )
}
export default lowerHeader;