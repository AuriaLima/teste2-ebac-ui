/// <reference types="cypress"/>

describe('', () => {
    
});

beforeEach(() => {
    cy.visit('minha-conta/edit-account')
    cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha)
    })
    cy.login('auria.limabs@gmail.com', 'teste@123')
});

it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Auria', 'Lima','auria.qa')
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
});