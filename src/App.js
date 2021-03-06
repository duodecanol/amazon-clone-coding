import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders'
import Home_AdSlider from './Home_AdSlider';
import { AdSliderData } from './AdSliderData'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51J3YpqIcYg6RaQNtn9wjGkCEtkj3Eq3TPgzQvOksKUfYtOci0Q8ZtEUA6Q0B5WKmkFelc4O58HskvJ32RKBDuRTN00wVjyL3ob');
// don't need to hide this public Stripe API key
const ImageData = [
  {image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"},
  {image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/BankPromotions/KBCard/2021/May/1500x600_eng._CB666631315_.jpg"},
  {image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"},
  {image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"},
  {image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"},
];

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => { // Like a dynamic if statement for React
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>  ', authUser);
      
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">

        <Switch>
          <Route path="/slider">
            <Header />
            <Home_AdSlider slides={AdSliderData} />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
