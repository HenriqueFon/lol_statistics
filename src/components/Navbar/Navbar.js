import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className = "navbar">
            <Link className = "link" to = "/"> Home </Link>
            <Link className = "link" to = "/champions"> Lista de Campeões </Link>
            <Link className = "link" to = "/classification"> Classificação </Link>
            <Link className = "link" to = "/professional"> Partidas Profissionais </Link>
        </nav>
    )
}

export default Navbar;