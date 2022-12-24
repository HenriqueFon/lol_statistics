import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <Link to = "/"> Home </Link>
            <Link to = "/champions"> Lista de Campeões </Link>
            <Link to = "/classification"> Classificação </Link>
        </nav>
    )
}

export default Navbar;