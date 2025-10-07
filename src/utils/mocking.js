import { faker } from "@faker-js/faker";
import { createHash } from "./hashPassword.js";

export const generateMockUsers = async (num) => {
  const users = [];
  for (let i = 0; i < num; i++) {
    const hashedPassword = await createHash("coder123");
    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: Math.random() > 0.5 ? "user" : "admin",
      pets: []
    });
  }
  return users;
};

export const generateMockPets = (num) => {
  const pets = [];
  for (let i = 0; i < num; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.animal.petName(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
      adopted: faker.datatype.boolean()
    });
  }
  return pets;
};
