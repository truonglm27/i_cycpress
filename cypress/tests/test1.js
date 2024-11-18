describe('Element contact', () => {
    it("test form", () => {
        cy.get("#passcode").type
        cy.wait(3000)
    });
});