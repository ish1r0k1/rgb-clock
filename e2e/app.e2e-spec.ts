import { ColorClockPage } from './app.po';

describe('color-clock App', () => {
  let page: ColorClockPage;

  beforeEach(() => {
    page = new ColorClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
