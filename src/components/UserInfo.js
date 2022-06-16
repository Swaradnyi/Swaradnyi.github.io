import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/UserInfo.css";

export default function UserInfo({ setEmailForApp, setUserNameForApp }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email.length > 0 && userName.length > 0) {
      setEmailForApp(email);
      setUserNameForApp(userName);
      navigate("/dashboard");
    } else {
      alert("Please enter the fields to continue");
    }
  }

  return (
    <div className="login-wrapper">
      <h3>Enter fields to continue</h3>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
