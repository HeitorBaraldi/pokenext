import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
	return (
		<div className={styles.about}>
			<h1>Sobre o projeto</h1>
			<p>
				Projeto criado com NextJs do curso do Professor Matheus Battisti. Utilizamos 2
				Apis, 1 para pegar os dados dos pokemons, e a outra para capturar as imagens.
			</p>
			<Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
		</div>
	);
}
