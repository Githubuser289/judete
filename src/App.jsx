import { useState } from "react";
import Login from "./Components/Login";
import MainScreen from "./Components/MainScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const checkLoginData = (psw) => {
    setPassword(psw);
    return /^[0-9]{3}$/.test(psw);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login
          onLogin={(password) => {
            if (checkLoginData(password)) {
              setIsLoggedIn(true);
            } else {
              document.getElementById("loginform").value = "";
              alert("Username sau parola incorectă!");
            }
          }}
        />
      ) : (
        <MainScreen passw={password} />
      )}
    </div>
  );
}

export default App;
