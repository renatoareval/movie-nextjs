import styles from './Card.module.css'
import Botao from '../Botao/index'

export default function Card({ title, imagem,}) {

    return (

        <div className={styles.card}>
            <ul className={styles.card_listas}>
                <li><img className={styles.card_imagem} src={imagem} alt={imagem.id} /></li>
                <li><span className={styles.card_title}>{title}</span></li>
            </ul>
            <Botao/>

        </div>


    )
}