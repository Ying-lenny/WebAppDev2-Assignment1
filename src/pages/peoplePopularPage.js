/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import Pagetemplate from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext'

const peoplePopularPage = () => {
  const context = useContext(PeopleContext);
  const popular = context.popular.filter( m => m.name )

  return (
    <Pagetemplate
      title={"Popular People"}
      popular={popular}  /* Changed */
    />
  );
};

export default peoplePopularPage;