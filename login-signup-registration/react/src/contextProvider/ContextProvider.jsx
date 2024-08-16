import { Children, createContext, useState } from "react";
import { useAsyncError } from "react-router-dom";

const StateContext = createContext({
  user: null,
  token: null,
});

export const ContextProvider = ({ Children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {Children}
    </StateContext.Provider>
  );
};
