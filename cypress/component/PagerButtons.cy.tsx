import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';
import PagerButtons from 'src/components/molecules/pager-buttons';

const createRouter = () => ({
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/questions/2',
  basePath: '',
  back: cy.spy().as('back'),
  beforePopState: cy.spy().as('beforePopState'),
  forward: cy.spy().as('forward'),
  prefetch: cy.stub().as('prefetch').resolves(),
  push: cy.spy().as('push'),
  reload: cy.spy().as('reload'),
  replace: cy.spy().as('replace'),
  events: {
    emit: cy.spy().as('emit'),
    off: cy.spy().as('off'),
    on: cy.spy().as('on'),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'ja',
  domainLocales: [],
  isPreview: false,
});

describe('<PagerButtons>', () => {
  it('isValid={true}の時は次へボタンが動作する', () => {
    const router = createRouter();
    const handleSubmit = cy.stub().as('handleSubmit');
    cy.mount(
      <RouterContext.Provider value={router}>
        <RecoilRoot>
          <PagerButtons
            handleSubmit={handleSubmit}
            isValid={true}
          ></PagerButtons>
        </RecoilRoot>
      </RouterContext.Provider>,
    );
    cy.contains('次へ')
      .click()
      .then(() => {
        expect(handleSubmit).to.be.calledOnce;
        expect(router.push).to.be.calledOnceWith('/questions/3');
      });
  });

  it('isValid={false}の時は次へボタンは動作しない', () => {
    const router = createRouter();
    const handleSubmit = cy.stub().as('handleSubmit');
    cy.mount(
      <RouterContext.Provider value={router}>
        <RecoilRoot>
          <PagerButtons
            handleSubmit={handleSubmit}
            isValid={false}
          ></PagerButtons>
        </RecoilRoot>
      </RouterContext.Provider>,
    );
    cy.contains('次へ')
      .click({ force: true })
      .then(() => {
        expect(handleSubmit).to.be.calledOnce;
        expect(router.push).not.to.be.calledOnceWith('/questions/3');
      });
  });

  it('isValid={false}の時も戻るボタンは動作する', () => {
    const router = createRouter();
    const handleSubmit = cy.stub().as('handleSubmit');
    cy.mount(
      <RouterContext.Provider value={router}>
        <RecoilRoot>
          <PagerButtons
            handleSubmit={handleSubmit}
            isValid={false}
          ></PagerButtons>
        </RecoilRoot>
      </RouterContext.Provider>,
    );
    cy.contains('戻る')
      .click()
      .then(() => {
        expect(router.push).to.be.calledOnceWith('/questions/1');
      });
  });
});
