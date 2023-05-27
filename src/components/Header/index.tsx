import styles from './styles.module.css'

import igniteLogo from '/logo.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <img 
            src={igniteLogo} 
            alt="Logo Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}