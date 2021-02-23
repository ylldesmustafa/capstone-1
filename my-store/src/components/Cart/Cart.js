import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if (cart.length>0) {
              return ( <section>
                  <Title name="your" title="cart"></Title>
                  <CartColumns></CartColumns>
                  <CartList value={value}></CartList>
                  <CartTotals value={value}></CartTotals>
                  </section>
              );
            }
            else {
              return <EmptyCart></EmptyCart>
            }
          }}
        </ProductConsumer>
      </section>
      </React.Fragment>
    );
  }
}
export default Cart;