import faker from 'faker';
import currency from '../models/currency';
import accountTypes from '../models/account-types';

const modificationDate = faker.date.recent(20);
const creationDate = faker.date.past(1, modificationDate);

export default [
  {
    id: faker.random.uuid(),
    type: faker.random.objectElement(accountTypes, 'key'),
    issuer: faker.name.firstName,
    title: faker.finance.accountName(),
    currency: faker.random.objectElement(currency, 'key'),
    note: faker.lorem.paragraph(),
    amount: faker.finance.amount(),
    creationDate,
    modificationDate
  }
];
