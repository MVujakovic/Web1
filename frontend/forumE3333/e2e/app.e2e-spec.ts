import { ForumE3333Page } from './app.po';

describe('forum-e3333 App', () => {
  let page: ForumE3333Page;

  beforeEach(() => {
    page = new ForumE3333Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
