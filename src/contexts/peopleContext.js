import React, { useEffect, createContext, useReducer } from "react";
import {getPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "load-popular":
        return { popular: action.payload.popular};
      default:
        return state;
    }
  };

  const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { popular: [] });

    useEffect(() => {
      getPeople().then((popular) => {
        dispatch({ type: "load-popular", payload: { popular } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PeopleContext.Provider
        value={{
          popular: state.popular
        }}
      >
        {props.children}
      </PeopleContext.Provider>
    );
  };
  
  export default PeopleContextProvider;