import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    if(email==="" || password===""){
      alert("Please enter Email and Password");
      return;
    }

    alert("Login Successful!");

    navigate("/home");

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>📖 Digital Journal</h1>

        <h2>Welcome Back</h2>

        <form onSubmit={login}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button>Login</button>

        </form>

        <p>
          Don't have an account?
          <Link to="/"> Register</Link>
        </p>

      </div>

    </div>

  );

}

export default Login;