import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserInfo from "./components/UserInfo";

function App() {
  const [email, setEmailForApp] = useState("");
  const [userName, setUserNameForApp] = useState("");
  const updateDetails = { setEmailForApp, setUserNameForApp };
  const details = { email, userName };
  return (
    <Routes>
      <Route path="/" element={<UserInfo {...updateDetails} />}></Route>
      <Route path="/dashboard" element={<Dashboard {...details} />}></Route>
    </Routes>
  );
}

export default App;
