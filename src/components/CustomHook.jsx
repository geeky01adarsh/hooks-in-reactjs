import React from "react";
import localStorageHook from "../hooks/localStorageHook";

const CustomHook = () => {
    const [userName, setUserName] = localStorageHook("username", "");
    const [passWord, setPassword] = localStorageHook("password", "")

  return (
    <>
      <input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        name="password"
        value={passWord}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default CustomHook;
