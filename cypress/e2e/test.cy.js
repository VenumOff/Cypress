describe("Test e2e - Page de connection", () => {
    it("Vérifier que l'input peut être rempli par l'utilisateur", () => {
        cy.visit("http://localhost:5500");
        cy.get("input").type("Mathias");
        cy.get("button").click();
        cy.get("div").should("contain", "Bienvenue, Mathias!");
    });
    it("Vérifie que le message d'erreur n'apparaît pas si le nom n'est pas entré", () => {
        cy.visit("http://localhost:5500");
        cy.get("input").clear();
        cy.get("button").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("Veuillez entrer votre nom.");
        });
    });
    it("Vérifier que le champs est bien vide après soumission", () => {
        cy.visit("http://localhost:5500");
        cy.get("input").type("Texte à effacer");
        cy.get("button").click();
        cy.get("input").should("have.value", "");
        cy.get("div").should("contain", "");
    });
});
