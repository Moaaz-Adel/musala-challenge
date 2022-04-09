/// <reference types="cypress" />

import { careersPage } from "../pages/Careers.page";
import { joinUsPage } from "../pages/Join-Us.page";
import { landingPage } from "../pages/Landing.page";
import { openedPositionPage } from "../pages/OpenedPosition.page";

describe("Careers Module Tests", () => {
  beforeEach("Navigate to HomePage", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Test Case 3: Should shows validation messages for applying form", () => {
    landingPage.navigateToCareersPage();
    careersPage.navigateToJoinUsPage();
    cy.url().should("eq", "https://www.musala.com/careers/join-us/");
    joinUsPage.selectLocation("Anywhere");
    joinUsPage.selectOpenPosition();
    openedPositionPage.Selectors.generalDescriptionSection().should(
      "be.visible"
    );
    openedPositionPage.Selectors.requirementsSection().should("be.visible");
    openedPositionPage.Selectors.responsibilitiesSection().should("be.visible");
    openedPositionPage.Selectors.whatWeOfferSection().should("be.visible");
    openedPositionPage.Selectors.applyBtn().should("be.visible").click();
    // openedPositionPage.Selectors.applyBtn().click();
    openedPositionPage.applyForFormWithInvalidValues();
    openedPositionPage.Selectors.emailFormatValidationMessage().should(
      "contain.text",
      "The e-mail address entered is invalid."
    );
    openedPositionPage.Selectors.nameRequiredValidationMessage().should(
      "contain.text",
      "The field is required."
    );
    openedPositionPage.Selectors.captchaVerificationLeftValidation().should(
      "be.visible"
    );
  });

  it("Test Case 4: Print in the console the list with available positions by city", () => {
    landingPage.navigateToCareersPage();
    careersPage.navigateToJoinUsPage();
    joinUsPage.Selectors.listOpenedPositions().should("be.visible");
    joinUsPage.listOpenPositionsWithCountry("Sofia");
    joinUsPage.listOpenPositionsWithCountry("Skopje");
    joinUsPage.Selectors.positionTitle().should("be.visible");
  });
});
