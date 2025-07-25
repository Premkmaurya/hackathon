import React, { useRef } from 'react'
import "./Nav.css"

function Nav() {
	const sidebarRef = useRef(null)
	const menuRef = useRef(null)
	const showSidebar = () => {
  sidebarRef.current.classList.add("active");
  menuRef.current.style.display = "none";
};

const hideSidebar = () => {
  sidebarRef.current.classList.remove("active");
  menuRef.current.style.display = "block";
};
	return (
		<>
			<div className="nav">
				<h1>Wix</h1>
				<ul>
					<li className='hideOnMobile'>Home</li>
					<li className='hideOnMobile'>Products</li>
					<li className='hideOnMobile'>Login</li>
					<li className='hideOnMobile'>about</li>
					<li onClick={showSidebar}><i ref={menuRef} className="ri-menu-line"></i></li>
				</ul>
			</div>
			<div ref={sidebarRef} className='sidebar'>
				<ul>
					<i onClick={hideSidebar} className="ri-close-fill"></i>
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