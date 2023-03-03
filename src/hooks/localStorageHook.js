import React, { useState } from "react";

const localStorageHook = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
      try {
          const value = localStorage.getItem(key);
          return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });
    
    const setValue = (value) => {
        setLocalStorageValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [localStorageValue, setValue];
};

export default localStorageHook;
