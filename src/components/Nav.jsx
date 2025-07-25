import React, { useRef } from 'react'
import "./Nav.css"

function Nav() {
	const sidebarRef = useRef()
	const showSidebar = () =>{
		 sidebarRef.current.style.disply = "flex";
	}
	return (
		<>
			<div className="nav">
				<h1>Wix</h1>
				<ul>
					<li className='hideOnMobile'>Home</li>
					<li className='hideOnMobile'>Products</li>
					<li className='hideOnMobile'>Login</li>
					<li className='hideOnMobile'>about</li>
					<li onClick={showSidebar}><i className="ri-menu-line"></i></li>
				</ul>
			</div>
			<div ref={sidebarRef} className='sidebar'>
				<ul>
					<li>Home</li>
					<li>Products</li>
					<li>Login</li>
					<li>about</li>
				</ul>
			</div>
		</>
	)
}

export default Nav