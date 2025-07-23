import "./TopProduct.css"

function TopProduct() {
	return (
		<div className='main'>
			<div className='container'>
				<div style={{ '--r': 1, '--c': 1 }}>
					<img className="top-img" src="../../public/cookies/cookie-1.png" />
				</div>
				<div style={{ '--r': 1, '--c': 3 }}>
					<img className="top-img" src="../../public/cookies/cookie-2.png" />
				</div>
				<div style={{ '--r': 2, '--c': 5 }}>
					<img className="top-img" src="../../public/cookies/cookie-3.png" />
				</div>
				<div style={{ '--r': 3, '--c': 2 }}>
					<img className="top-img" src="../../public/cookies/cookie-4.png" />
				</div>
			</div >
		</div >
	)
}

export default TopProduct