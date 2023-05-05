import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/favorites">Favorites</NavLink>
			<NavLink to="/recents">Recents</NavLink>
		</nav>
	);
};

export default Navigation;
