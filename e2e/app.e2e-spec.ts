import { FusionAUTServerPage } from './app.po';

describe('fusion-autserver App', () => {
  let page: FusionAUTServerPage;

  beforeEach(() => {
    page = new FusionAUTServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
