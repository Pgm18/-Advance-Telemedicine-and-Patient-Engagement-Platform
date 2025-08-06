import React, { useState } from "react";
import App from "./App";


const Main = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to the App!</h2>
      ) : (
        <App onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Main;


