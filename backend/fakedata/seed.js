import "../config/config.js";
import { faker } from "@faker-js/faker";
import { getDB } from "../util/db.js";

const db = await getDB();

let contacts = [];

for (let i = 0; i < 100; i++) {
	const contact = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		birthday: faker.date.birthdate({ min: 1950, max: 2000, mode: "year" }),
		mobile: faker.phone.number(),
		email: faker.internet.email(),
		adress: faker.address.streetAddress(true),
	};
	contacts.push(contact);
}

const result = await db.collection("contacts").insertMany(contacts);
console.log(result);
process.exit();
