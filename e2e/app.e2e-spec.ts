import { AngularOauthPage } from './app.po';

describe('angular-oauth App', function() {
  let page: AngularOauthPage;

  beforeEach(() => {
    page = new AngularOauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
