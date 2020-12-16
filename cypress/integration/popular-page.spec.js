/* eslint-disable no-undef */
let popular;

// Utility functions
const filterByName = (peopleList, string) =>
  peopleList.filter((m) => m.name.toLowerCase().search(string) !== -1);

describe("Home Page ", () => {
  before(() => {
      //Get popular people from TMDB and store in popular variable
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          popular = response.results
        })
  })

  beforeEach(() => {
    cy.visit("/")
    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Popular Actors").click();
  });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Popular Actors");
        cy.get(".badge").contains(20);
      });
    });

    describe("Filtering", () => {
        //Search Actor Names
        describe("By Actor Names" ,() => {
          beforeEach(() => {
            cy.visit("/person/popular")
          });
          it("should display actors with 'p' in their name", () => {
            const searchString = 'p'
            const matchingActors = filterByName(popular, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingActors.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingActors[index].name);
            });
          })

          it("should display actors with 'o' in their name", () => {
            const searchString = "o";
            const matchingActors = filterByName(popular, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingActors.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingActors[index].name);
            })
          })

          it("should check for actors with 'xyz' in their name to handle errors", () => {
            const searchString = "xyz";
            const matchingActors = filterByName(popular, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingActors.length);
            cy.get(".card").should('not.exist');
          })
        });
    });
      
      });