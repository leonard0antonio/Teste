import { faker } from '@faker-js/faker';

export function generateNewUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    username: faker.internet.username(),
  };
}