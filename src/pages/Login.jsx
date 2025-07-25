import "./Login.css"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const Navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data); 
    Navigate('/')
    reset()
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="logo">Sweet Crumbs Bakery</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link className="link"
 to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
