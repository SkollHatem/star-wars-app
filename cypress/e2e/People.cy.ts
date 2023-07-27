describe("template spec", () => {
  it("passes", () => {
    cy.viewport(360, 740);
    cy.visit("/");
    cy.contains("people").click();
    cy.wait(10000);
    cy.get("#logo").click();
    cy.wait(2000);
    cy.contains("people").click();
    // cy.scrollTo(0, 1000);
    cy.get("#next").click();
    // cy.scrollTo(0, 0);
    cy.wait(2000);
    cy.get("#prev").click();
    // cy.scrollTo(0, 0);
    cy.get("#people-1").click();
  });
});
