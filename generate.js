// generate.js
const faker = require('faker');

module.exports = () => ({
  messages: [...Array(30)].map((value, index) => ({
    id: index + 1,
    name: faker.hacker.noun(),
    status: faker.hacker.adjective(),
    description: faker.hacker.phrase(),
    image: faker.image.image(),

  })),
});
