/// <reference types="cypress" />

import { landingPage } from "../pages/Landing.page";
import { emails } from "../fixtures/emails.json";

describe("Contact Form Tests", () => {
  before(() => {
    cy.fixture("emails.json").as("emails");
  });
  beforeEach("Visit Musala HomePage", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  context("Multiple Tests", () => {
    for (let email in emails) {
      it(`Test Case 1: Should shows error message when providing ${email.toUpperCase()}`, () => {
        landingPage.fillInContactUsForm(emails[email]);
        landingPage.Selectors.getEmailValidationMessage().should("be.visible");
      });
    }
  });
});
