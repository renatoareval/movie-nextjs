import Image from 'next/image'
import styles from './Header.module.css'
import { BiCameraMovie } from 'react-icons/bi';
import Input from '../Input/index'

export default function Header(){
    return(
        <header className={styles.header}>
            
            <h1 className={styles.header_title}> <BiCameraMovie className={styles.header_logo} size={40} color={'yellow'} />Movies</h1>
            <Input/>
        </header>
    )
}