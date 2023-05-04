import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';
import Q7 from 'src/components/organisms/question/q7';

const createRouter = () => ({
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
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
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
});

describe('<CategoryPageList>', () => {
  it('Product card click redirects to PDP', () => {
    const router = createRouter();
    cy.mount(
      <RouterContext.Provider value={router}>
        <RecoilRoot>
          <Q7></Q7>
        </RecoilRoot>
      </RouterContext.Provider>,
    );
  });
});
