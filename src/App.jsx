import { useContext, useEffect } from "react";
import "./App.css";
// import Header from './components/Header/header'
// import Carousel from './components/Carousel/Carousel'
// import Category from './components/Category/category'
// import Product from './components/Product/Product'
import Routing from "./Router";
import { Type } from "./utility/action.type";
import { auth } from "./utility/firebase";
import { DataContext } from "./components/DataProvider/DataProvider";
import { type } from "firebase/firestore/pipelines";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routing />;
  // // <div>
  //     {/* <Header/>
  //     <Carousel/>
  //     <Category/>
  //     <Product/> */}
  // {/* </div> */}
}

export default App;
