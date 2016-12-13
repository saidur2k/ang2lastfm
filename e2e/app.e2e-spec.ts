import { LastfmappPage } from './app.po';

describe('lastfmapp App', function() {
  let page: LastfmappPage;

  beforeEach(() => {
    page = new LastfmappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
