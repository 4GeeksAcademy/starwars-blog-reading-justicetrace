import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="starwars-logo" src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" /></span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorite</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.fav?.map((x, index) => (
							<li key={index} onClick={() => {actions.deleteFav(x)}}><a className="dropdown-item" href="#">{x}</a>🗑️</li>
						))}
						<li></li>
					</ul>
			</div>
		</nav>
	);
};
