import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/UserInfo.css";

export default function UserInfo({ setEmailForApp, setUserNameForApp }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && userName.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm) {
      setEmailForApp(email);
      setUserNameForApp(userName);
      navigate("/dashboard");
    }
  }

  return (
    <div className="login-wrapper">
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
        <button disabled={!validateForm()} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
