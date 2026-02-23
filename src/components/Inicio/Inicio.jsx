import FotoPerfil from "../../../src/assets/foto-perfil.jpg";

import styles from "../../components/Inicio/Inicio.module.scss";

function Inicio() {
    return (
        <section className={styles.container}>
            <div className={styles.sobre}>
                <p>Olá, Eu sou o</p>
                <h1>Jônatas Oliveira</h1>
                <h2>Desenvolvedor Front End Jr</h2>
                <p>
                    Crio interfaces modernas, responsivas e focadas na experiência
                    do usuário utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>React</strong>.
                </p>
                <div>
                    <a className={styles.link} href="/projetos">Projetos</a>
                    <a className={styles.link} href="/contatos">Contatos</a>
                </div>
            </div>
            <div>
                <img
                    className={styles.imagem}
                    src={FotoPerfil}
                    alt="Foto de perfil do Jônatas"
                    title="Jônatas"
                />
            </div>
        </section>
    );
}

export default Inicio;
