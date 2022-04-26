import { faker } from "@faker-js/faker";
import { User } from "../../../src/models";

const apiUsers = `${Cypress.env("apiUrl")}/users`;

type TestUserCtx = {
  authenticatedUser?: User;
  searchUser?: User;
};

describe("Users API", function () {
  let ctx: TestUserCtx = {};

  beforeEach(function () {
    cy.task("db:seed");

    cy.database("filter", "users").then((users: User[]) => {
      ctx.authenticatedUser = users[0];
      ctx.searchUser = users[1];

      return cy.loginByApi(ctx.authenticatedUser.username);
    });
  });

  context("GET /users", function () {
    // status of 200
    // results > 1
    it("gets a list of users", function () {

    });
  });
});
