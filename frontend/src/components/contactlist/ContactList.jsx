import { Link } from "react-router-dom";

const ContactList = (contact) => {
	return (
		<Link to={contact.contact._id}>
			{contact.contact.firstName}
			{contact.contact.lastName}
		</Link>
	);
};

export default ContactList;
