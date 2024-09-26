import React, { useState } from "react";

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thêm logic xử lý form (gọi API, validation, v.v.)
    if (isLogin) {
      // Logic đăng nhập
      console.log("Logging in with", { email, password });
    } else {
      // Logic đăng ký
      console.log("Registering with", { email, password, confirmPassword });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {!isLogin && (
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      )}
      <button type="submit">{isLogin ? "Login" : "Register"}</button>
    </form>
  );
};

export default AuthForm;
