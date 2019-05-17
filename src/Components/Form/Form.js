import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			productImageUrl: '',
			productName: '',
			productPrice: 0,
		};
	}

	componentDidMount() {
		axios
			.get(`/api/products`)
			.then(res => {
				this.setState({
					products: res.data,
				});
			})
			.catch(err => {
				console.log(`An error has occurred retrieving the products: ${err}`);
			});
	}

	handleChange = e => {
		let { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleCancelClick = () => {
		this.formObject.reset();
	};

	handleAddClick = () => {
		axios
			.post('/api/products', {
				imageUrl: this.state.imageUrl,
				productName: this.state.productName,
				productPrice: this.state.productPrice,
			})
			.then(res => {
				this.setState({
					products: res.data,
				});
			})
			.catch(err => {
				console.log(`There was an error adding ${this.state.productName}`);
			});
	};

	render() {
		return (
			<div>
				<form action='' name='inputForm'>
					<input
						type='text'
						name='productImageUrl'
						placeholder='Image'
						value={this.state.productImageUrl}
						onChange={this.handleChange}
					/>
					<input
						type='text'
						name='productName'
						placeholder='Name'
						value={this.state.productName}
						onChange={this.handleChange}
					/>
					<input
						type='number'
						name='productPrice'
						placeholder='Price'
						value={this.state.productPrice}
						onChange={this.handleChange}
					/>
				</form>
				<form action='' name='buttonForm'>
					<button onClick={this.state.handleCancelClick}>Cancel</button>
					<button onClick={this.state.handleAddClick}>Add Inventory</button>
				</form>
			</div>
		);
	}
}

// A user should be able to see all of the products that have been added to the inventory.

// Each individual product should display its name, price and image.
// If there is no image URL, a default image should appear for the product.
