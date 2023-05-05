import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../contactlist/ContactList";

const Home = () => {
	const [contactList, setContactList] = useState();

	useEffect(() => {
		fetch("http://localhost:9000/api/v1/contacts")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setContactList(data);
			});
	}, []);

	return (
		<main>
			<h2>Kontaktliste</h2>
			<section className="contactList">
				{contactList &&
					contactList.map((contact) => {
						return <ContactList key={uuidv4()} contact={contact} />;
					})}
			</section>
		</main>
	);
};

export default Home;
