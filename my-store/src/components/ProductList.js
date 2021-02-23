import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

const ProductSearch = ({productSearch=[]}) => {
  return (
    <>
    { productSearch.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

class ProductList extends Component {
  render() {
    return ( 
      <React.Fragment>
      <div className="py-5">
        <div className="container">
        <Title name="Our" title="Products" />
          <div className="row"> 
          <ProductConsumer>
            {value =>{
              return value.products.map( product =>{
                return <Product key={product.id} product={product} />;
              })
            }}
          </ProductConsumer>
          </div>
        </div>
          </div>
      </React.Fragment>
    )
  }
}

export default ProductList;