const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Text  for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      const FakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(FakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(FakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      const FakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(FakeBooks);
      const books = await service.getBooks({});
      //    console.log(books);
      expect(books[0].name).toEqual(FakeBooks[0].name);
    });
  });
});
