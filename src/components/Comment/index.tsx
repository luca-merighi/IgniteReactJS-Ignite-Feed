import { useState } from 'react'
import {Trash, ThumbsUp} from 'phosphor-react'

import Avatar from '../Avatar'

import styles from './styles.module.css'

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export default function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    
    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    
    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/luca-merighi.png"
                hasBorder={false}
                alt="Foto de Perfil do Usuário" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luca Merighi</strong>
                
                            <time title="25 de Maio às 13:25" dateTime="2023-05-11 00:13:30">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        
                        <button 
                            type="button"
                            title="Deletar comentário"
                            onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>
                        {content}
                    </p>
                </div>
                
                <footer>
                    <button 
                        type="button"
                        onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}