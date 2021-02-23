import React, { Component } from 'react';

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">ERROR</h1>
              <h1 className="display-3">PAGE NOT FOUND</h1>
              <h3>The requested URL <span className="text-danger">{this.props.location.pathname}</span> is  not found.</h3>
          </div>
        </div>
      </div>
    )
  }
}
export default Default;