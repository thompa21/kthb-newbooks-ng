import { NewBooksModule } from './newbooks.module';

describe('NewBooksModule', () => {
  let newbooksModule: NewBooksModule;

  beforeEach(() => {
    newbooksModule = new NewBooksModule();
  });

  it('should create an instance', () => {
    expect(newbooksModule).toBeTruthy();
  });
});
