/* eslint linebreak-style: ["error", "windows"] */
const mockGetAll = jest.fn();
const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();

    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]/api/v1/books', () => {
    test('should return the list books', async () => {
      // arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response);
      // Assert
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
