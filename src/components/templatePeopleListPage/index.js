import React from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";

const PeopleListPageTemplate = ({ popular, name }) => {
  let displayedPeople = popular
    .filter(m => {
      return m.name.toLowerCase()!== -1;
    })

  return (
    <>
      <Header name={name} numPeople={displayedPeople.length} />
      <PeopleList
       popular={displayedPeople}
    />
    </>
  );
};

export default PeopleListPageTemplate ;