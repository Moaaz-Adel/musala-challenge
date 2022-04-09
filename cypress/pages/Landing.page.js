/// <reference types="cypress" />

import { careersPage } from "./Careers.page";

const { faker } = require("@faker-js/faker");

class LandingPage {
  Selectors = {
    contactUsBtn: () => cy.get("[data-alt='Contact us']"),
    contactUsFormNameField: () => cy.get("#cf-1"),
    contactUsFormEmailField: () => cy.get("#cf-2"),
    contactUsFormMobileField: () => cy.get("#cf-3"),
    contactUsFormSubjectField: () => cy.get("#cf-4"),
    contactUsFormYourMessageField: () => cy.get("#cf-5"),
    contactUsFormSubmitBtn: () => cy.get("[type='submit']"),
    getEmailValidationMessage: () =>
      cy.contains("span", "The e-mail address entered is invalid."),
    contactUsFormRecaptchaCheck: () =>
      cy.getIframeBody().find("#recaptcha-anchor"),

    //Company Module
    companyBtn: () => cy.contains("a", "Company"),
    //Careers Module
    careersBtn: () => cy.contains("a", "Careers"),
  };

  randomName = faker.name.findName();
  randomMobile = faker.phone.phoneNumber();
  randomSubject = faker.lorem.words(5);
  randomMessage = faker.lorem.sentences(2);

  fillInContactUsForm(emailText) {
    this.Selectors.contactUsBtn().click();
    this.Selectors.contactUsFormNameField().type(this.randomName);
    this.Selectors.contactUsFormEmailField().type(emailText);
    this.Selectors.contactUsFormMobileField().type(this.randomMobile);
    this.Selectors.contactUsFormSubjectField().type(this.randomSubject);
    this.Selectors.contactUsFormYourMessageField().type(this.randomMessage);
    // this.Selectors.contactUsFormRecaptchaCheck().click();
    this.Selectors.contactUsFormSubmitBtn().click();
  }

  navigateToCompanyPage() {
    this.Selectors.companyBtn().click({ force: true });
  }
  navigateToCareersPage() {
    this.Selectors.careersBtn().click({ force: true });
  }
}

export const landingPage = new LandingPage();
