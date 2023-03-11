describe('結果ページ上部に表示される要素がシミュレーションのロジックに合致することのテスト', () => {
  it('Q1で入力した退職予定日が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-retirement-date').should('have.text', '2022年1月6日に会社を辞めたら以下についての手続きが必要です。')
  })
 
  it('健康保険のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-health-insurance-plate').should('have.text', '健康保険')
  })

  it('年金のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-pension-plate').should('have.text', '年金')
  })

  it('自己都合の退職かつ雇用保険の被保険者期間が退職までの2年間で1年以上あれば雇用保険のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 3, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('have.text', '雇用保険')
  })

  it('自己都合の退職かつ雇用保険の被保険者期間が退職までの2年間で1年以上なければ雇用保険のプレートは表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('not.exist')
  })

  it('再就職の予定がない場合は税金のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 1   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('have.text', '税金')
  })
  
  it('住民税を普通徴収で納める場合は税金のプレートが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 2, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('have.text', '税金')
  })

  it('再就職の予定があり、かつ住民税を普通徴収以外の方法で納める場合は税金のプレートが表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 2, re_employment: 1, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 3   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('not.exist')
  })
})
export { };