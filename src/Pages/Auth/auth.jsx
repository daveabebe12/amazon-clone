import React, {useState} from "react";
import classes from "./auth.module.css";
import { Link } from "react-router-dom";
import {auth} from "../../utility/firebase"


function Auth() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  console.log(email, password)

  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1280px-Amazon_2024.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign in or create account</h1>
        <form action="">
          <div>
            <label htmlFor="email">Enter mobile number or email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" />
          </div>
          <button className={classes.login_signinButton}>Sign In</button>
          <p className={classes.terms}>
            By continuing, you agree to Amazon's 
            <a href="#"> Conditions of Use</a> and
            <a href="#">Privacy Notice</a>.
          </p>
          <div className={classes.need_help}>
            <a href="#">Need help?</a>
            <div className={classes.business}>
              <p>Buying for work?</p>
              <button className={classes.login_registerButton}>
                Create your Amazon Account
              </button>
              {/* <a href="#">Create a free business account</a> */}
            </div>
          </div>
        </form>
      </div>

      {/* <div className={classes.spacer}></div> */}
      <footer className={classes.footer}>
        <div className={classes.footer_links}>
          <a href=" ">Conditions of use</a>
          <a href=" ">Privacy Notice</a>
          <a href=" ">Help</a>
        </div>
        <p className={classes.footer_copy}>
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </section>
  );
}

export default Auth;
