describe('結果ページ下部の手続き詳細部分に表示される要素がシミュレーションのロジックに合致することのテスト', () => {
  it('Q7で国保の加入の検討を選択した場合、国民健康保険への加入手続きのための詳細が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", re_employment: 3, age: 1, post_code: '655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2 }));
        cy.visit('/result')
        cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '国民健康保険への加入手続き')
    })

    it('Q7で任意継続の検討を選択した場合、任意継続被保険者となる手続きのための詳細が表示される', () => {
        sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 2, tax: 2   }));
        cy.visit('/result')
        cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '任意継続被保険者になる手続き')
    })

    it('退職予定日までに2ヶ月以上の健康保険の被保険者期間がないのにQ7で任意継続の検討を選択した場合、任意継続被保険者となる手続きのための詳細は表示されない', () => {
        sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 2, health_ins_after_retirement: 2, tax: 2   }));
        cy.visit('/result')
        cy.get('#health-insurance').should('be.visible').find('h5').should('not.exist')
    })

    it('Q7で被扶養者になることの検討を選択した場合、被扶養者となる手続きのための詳細が表示される', () => {
        sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", re_employment: 3, age: 1, post_code:'655-0873', family: 1, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 3, tax: 2   }));
        cy.visit('/result')
        cy.get('#health-insurance').should('be.visible').find('h5').should('have.text', '被扶養者になる手続き')
    })

    it('生計を共にしている家族がいないのにQ7で被扶養者になることの検討を選択した場合、被扶養者となる手続きのための詳細は表示されない', () => {
        sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-04-06", re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 3, tax: 2   }));
        cy.visit('/result')
        cy.get('#health-insurance').should('be.visible').find('h5').should('not.exist')
    })
})
  export { };