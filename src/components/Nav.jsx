import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const sidebarRef = useRef(null);
  const menuRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user,setUser] = useState(null);

  const showSidebar = () => {
    sidebarRef.current.classList.add("active");
    menuRef.current.style.display = "none";
  };
  const hideSidebar = () => {
    sidebarRef.current.classList.remove("active");
    menuRef.current.style.display = "block";
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
  useEffect(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(storedUser);
            }
        }, []);


  return (
    <>
      {" "}
      <div
        className={`nav $
	{showNavbar ? "nav-visible" : "nav-hidden"}`}
      >
        {" "}
        <h1>Wix</h1>
        <ul>
          {" "}
          <Link className="hideOnMobile li" to="/">
            Home
          </Link>
          <Link className="hideOnMobile li" to="/products">
            Products
          </Link>
          
              {user ? 
              <Link className="hideOnMobile li" to="/profile">Profile</Link>
                      :   
              <Link className="hideOnMobile li" to="/login">Login</Link>
                }
          <Link className="hideOnMobile li" to="about">
            about
          </Link>{" "}
          <i onClick={showSidebar} ref={menuRef} className="ri-menu-line"></i>{" "}
        </ul>{" "}
      </div>{" "}
      <div ref={sidebarRef} className="sidebar">
        {" "}
        <ul>
          {" "}
          <i onClick={hideSidebar} className="ri-close-fill"></i>{" "}
          <Link onClick={hideSidebar} to="/" className="li">
            Home
          </Link>{" "}
          <Link onClick={hideSidebar} to="/products" className="li">
            Products
          </Link>
          <Link onClick={hideSidebar} to="/login" className="li">
            Login
          </Link>{" "}
          <Link onClick={hideSidebar} to="about" className="li">
            about
          </Link>{" "}
        </ul>
      </div>{" "}
    </>
  );
}

export default Nav;
