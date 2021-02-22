import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from "react-router-dom";
import { ButtonContainer } from './Button';
import { Button } from 'bootstrap';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>{
          const {id,company,img,info,title,price,inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>Heads-To-Tails Pet Shop</h1>
              </div>
              </div>
              {/* end title */}
              {/* product information */}
              <div className="row">
                <div className="col-10 mx auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx auto col-md-6 my-3 text-capitalize">
                <h2>{title}</h2>
                <p className="text-muted lead">{info}</p>
                <h4 className="text-blue">
                  <strong>
                  Price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  Made by: <span className="text-uppercase">{company}</span>
                </h4>
                {/* Buttons */}
                <div>
                  <Link to='/'>
                    <ButtonContainer>Back to Product Page</ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  cart 
                  disabled={inCart ? true : false}
                  onClick={() =>{
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
