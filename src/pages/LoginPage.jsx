import React from 'react';

    function LoginPage() {
      return (
        <div className="login-page">
          <div className="container">
            <h1>Login / Sign Up</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <a href="/forgot-password">Forgot Password?</a>
            <p>Or sign in with</p>
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>
      );
    }

    export default LoginPage;
