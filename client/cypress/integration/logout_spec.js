describe('Logout', () => {
    it('Quando clicar o botão de logout, o usuário deve voltar à página de login e não pode acessar o Feed', () => {
        cy.visit('localhost:3000/login');
        cy.findByRole('textbox', {  name: /username/i}).type('testeCypress69');
        cy.findByLabelText(/Password */i, { timeout: 7000 }).type('testeCypress69');
        cy.findByRole('button', {  name: /entrar/i}).click();
        cy.get(':nth-child(1) > .MuiCardContent-root').should('be.visible');
        cy.findByRole('button', {  name: /logout/i}).click();
        cy.visit('localhost:3000/');
        cy.findByRole('heading', {  name: /sign in/i}).should('be.visible');
    })
});