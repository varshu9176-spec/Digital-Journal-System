import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }
    localStorage.setItem("username", user.name);

alert("Registration Successful!");

navigate("/login");
   
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>📖 Digital Journal</h1>

        <h2>Create Account</h2>

        <form onSubmit={register}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={changeHandler}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={changeHandler}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          />

          <button>Create Account</button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;










