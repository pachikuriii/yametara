
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

  it('Q2において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06" }));
    cy.visit('/questions/2')
    cy.get('#re-employment-form3').click()
    cy.get('#next-page-button').click()
    cy.window().then(win => {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
      cy.wrap(storage).its("re_employment").should('eq', 3)
     });
  })

  it('Q3において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06", re_employment: 3 }));
    cy.visit('/questions/3')
    cy.get('#age-form1').click()
    cy.get('#postcode-form').type('6550873')
    cy.get('#next-page-button').click()
    cy.window().then(win => {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
      cy.wrap(storage).its("age").should('eq', 1)
      cy.wrap(storage).its("post_code").should('eq', '655-0873')
     });
  })

  it('Q4において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06", re_employment: 3, age: 1, post_code:'655-0873' }));
    cy.visit('/questions/4')
    cy.get('#family-form1').click()
    cy.get('#next-page-button').click()
    cy.window().then(win => {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
      cy.wrap(storage).its("family").should('eq', 1)
     });
  })
  
  it('Q5において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06", re_employment: 3, age: 1, post_code:'655-0873' }));
    cy.visit('/questions/5')
    cy.get('#emp-ins-last-two-years-form2').click()
    cy.get('#emp-ins-total-form3').click()
    cy.get('#next-page-button').click()
    cy.window().then(win => {
      const storage = JSON.parse(win.sessionStorage.getItem('yametara') || "[]");
      cy.wrap(storage).its("emp_ins_last_two_years").should('eq', 2)
      cy.wrap(storage).its("emp_ins_total").should('eq', 3)
     });
  })
})
export { };
