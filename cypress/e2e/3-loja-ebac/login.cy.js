/// <reference types="cypress"/>
const perfil =require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('auria.limabs@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, auria.limabs (não é auria.limabs? Sair)')

    });

    it('Deve exibir uma mensagem de erro ao inserir o usuário inválido', () => {
        cy.get('#username').type('auria@gmail.com')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('auria.limabs@gmail.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail auria.limabs@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer lgin com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, auria.limabs (não é auria.limabs? Sair)')
    });

    it.only('Deve fazer lgin com sucesso usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha,{log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, auria.limabs (não é auria.limabs? Sair)') 
        })
    });


})