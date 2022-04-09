/// <reference types="cypress" />

import { companyPage } from "../pages/Company.page";
import { landingPage } from "../pages/Landing.page";
import { musalaFacebookPage } from "../pages/MusalaFacebook.page";

describe("Company Module Tests", () => {
  beforeEach("Navigate to HomePage", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Test Case 2: Should load /company url", () => {
    landingPage.navigateToCompanyPage();
    cy.url().should("eq", "https://www.musala.com/company/");
    companyPage.Selectors.leadershipSection().should("be.visible");
    companyPage.navigateToMusalaFacebookPage();
    cy.url().should("eq", "https://www.facebook.com/MusalaSoft?fref=ts");
    musalaFacebookPage.validateMusalaProfilePicture();
  });
});
