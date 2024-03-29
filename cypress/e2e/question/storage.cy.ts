describe('sessionStorageへ値が保存されることのテスト', () => {
  afterEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  it('TOPページのはじめるを押すとsessionStorageへkeyのyametara, motionControllerが保存されること', () => {
    cy.visit('/');
    cy.get('#index-start-button').click();
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      const motionController = JSON.parse(
        win.sessionStorage.getItem('motionController') || '[]',
      );
      cy.wrap(storage).its('started').should('eq', true);
      cy.wrap(motionController).its('next').should('eq', true);
      cy.wrap(motionController).its('back').should('eq', false);
    });
  });

  it('Q1において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true }));
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/1');
    cy.get('#retirement-date-form').type('2022-5-6');
    cy.get('#retirement-reason-form1').click();
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', '退職後の予定について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('retirement_date').should('eq', '2022-05-06');
      cy.wrap(storage).its('retirement_reason').should('eq', 1);
    });
  });

  it('Q2において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        retirement_reason: 1,
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/2');
    cy.get('#re-employment-form3').click();
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', 'あなたについて');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('re_employment').should('eq', 3);
    });
  });

  it('Q3において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        retirement_reason: 1,
        re_employment: 3,
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/3');
    cy.get('select').select('30歳未満')
    cy.get('#postcode-form').type('6550873');
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', 'あなたの家族について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('age').should('eq', 1);
      cy.wrap(storage).its('post_code').should('eq', '655-0873');
    });
  });

  it('Q4において回答内容がsessionStorageへ保存されること', () => {
    sessionStorage.setItem(
      'yametara',
      JSON.stringify({
        started: true,
        retirement_date: '2022-05-06',
        retirement_reason: 1,
        re_employment: 3,
        age: 1,
        post_code: '655-0873',
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/4');
    cy.get('#family-form1').click();
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', '雇用保険について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('family').should('eq', 1);
    });
  });

  it('Q5において回答内容がsessionStorageへ保存されること', () => {
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
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/5');
    cy.get('#emp-ins-last-two-years-form2').click();
    cy.get('select').select('5年以上10年未満')
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', '健康保険について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('emp_ins_last_two_years').should('eq', 2);
      cy.wrap(storage).its('emp_ins_total').should('eq', 3);
    });
  });

  it('Q6において回答内容がsessionStorageへ保存されること', () => {
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
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/6');
    cy.get('#health-ins-last-two-month-form1').click();
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', '健康保険について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('health_ins_last_two_month').should('eq', 1);
    });
  });

  it('Q7において回答内容がsessionStorageへ保存されること', () => {
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
        health_ins_last_two_month: 1,
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/7');
    cy.get('#health-ins-after-retirement-form1').click();
    cy.get('#next-page-button').click();
     cy.get('h1').should('have.text', '住民税について');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('health_ins_after_retirement').should('eq', 1);
    });
  });

  it('Q8において回答内容がsessionStorageへ保存されること', () => {
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
        health_ins_last_two_month: 1,
        health_ins_after_retirement: 1,
      }),
    );
    sessionStorage.setItem(
      'motionController',
      JSON.stringify({
        next: true,
        back: false,
        initial: '100%',
        exit: '-100%',
      }),
    );
    cy.visit('/questions/8');
    cy.get('#tax-form1').click();
    cy.get('#next-page-button').click();
    cy.get('h1').should('have.text', 'シミュレーション結果');
    cy.window().then((win) => {
      const storage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      cy.wrap(storage).its('tax').should('eq', 1);
    });
  });
 });
export {};
