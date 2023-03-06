describe('結果ページ下部の手続き詳細部分に表示される要素がシミュレーションのロジックに合致することのテスト', () => {
  it('Q7で国保の加入の検討を選択した場合、国民健康保険への加入手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code: '655-0873', family: 2, emp_ins_last_two_years: 3, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2 }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-health-insurance-plate').should('have.text', '健康保険')
    cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '国民健康保険への加入手続き')
    })

  it('Q7で任意継続の検討を選択した場合、任意継続被保険者となる手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 2, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-health-insurance-plate').should('have.text', '健康保険')
    cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '任意継続被保険者になる手続き')
  })

  it('退職予定日までに2ヶ月以上の健康保険の被保険者期間がないのにQ7で任意継続の検討を選択した場合、任意継続被保険者となる手続きのための詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 2, health_ins_after_retirement: 2, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-health-insurance-plate').should('have.text', '健康保険')
    cy.get('#health-insurance').should('be.visible').find('h5').should('not.exist')
  })

  it('Q7で被扶養者になることの検討を選択した場合、被扶養者となる手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 1, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 3, tax: 2   }));
    cy.visit('/result')
    cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '被扶養者になる手続き')
  })

  it('生計を共にしている家族がいないのにQ7で被扶養者になることの検討を選択した場合、被扶養者となる手続きのための詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 3, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-health-insurance-plate').should('have.text', '健康保険')
    cy.get('#health-insurance').should('be.visible').find('h5').should('not.exist')
  })

  it('国民年金への加入手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 3, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-pension-plate').should('have.text', '年金')
    cy.get('#pension').should('be.visible').find('h5').should('have.text', '国民年金への加入手続き')
  })

  it('自己都合の退職かつ退職予定日までの合計で1年以上の雇用保険の被保険者期間がある場合、雇用保険の失業給付の受給手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 3, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('have.text', '雇用保険')
    cy.get('#employment-insurance').should('be.visible').find('h5').should('have.text', '雇用保険の失業給付の受給手続き')
  })

  it('自己都合の退職かつ退職予定日までの合計で1年以上の雇用保険の被保険者期間がない場合、雇用保険の失業給付の受給手続きのための詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('not.exist')
    cy.get('#employment-insurance').should('not.exist')
  })

  it('会社都合の退職かつ退職予定日までの合計で半年以上の雇用保険の被保険者期間がある場合、雇用保険の失業給付の受給手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 2, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('have.text', '雇用保険')
    cy.get('#employment-insurance').should('be.visible').find('h5').should('have.text', '雇用保険の失業給付の受給手続き')
  })

  it('会社都合の退職かつ退職予定日までの合計で半年以上の雇用保険の被保険者期間がない場合、雇用保険の失業給付の受給手続きのための詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 2, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('not.exist')
    cy.get('#employment-insurance').should('not.exist')
  })

  it('その他の都合の退職かつ退職予定日までの合計で半年以上の雇用保険の被保険者期間がある場合、雇用保険の失業給付の受給手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('have.text', '雇用保険')
    cy.get('#employment-insurance').should('be.visible').find('h5').should('have.text', '雇用保険の失業給付の受給手続き')
  })

  it('その他の都合の退職かつ退職予定日までの合計で半年以上の雇用保険の被保険者期間がない場合、雇用保険の失業給付の受給手続きのための詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-employment-insurance-plate').should('not.exist')
    cy.get('#employment-insurance').should('not.exist')
  })

  it('再就職の予定がなく、住民税を普通徴収で納める場合は税金の詳細として住民税の支払いと所得税の還付申請が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 2, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('have.text', '税金')
    cy.get('#tax').should('be.visible').find('#resident-tax').find('h5').should('have.text', '住民税の支払い')
    cy.get('#tax').should('be.visible').find('#income-tax').find('h5').should('have.text', '所得税の還付申請')
   })

  it('再就職の予定がなく、住民税を普通徴収以外の方法で納める場合は所得税の還付申請のみが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 1, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 1 }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('have.text', '税金')
    cy.get('#tax').should('be.visible').find('#resident-tax').should('not.exist')
    cy.get('#tax').should('be.visible').find('#income-tax').find('h5').should('have.text', '所得税の還付申請')
  })

  it('再就職の予定があり、住民税を普通徴収で納める場合は税金の詳細として住民税の支払いのみが表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 1, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('have.text', '税金')
    cy.get('#tax').should('be.visible').find('#resident-tax').find('h5').should('have.text', '住民税の支払い')
    cy.get('#tax').find('#income-tax').should('not.exist')
  })

  it('再就職の予定があり、かつ住民税を普通徴収以外の方法で納める場合は税金の詳細は表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", retirement_reason: 3, re_employment: 1, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 1, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 1   }));
    cy.visit('/result')
    cy.get('#todo-container').find('#todo-tax-plate').should('not.exist')
    cy.get('#tax').should('not.exist')
  })
})
  export { };