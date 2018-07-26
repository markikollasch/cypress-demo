describe('demo', () => {
    it('calls a custom command', () => {
        cy.visit('http://localhost:8080/site/example.html');
        cy.fillIn('Value A', 'arbitrary text');
        cy.fillIn('Value B', 'different text');
    });
});
