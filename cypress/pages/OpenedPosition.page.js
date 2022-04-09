/// <reference types="cypress" />

class OpenedPositionPage {
  Selectors = {
    generalDescriptionSection: () => cy.contains("h2", "General description"),
    requirementsSection: () => cy.contains("h2", "Requirements"),
    responsibilitiesSection: () => cy.contains("h2", "Responsibilities"),
    whatWeOfferSection: () => cy.contains("h2", "What we offer"),
    applyBtn: () => cy.get("[value='Apply']"),
    nameField: () => cy.get("#cf-1"),
    emailField: () => cy.get("#cf-2"),
    mobileField: () => cy.get("#cf-3"),
    uploadCV: () => cy.get("#uploadtextfield"),
    linkedInProfile: () => cy.get("#cf-5"),
    yourMessage: () => cy.get("#cf-6"),
    agreementCheck: () => cy.get("#adConsentChx"),
    formSendBtn: () => cy.get("[type='submit']"),
    formCloseBtn: () => cy.get(".close-form"),
    //Form Validation Messages
    nameRequiredValidationMessage: () => cy.get("#cf-1").siblings("span"),
    emailFormatValidationMessage: () => cy.get("#cf-2").siblings("span"),
    captchaVerificationLeftValidation: () =>
      cy.contains("span", "Please verify that you are not a robot."),
  };

  applyForFormWithInvalidValues() {
    // this.Selectors.nameField().type("");
    this.Selectors.emailField().type("InvalidEmail");
    this.Selectors.mobileField().type("Invalid Mobile Format");
    this.Selectors.mobileField().attachFile("Moaaz Adel -  CV.pdf");
    this.Selectors.agreementCheck().click();
    this.Selectors.formSendBtn().click();
    this.Selectors.formCloseBtn().click();
  }
}

export const openedPositionPage = new OpenedPositionPage();
