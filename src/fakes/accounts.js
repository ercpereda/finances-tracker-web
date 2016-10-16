import faker from 'faker';
import currency from '../models/currency';
import accountType from '../models/account-type';

const accounts = [
  {
    type: faker.random.objectElement(accountType, 'key'),
    issuer: faker.name.firstName,
    title: faker.finance.accountName(),
    currency: faker.random.objectElement(currency, 'key'),
    note: faker.lorem.paragraph(),
    amount: faker.finance.amount()
  }
];

export default accounts;
