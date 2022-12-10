import { createContext, useReducer } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

const reducer = (state, { type }) => {
  switch (type) {
    case 'dark':
      return 'dark'

    case 'light':
      return ''

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])
  const initialState = ''
  const [state, dispatch] = useReducer(reducer, initialState)
  const store = {
    dispatch,
    state,
    data
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={store}>
    <div className={state}>
    {children}
    </div>
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}