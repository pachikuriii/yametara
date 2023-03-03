
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

  it('Q1において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true }));
    cy.visit('/questions/1')
    cy.get('#retirement-date-form').type('2022-5-6')
    cy.get('#retirement-reason-form2').click()
    cy.get('#next-page-button').click()
    cy.window().then(win => {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
       
      cy.wrap(storage).its("retirement_date").should('eq', '2022-05-06')
      cy.wrap(storage).its("retirement_reason").should('eq', 2)
     });
  })
})
export {};