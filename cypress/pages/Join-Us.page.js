/// <reference types="cypress" />

class JoinUsPage {
  Selectors = {
    checkOurPositionBtn: () => cy.get("#get_location"),
    openPositionSelection: () => cy.contains("h2", "Automation QA Engineer"),
    listOpenedPositions: () => cy.get("article"),
    positionTitle: () => cy.get("article a"),
  };

  selectLocation(locationText) {
    this.Selectors.checkOurPositionBtn().select(locationText);
  }

  selectOpenPosition() {
    this.Selectors.openPositionSelection().click();
  }

  listOpenPositionsWithCountry(country) {
    this.selectLocation(country);
    console.log(`Country: ${country}`);
    this.Selectors.listOpenedPositions().each((position) => {
      cy.wrap(position)
        .find("a")
        .invoke("attr", "href")
        .then((link) => {
          console.log(`
            -------------------------------\n
            "Position:" ${position.find("h2").text()},
            "More info: ${link}
            -------------------------------\n
            `);
        });
    });
  }
}

export const joinUsPage = new JoinUsPage();
