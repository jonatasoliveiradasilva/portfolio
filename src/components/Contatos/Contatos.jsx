import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

import styles from "../../components/Contatos/Contatos.module.scss";

function Contatos() {
    return (
        <section className={styles.container}>
            <div>
                <div className={styles.contatos}>
                    <h3>Vamos conversar?</h3>
                    <p>
                        Entre em contato comigo para falar sobre projetos,
                        freelas ou oportunidades como desenvolvedor front end jr
                    </p>
                    <span>Celular</span>
                    <p>+55 (11) 9 6023-9336</p>
                    <span>E-mails</span>
                    <a
                        className={styles.email}
                        href="mailto:oliveirajonatas@outlook.com.br">
                        oliveirajonatas@outlook.com.br
                    </a>
                    <a
                        className={styles.email}
                        href="mailto:oliveirajonatassilva@gmail.com">
                        oliveirajonatassilva@gmail.com
                    </a>
                    <div>
                        <a
                            href="https://github.com/jonatasoliveiradasilva"
                            target="_blank"
                        >
                            <img
                                className={styles.github}
                                src={Github}
                                alt="Logo Github"
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/jonatasoliveiradasilva"
                            target="_blank"
                        >
                            <img
                                className={styles.linkedin}
                                src={LinkedIn}
                                alt="Logo LinkedIn"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contatos;
