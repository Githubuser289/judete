import { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";

function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conectare</h2>
      <form onSubmit={handleSubmit} className="login">
        <div>
          <input
            id="loginform"
            type="password"
            placeholder="Introduceti parola"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
