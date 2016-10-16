import faker from 'faker';
import currency from '../models/currency';
import accountType from '../models/account-type';

const modificationDate = faker.date.recent(20);
const creationDate = faker.date.past(1, modificationDate);

const accounts = [
  {
    id: faker.random.uuid(),
    type: faker.random.objectElement(accountType, 'key'),
    issuer: faker.name.firstName,
    title: faker.finance.accountName(),
    currency: faker.random.objectElement(currency, 'key'),
    note: faker.lorem.paragraph(),
    amount: faker.finance.amount(),
    creationDate,
    modificationDate 
  }
];

export default accounts;
