import React from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export default function App() {
	return (
		<div className='App'>
			<Dashboard>
				<Product />
			</Dashboard>
			<Form />
			<Header />
		</div>
	);
}
