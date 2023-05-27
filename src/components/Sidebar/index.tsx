import {PencilLine} from 'phosphor-react'

import Avatar from '../Avatar'

import styles from './styles.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            className={styles.coverImg} />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/luca-merighi.png" />
                
                <strong>Luca Merighi</strong>
                
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}