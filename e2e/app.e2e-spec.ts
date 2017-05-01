import { FamilyHistoryAppPage } from './app.po';

describe('family-history-app App', () => {
  let page: FamilyHistoryAppPage;

  beforeEach(() => {
    page = new FamilyHistoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
