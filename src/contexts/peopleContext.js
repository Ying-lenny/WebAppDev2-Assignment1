import React, { useEffect, createContext, useReducer } from "react";
import {getPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-interest":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.person.id ? { ...m, interest: true } : m
        ),
      };

      case "load-popular":
        return { popular: action.payload.popular};
      default:
        return state;
    }
  };

  const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { popular: [] });

    const addToInterest = (personId) => {
      const index = state.popular.map((m) => m.id).indexOf(personId);
      dispatch({ type: "add-interest", payload: { person: state.popular[index] } });
    };

    useEffect(() => {
      getPeople().then((popular) => {
        dispatch({ type: "load-popular", payload: { popular } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PeopleContext.Provider
        value={{
          popular: state.popular,
          addToInterest: addToInterest
        }}
      >
        {props.children}
      </PeopleContext.Provider>
    );
  };
  
  export default PeopleContextProvider;