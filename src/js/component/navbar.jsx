import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	console.log(store.favoritos)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				 <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"  className="card-img-top " alt="..."style={{width: "180px"}}/>
			</Link>
			<div className="ml-auto">
							
				<div className="btn-group">
						<button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">	Favoritos</button>

						<ul className="dropdown-menu">{store.favoritos.map((item)=>(<li key={item}>{item}<button className="btn" onClick={()=>actions.borrarFavorito(item)}></button> <i className="fas fa-trash-alt"/></li>))}</ul>
				</div>
			</div>
		</nav>
	);
};