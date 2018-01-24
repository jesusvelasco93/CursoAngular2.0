import { Ng2httpPage } from './app.po';

describe('ng2http App', function() {
  let page: Ng2httpPage;

  beforeEach(() => {
    page = new Ng2httpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
