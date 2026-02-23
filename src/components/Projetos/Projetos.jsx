import { useState } from "react";

import VerdeAcao from "../../../src/assets/verde-acao.png";
import ReciclaTech from "../../../src/assets/recicla-tech.png";
import PetAdopt from "../../../src/assets/pet-adopt.png";

import styles from "../Projetos/Projetos.module.scss";

function Projetos() {

    const [projetos] = useState([
        {
            id: 1,
            imagem: VerdeAcao,
            nome: "Verde Ação",
            descricao: "Projeto Verde Ação",
        },
        {
            id: 2,
            imagem: ReciclaTech,
            nome: "Recicla Tech",
            descricao: "Projeto Recicla Tech",
        },
        {
            id: 3,
            imagem: PetAdopt,
            nome: "Pet Adopt",
            descricao: "Projeto Pet Adopt",
        },
    ]);

    return (
        <section className={styles.container}>
            {
                projetos.map((item) => (
                    <article key={item.id}>
                        <img
                            className={styles.imagem}
                            src={item.imagem}
                            alt={item.descricao}
                            title={item.nome}
                        />
                    </article>
                ))
            }
        </section>
    );
}

export default Projetos;
