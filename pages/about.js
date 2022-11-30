import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(){
      return (
            <div className={styles.about}>
                  <h1>Sobre o projeto</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, 
                        facere nisi architecto adipisci, tempora fugiat corporis aliquid dolores odit 
                        exercitationem dolorum quas tempore, necessitatibus minima odio 
                        cumque. Harum, quam fugit.</p>
                  <Image  src='/images/charizard.png' width='300' height='300' alt="Charizard"/>
            </div>
      )
}