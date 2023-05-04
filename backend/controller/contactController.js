import { getDB } from "../util/db.js";
const COL = "contacts";

export const getContacts = async (_, res) => {
	try {
		const db = await getDB();
		const result = await db.collection(COL).find().toArray();
		res.json(result);
	} catch (err) {
		res.status(500).end();
	}
};

export const addNewContact = async (req, res) => {
	try {
		const db = await getDB();
		const result = await db.collection(COL).insertOne(req.body);
		res.json(result);
	} catch (err) {
		res.status(500).end();
	}
};
