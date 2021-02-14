import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../catLogo.svg'



export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
       { /* 
        https://www.iconfinder.com/icons/751111/cats_cat_dogs_pet_pets_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/pinpointworld
        */}
        <Link to="/">
        <img src={logo} alt="Heads-To-Tails Pet Shop" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to ="./cart"className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            My Cart
          </button>
        </Link>
      </nav>
    )
  }
}