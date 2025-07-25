import "./Login.css"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    reset()
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="logo">Sweet Crumbs Bakery</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your uername"
          {...register('username', { required: 'username is required' })}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
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

          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          already have an account? <Link className="link" to="/login">login</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;