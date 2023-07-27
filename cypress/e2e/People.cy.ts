describe("template spec", () => {
  it("passes", () => {
    cy.viewport(360, 740);
    cy.visit("/");
    cy.contains("people").click();
    cy.wait(20000);
    cy.get("#logo").click();
    cy.wait(20000);
    cy.contains("people").click();
    cy.get("#people-1").click();
  });
});
