import React, { useContext, useState } from "react";
import classes from "./auth.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate()
  // console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signinButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
            {/* Sign In */}
          </button>
          <p className={classes.terms}>
            By continuing, you agree to Amazon's
            <a href="#"> Conditions of Use</a> and
            <a href="#">Privacy Notice</a>.
          </p>
          <div className={classes.need_help}>
            <a href="#">Need help?</a>
            <div className={classes.business}>
              <p>Buying for work?</p>
              <button
                type="submit"
                name="signup"
                onClick={authHandler}
                className={classes.login_registerButton}
              >
                {loading.signUp ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Create your Amazon Account"
            )}
              </button>
              {error && (
                <small
                  style={{ paddingTop: "5px", color: "red", display: "flex" }}
                >
                  {error}
                </small>
              )}
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
