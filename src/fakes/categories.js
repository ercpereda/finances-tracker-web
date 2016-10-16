import faker from 'faker';

const categories = [...Array(10)].map(() => {
  const modificationDate = faker.date.recent(50);
  const creationDate = faker.date.past(1, modificationDate);
  
  return {
    id: faker.random.uuid(),
    title: faker.commerce.product(),
    description: faker.lorem.paragraph(),
    parent: null,
    creationDate,
    modificationDate
  }
});

export default categories;
