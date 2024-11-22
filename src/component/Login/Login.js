import React from "react";
import "./Login.css"; // CSS file for styling

const Login = () => {
  return (
    
    <div className="custom-grid">
      <div className="grid-column-no-border">
        {/* <h2>Welcome</h2>
        <p>INTRODUCING BROKER OPERATING SYSTEM</p>
        <div className="image-placeholder">
          <img src="logo192.png" alt="Phone Illustration" />
        </div> */}
      </div>
      <div className="grid-column animate">
        <div class='container'>
        <h1>LOGIN</h1>
        <form>
        <div class="form-control">
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div class="form-control">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button class="btn">Login</button>
          <div className="text">
            <a href="/forgot">Forgot Password?</a>
            <a href="/help">Help</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
