describe('質問ページに表示される選択肢がそれまでの回答のロジックに合致することのテスト', () => {
  beforeEach(function(){
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
  });
  
  it('退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上ある場合、Q7の選択肢に任意継続保険が表示される', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 1,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 1,
      }),
    );
    cy.visit('/questions/7');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form2')
      .should('have.text', '任意継続');
  });

  it('退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上ない場合、Q7の選択肢に任意継続保険が表示されない', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 1,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
      }),
    );
    cy.visit('/questions/7');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form2')
      .should('not.have.text', '任意継続');
  });

  it('家計を共にしている社会保険の被保険者の家族がいる場合、Q7の選択肢に家族の健康保険が表示される', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        retirement_reason: 1,
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 1,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
      }),
    );
    cy.visit('/questions/7');
    cy.get('#answer-options')
      .should('be.visible')
      .get('#health-ins-after-retirement-form2')
      .should('have.text', '家族の健康保険');
  });

  it('家計を共にしている社会保険の被保険者の家族がいない場合、Q7の選択肢に家族の健康保険は表示されない', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 2,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
      }),
    );
    cy.visit('/questions/7');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form2')
      .should('not.exist');
  });

  it('退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上なく、家計を共にしている社会保険の被保険者の家族もいない場合、Q7の選択肢は国民健康保険のみ', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 2,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
      }),
    );
    cy.visit('/questions/7');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form1')
      .should('have.text', '国民健康保険');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form2')
      .should('not.exist');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#health-ins-after-retirement-form3')
      .should('not.exist');
  });

  it('退職月が6-12月の場合、Q8の選択肢に普通徴収の選択肢が表示されるように', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-06-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 2,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
        health_ins_after_retirement: 1,
      }),
    );
    cy.visit('/questions/8');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#tax-form2')
      .should('have.text', '普通徴収');
  });

  it('退職月が1-5月の場合、Q8の選択肢に普通徴収の選択肢が表示されないように', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-01-06',
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
        family: 2,
        emp_ins_last_two_years: 2,
        emp_ins_total: 3,
        health_ins_last_two_month: 2,
        health_ins_after_retirement: 1,
      }),
    );
    cy.visit('/questions/8');
    cy.get('#answer-options')
      .should('be.visible')
      .find('#tax-form2')
      .should('not.have.text', '普通徴収');
  });
});
export {};
