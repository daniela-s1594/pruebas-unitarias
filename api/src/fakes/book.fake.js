/* eslint-disable no-unused-vars */
const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const FakeBooks = [];
  for (let index = 0; index < limit; index += 1) {
    FakeBooks.push(generateOneBook());
  }
  return [...FakeBooks];
};

module.exports = {
  generateOneBook,
  generateManyBooks,
};
