import { faker } from '@faker-js/faker';

export function generateNewUser() {
  return {
    // Gera um nome de usuário único (ex: Leonardo321)
    usuario: `${faker.person.firstName()}${faker.number.int({ min: 100, max: 999 })}`,
    // Gera uma senha alfanumérica simples
    senha: faker.internet.password({ length: 8, memorable: true }),
    // Gera o nome completo do usuário (ex: Leonardo Antonio)
    nomeUsuario: `${faker.person.firstName()} ${faker.person.lastName()}`,
  };
}