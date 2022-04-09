/// <reference types="cypress" />

class CompanyPage {
  Selectors = {
    leadershipSection: () => cy.contains("h2", "Leadership"),
    faceBookLink: () =>
      cy
        .get(".musala-icon-facebook")
        .parent()
        .invoke("attr", "target", "_self"),
  };

  checkLeaderShipSection() {
    this.Selectors.leaderipSection().should();
  }

  navigateToMusalaFacebookPage() {
    this.Selectors.faceBookLink().click({ force: true });
    cy.reload();
  }
}

export const companyPage = new CompanyPage();
