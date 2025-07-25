import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"

function Nav() {
	const sidebarRef = useRef(null)
	const menuRef = useRef(null)
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);


	const showSidebar = () => {
		sidebarRef.current.classList.add("active");
		menuRef.current.style.display = "none";
	};
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const hideSidebar = () => {
		sidebarRef.current.classList.remove("active");
		menuRef.current.style.display = "block";
	};
	return (
		<>
			<div  className={`nav ${showNavbar ? "nav-visible" : "nav-hidden"}`}>
				<h1>Wix</h1>
				<ul>
					<Link className='hideOnMobile li' to="/" >Home</Link>
					<Link className='hideOnMobile li' to="/products">Products</Link>
					<Link className='hideOnMobile li' to="/login" >Login</Link>
					<Link className='hideOnMobile li' to="about" >about</Link>
					<i onClick={showSidebar} ref={menuRef} className="ri-menu-line"></i>
				</ul>
			</div>
			<div ref={sidebarRef} className='sidebar'>
				<ul>
					<i onClick={hideSidebar} className="ri-close-fill"></i>
					<Link to="/" className='li'>Home</Link>
					<Link to="/products" className='li'>Products</Link>
					<Link to="/login" className='li'>Login</Link>
					<Link to="about" className='li'>about</Link>
				</ul>
			</div>
		</>
	)
}

export default Nav