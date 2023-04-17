import { RecoilRoot } from 'recoil';
import Button from 'src/components/atoms/button';
import Q1 from 'src/components/organisms/question/q1';
describe('test', () => {
  it('uses custom text for the button label', () => {
    cy.mount(
      <RecoilRoot>
        <Q1></Q1>
      </RecoilRoot>,
    );
  });
});
