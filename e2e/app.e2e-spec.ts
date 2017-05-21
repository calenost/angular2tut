import { Angular2tutPage } from './app.po';

describe('angular2tut App', () => {
  let page: Angular2tutPage;

  beforeEach(() => {
    page = new Angular2tutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
