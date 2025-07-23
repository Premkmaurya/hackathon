import "./Login.css"
function Login() {
	return (
		 <div className="login-container">
      <div className="login-box">
        <h2 className="logo">Sweet Crumbs Bakery</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
	)
}

export default Login