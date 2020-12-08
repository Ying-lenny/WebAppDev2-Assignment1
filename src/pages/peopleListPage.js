/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Pagetemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext'

const peopleListPage = () => {
  const context = useContext(PeopleContext);
  const popular = context.popular.filter( m => m.name )

  return (
    <Pagetemplate
      title="Discover Movies"
      popular={popular}  /* Changed */
    />
  );
};

export default peopleListPage;