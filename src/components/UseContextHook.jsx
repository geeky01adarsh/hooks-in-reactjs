import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);
const ThemeContext = createContext(null);

const FirstChildCompo = () => {
  return (
    <>
      <h2>I m the first Child</h2>
      <SecondChildCompo />
    </>
  );
};

const SecondChildCompo = () => {
  return (
    <>
      <h3>I m the second Child</h3>
      <ThidChildCompo />
    </>
  );
};
const ThidChildCompo = () => {
  const user = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  // console.log(theme[0])
  return (
    <>
      <div
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme !== "light" ? "white" : "black",
        }}
      >
        <h4>I m the third Child</h4>
        <h5>hi, {user}</h5>
        <button
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
};

const UseContextHook = () => {
  const username = "Adarsh";
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <UserContext.Provider value={username}>
        <div
          style={{
            background: theme === "light" ? "white" : "black",
            color: theme !== "light" ? "white" : "black",
          }}
        >
          <h1>this is the example of useContext Hook</h1>
        </div>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <FirstChildCompo />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default UseContextHook;
