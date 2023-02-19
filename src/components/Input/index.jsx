import styles from './Input.module.css'
import { MdSearch } from 'react-icons/md';


function Input() {
    return (
        <>
            <div className={styles.caixa_input}>
                <MdSearch className={styles.icone_input} color={'#f2f2f2'} size={'30px'} />
                <input type="text" placeholder='Busque um filme' className={styles.input} />
            </div>

        </>
    )
}

export default Input