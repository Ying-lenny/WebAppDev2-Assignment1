/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import PageTemplate from '../components/templatePeoplePage';
import {PeopleContext} from '../contexts/peopelContext';

const peopleDetailPage = () => {
    const context = useContext(PeopleContext);
    const people = context.popular.filter((m) => {  // New
      return !("popular" in m);
    });
    
      return (
          <PageTemplate
            title='Popular People'
            people={people}
          />
      );
    };
  
  export default peopleDetailPage;