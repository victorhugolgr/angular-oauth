import { browser, element, by } from 'protractor';

export class AngularOauthPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
