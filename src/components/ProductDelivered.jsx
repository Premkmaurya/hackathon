import "./TopProduct.css"

function TopProduct() {
	return (
		<div className='main'>
			<h1 className="product-heading">What We Deliverd</h1>
			<div className="container">
				<div className="product-card">
					<img className="product-image" src="../../public/cookies/about-1.png" alt="Chocolate Cake" />
					<h3 className="product-title">cake</h3>
				</div>
				<div className="product-card">
					<img className="product-image" src="https://ik.imagekit.io/sk6swwncb/cookie-2.png?updatedAt=1753338889105" alt="Chocolate Cake" />
					<h3 className="product-title">Molten Choco Chip Cookie</h3>
				</div>
				<div className="product-card">
					<img className="product-image" src="/cookies/cookie-3.png" alt="Chocolate Cake" />
					<h3 className="product-title">Choco Drizzle Croissant</h3>
				</div>
				<div className="product-card">
					<img className="product-image" src="/cookies/cookie-4.png" alt="Chocolate Cake" />
					<h3 className="product-title">Black Forest Delight</h3>
				</div>
				<div className="product-card">
					<img className="product-image" src="/cookies/cookie-5.png" alt="Chocolate Cake" />
					<h3 className="product-title">Strawberry Star Cupcake</h3>
				</div>
			</div>
		</div >
	)
}

export default TopProduct