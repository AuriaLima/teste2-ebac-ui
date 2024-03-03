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

    it('Deve buscar produto com sucesso', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPages.buscarProdutos(produto)
        cy.get('.product_title').should('contain', produto)

    });

    it('Deve visitar a página do produto', () => {
        produtosPages.visitarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')


    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 1
        produtosPages.buscarProdutos('Hero Hoodie')
        produtosPages.addProdutoCarrinho('M', 'Black', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' x “Hero Hoodie” foi adicionado no seu carrinho.')

    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
    
        produtosPages.buscarProdutos(dados[1].nomeProduto)
        produtosPages.addProdutoCarrinho(
            dados[1].tamanho, 
            dados[1].cor, 
            dados[1].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
})
})