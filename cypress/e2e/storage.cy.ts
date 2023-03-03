
describe('sessionStorageへ値が保存されることのテスト', () => {
  
  it('TOPページのはじめるを押すとsessionStorageへstarted:trueが保存されること', () => {
    cy.visit('/')
    cy.get('#index-start-button').click()
    cy.window().then(win=> {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
      cy.wrap(storage).its("started").should('eq', true)
    }); 
    cy.get('#next-page-button').click()
  })
})
export {};