describe('結果ページ上部に表示される要素がシミュレーションのロジックに合致することのテスト', () => {
  it('シミュレーション結果に健康保険のプレートが必ず表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').get('#todo-health-insurance-plate').should('have.text', '健康保険')
  })

    it('シミュレーション結果に年金のプレートが必ず表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').get('#todo-pension-plate').should('have.text', '年金')
  })

    it('自己都合の退職かつ雇用保険の被保険者期間が退職までの2年間で1年以上あれば雇用保険のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 3, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').get('#todo-employment-insurance-plate').should('have.text', '雇用保険')
  })

  it('自己都合の退職かつ雇用保険の被保険者期間が退職までの2年間で1年以上なければ雇用保険のプレートは表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').get('#todo-employment-insurance-plate').should('not.exist')
  })

   it('シミュレーション結果に税金のプレートが必ず表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 1   }));
    cy.visit('/result')
    cy.get('#todo-container').get('#todo-tax-plate').should('have.text', '税金')
  })


     
  })
export { };