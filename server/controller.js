let id = 0;
let inventory = [
	{
		id: id++,
		productImageUrl:
			'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		productName: 'Hats',
		productPrice: 100,
	},
	{
		id: id++,
		productImageUrl:
			'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		productName: 'Shoes',
		productPrice: 200,
	},
	{
		id: id++,
		productImageUrl:
			'https://images.unsplash.com/photo-1533462506003-13c20d204b58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		productName: 'Ties',
		productPrice: 300,
	},
];

module.exports = {
	create: (req, res) => {
		const { productImageUrl, productName, productPrice } = req.body;
	},

	read: (req, res) => {
		console.log(`Receiving inventory from server`);
		res.send(inventory);
	},

	update: (req, res) => {
		const { productImageUrl, productName, productPrice } = req.body;
	},

	delete: (req, res) => {
		const { id } = req.params;
	},
};
