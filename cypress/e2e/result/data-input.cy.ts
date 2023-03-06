describe('入力内容確認のモーダルが回答内容と合致するかテスト', () => {
  it('質問ページ入力した内容が入力内容としてモーダルに表示される', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true, retirement_date: "2022-01-06", retirement_reason: 1, re_employment: 3, age: 1, post_code:'655-0873', family: 2, emp_ins_last_two_years: 2, emp_ins_total: 3, health_ins_last_two_month: 1, health_ins_after_retirement: 1, tax: 2   }));
    cy.visit('/result')
    cy.get('#input-confirmation-button').click()
    cy.get('#retirement-date').should('have.text', '退職予定日：2022年1月6日')
    cy.get('#retirement-reason').should('have.text', '退職事由：自己都合')
    cy.get('#re-employment').should('have.text', '再就職の予定：年内の再就職の予定は未定')
    cy.get('#age').should('have.text', '年齢：30歳未満')
    cy.get('#postcode').should('have.text', '郵便番号：655-0873')
    cy.get('#family').should('have.text', '家族：社会保険の被保険者の家族はいない')
    cy.get('#emp-ins-last-two-years').should('have.text', '過去2年：6ヶ月以上1年未満の加入実績あり')
    cy.get('#emp-ins-total').should('have.text', 'これまで：5年以上10年未満の加入実績あり')
    cy.get('#health-ins-last-two-month').should('have.text', '健康保険：2ヶ月未満の加入実績あり')
    cy.get('#health-ins-after-retirement').should('have.text', '退職後に加入を検討したい健康保険：国民健康保険')
    cy.get('#tax').should('have.text', '退職後の住民税の支払い方法：普通徴収')
  })
})
export { };
