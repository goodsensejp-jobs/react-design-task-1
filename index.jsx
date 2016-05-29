import React from 'react';
import ReactDOM from 'react-dom';
import ProductPage from './src/product-page';
import './src/base.css';

export class App extends React.Component {
	render() {
		return (
			<ProductPage />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
