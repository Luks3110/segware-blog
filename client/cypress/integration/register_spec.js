describe('Registrar', () => {
    it('Usuário pode se registrar', () => {
        cy.visit('localhost:3000/register');
        cy.findByRole('textbox',{name: /username/i}).type('testeCypress69');
        cy.findByLabelText(/Password */i, { timeout: 7000 }).type('testeCypress69');
        cy.findByRole('button', {  name: /registrar/i}).click();
        cy.get('.MuiAlert-message').should('contain', 'Usuário registrado com sucesso!');
        
    })
});