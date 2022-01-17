describe('Recuperação de senha', () => {
    it('Acessar a rota de recuperação de senha e recuperar senha', () => {
        cy.visit('localhost:3000/login');
        cy.findByRole('heading', {  name: /sign in/i}).should('be.visible');
        cy.findByRole('link', {  name: /esqueceu a senha\?/i}).click();
        cy.findByRole('heading', {  name: /recupere a senha/i}).should('be.visible');
        cy.getByRole('textbox', {  name: /username/i}).type('testeCypress69');
        cy.findByRole('button', {  name: /recuperar/i}).click();
        cy.getByText(/senha recuperada com sucesso!/i).should('be.visible');
    })
});