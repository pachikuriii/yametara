describe('質問ページに表示される選択肢がそれまでの回答のロジックに合致することのテスト', () => {
  it('退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上ある場合、Q7の選択肢に任意継続保険が表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06", re_employment: 3, age: 1, post_code:'655-0873', family: 1, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1  }));
    cy.visit('/questions/7')
    cy.get('#health-ins-after-retirement-form2').should('exist')
  })

  it('退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上ない場合、Q7の選択肢に任意継続保険が表示されない', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-05-06", re_employment: 3, age: 1, post_code:'655-0873', family: 1, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 2  }));
    cy.visit('/questions/7')
    cy.get('#health-ins-after-retirement-form2').should('not.exist')
  })
})
export { };