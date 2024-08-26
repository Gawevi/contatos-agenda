/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('h2').should('have.text', '3 contatos na agenda')
    })

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Hary Potter')
        cy.get('[type="email"]').type('hpotter@gmail.com')
        cy.get('[type="tel"]').type('12345678')
        cy.get('.adicionar').click()
        cy.get('h2').should('have.text', '4 contatos na agenda')
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Harry Potter')
        cy.get('.alterar').click()
        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Harry Potter')
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('h2').should('have.text', '3 contatos na agenda')
    })
})