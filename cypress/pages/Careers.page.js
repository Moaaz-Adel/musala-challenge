/// <reference types="cypress" />

export class CareersPage {
  Selectors = {
    checkOurPositionBtn: () => cy.get("[data-alt='Check our open positions']"),
  };

  navigateToJoinUsPage() {
    this.Selectors.checkOurPositionBtn().click();
  }
}

export const careersPage = new CareersPage();
