import { WebsitePipe } from './website.pipe';

describe('WebsitePipe', () => {
  let webSitePipe: WebsitePipe

  beforeEach(() => {
    webSitePipe = new WebsitePipe
  })

  test('create an instance', () => {
    const pipe = new WebsitePipe();
    expect(pipe).toBeTruthy();
  });

  test('Que tenga Http en la url', () => {
    const response = webSitePipe.transform("google.com")
    expect(response).toBe("https://google.com")
  })

});
