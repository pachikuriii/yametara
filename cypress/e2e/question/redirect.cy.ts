describe('直接質問ページへアクセスするとリダイレクトされることのテスト', () => {
  afterEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  it('sessionStorageのstorageKey:yametaraにstarted:trueがセットされていないとTOPページへリダイレクトされる', () => {
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
    cy.window().then((win) => {
      const yametaraStorage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      const motionStorage = JSON.parse(
        win.sessionStorage.getItem('motionController') || '[]',
      );
      cy.wrap(yametaraStorage).its('started').should('not.exist');
      cy.wrap(motionStorage).its('next').should('exist');
    });
    cy.get('#index-start-button').click();
  });

  it('sessionStorageのstorageKey:motionControllerに値がセットされていないとTOPページへリダイレクトされる', () => {
    sessionStorage.setItem('yametara', JSON.stringify({ started: true }));
    cy.visit('/questions/3');
    cy.window().then((win) => {
      const yametaraStorage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      const motionStorage = JSON.parse(
        win.sessionStorage.getItem('motionController') || '[]',
      );
      cy.wrap(yametaraStorage).its('started').should('exist');
      cy.wrap(motionStorage).its('next').should('not.exist');
    });
    cy.get('#index-start-button').click();
  });

  it('sessionStorageのstorageKey:yametaraとmotionControllerに値がセットされているとリダイレクトは効かない', () => {
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
    cy.visit('/questions/3');
    cy.window().then((win) => {
      const yametaraStorage = JSON.parse(
        win.sessionStorage.getItem('yametara') || '[]',
      );
      const motionStorage = JSON.parse(
        win.sessionStorage.getItem('motionController') || '[]',
      );
      cy.wrap(yametaraStorage).its('started').should('exist');
      cy.wrap(motionStorage).its('next').should('exist');
    });
    cy.get('#index-start-button').should('not.exist')
  });

 });
export {};
