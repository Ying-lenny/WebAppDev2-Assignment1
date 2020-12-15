/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });

    it("should allow navigation from site header to all movie related pages", () => {
      cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Upcoming").click();
      cy.url().should("include", `/upcoming`);
      cy.get("h2").contains("Upcoming Movies");

      cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Favorites").click();
      cy.url().should("include", `/favorites`);
      cy.get("h2").contains("Favorite Movies");

      cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Wishlist").click();
      cy.url().should("include", `/wishlist`);
      cy.get("h2").contains("Wishlisted Movies");

      cy.get("button").contains("Movies").click();
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("Discover Movies");
    });

  it("should allow navigation from site header to all Actor related pages", () => {
    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Popular Actors").click();
    cy.url().should("include", `/popular`);
    cy.get("h2").contains("Popular Actors");

    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Latest Actors").click();
    cy.url().should("include", `/latest`);
    cy.get("h2").contains("Latest Actors");

    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Actors of Interest").click();
    cy.url().should("include", `/interest`);
    cy.get("h2").contains("People of Interest");

    cy.get("button").contains("Actors").get("#dropdown-split-basic2").click().get(".dropdown-item").contains("Up and coming Actors").click();
    cy.url().should("include", `/newcomers`);
    cy.get("h2").contains("Up and coming Actors");

    cy.get("button").contains("Movies").click();
    cy.url().should("not.include", `/popular`);
    cy.get("h2").contains("Discover Movies");
  });
});

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/movies/${movieId}`);
    });

    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movieId}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movieId}/reviews`);
    });

    it("should change browser URL when show/hide reviews is clicked", () => {
        cy.contains("Show Reviews").click();
        cy.url().should("include", `/movies/${movieId}/reviews`);
        cy.get("tbody").find("a").eq(0).click();
        cy.url().should("include", `/reviews/`);
      });
    });

    describe("From the Favorites page", () => {
        beforeEach(() => {
          cy.visit("/");
          cy.get(".card").eq(0).find("button").click();
          cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Favorites").click();
        });
        it("should navigate to the movies detail page and change the browser URL", () => {
          cy.get(".card").eq(0).find("img").click();
          cy.url().should("include", `/movies/${movies[0].id}`);
          cy.get("h2").contains(movies[0].title);
        });
      });

      describe("The Go Back button", () => {
        beforeEach(() => {
          cy.visit("/");
        });

        it("should navigate from home page to movie details and back", () => {
          cy.get(".card").eq(1).find("img").click();
          cy.get("svg[data-icon=arrow-circle-left]").click();
          cy.url().should("not.include", `/movies`);
          cy.get("h2").contains("Discover Movies");
        });

        it("should navigate from favorites page to movie details and back", () => {
            cy.get(".card").eq(0).find("button").click();
            cy.get("button").contains("Movies").get("#dropdown-split-basic").click().get(".dropdown-item").contains("Favorites").click();
            cy.get(".card").eq(0).find("img").click();
            cy.get("svg[data-icon=arrow-circle-left]").click();
            cy.url().should("include", `/movies/favorites`);
            cy.get("h2").contains("Favorite Movies");
        });
      });

});