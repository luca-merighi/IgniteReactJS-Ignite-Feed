import styles from './styles.module.css'

interface AvatarProps {
    hasBorder?: boolean,
    src: string,
    alt?: string
}

export default function Avatar({src, hasBorder = true, alt}: AvatarProps) {
    return (
        <img 
            src={src} 
            alt={alt} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
    )
}