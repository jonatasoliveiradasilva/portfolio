import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../../components/Inicio/Inicio";
import Projetos from "../../components/Projetos/Projetos";
import Contatos from "../../components/Contatos/Contatos";

import styles from "../../components/Navbar/Navbar.module.scss";

function Navbar() {
    return (
        <BrowserRouter>
            <nav className={styles.navegacao}>
                <ul>
                    <li>
                        <Link
                            className={styles.link}
                            to="/">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to="/projetos">
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.link}
                            to="/contatos">
                            Contatos
                        </Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contatos" element={<Contatos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
