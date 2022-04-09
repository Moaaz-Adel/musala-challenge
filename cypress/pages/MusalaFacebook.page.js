/// <reference types = "cypress" />

class MusalaFacebookPage {
  Selectors = {
    musalaProfilePicture: () =>
      cy.get("a[aria-label='Musala Soft profile photo']"),
  };

  validateMusalaProfilePicture() {
    this.Selectors.musalaProfilePicture().compareSnapshot(
      "Musala Facebook Profile Picture",
      0.5
    );
  }
}

export const musalaFacebookPage = new MusalaFacebookPage();
