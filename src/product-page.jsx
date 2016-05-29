import React from 'react';
import './product-page.css';

export default class ProductPage extends React.Component {

	render() {
    var productImage = require('./bag.png');
		return (
      <div className="product-page-container">
        <img src={productImage} width={400} />
        Product page
      </div>
		);
	}
}
