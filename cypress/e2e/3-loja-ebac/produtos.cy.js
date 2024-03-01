/// <reference types="cypress"/>
import produtosPages from "../../support/pages.objects/produtos.pages";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPages.visitaUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPages.buscarProdutoLista('Abominable Hoodie')

        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it.only('Deve buscar produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPages.buscarProdutos(produto)
        cy.get('.product_title').should('contain', produto)

    });

    it('Deve visitar a página do produto', () => {

    });

    it('Deve adicionar produto ao carrinho', () => {

    });


});