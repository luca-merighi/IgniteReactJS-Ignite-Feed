import React from 'react'
import { PostType } from './components/Post'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import styles from './styles.module.css'

export default function App() {
    const posts: PostType[] = [
        {
            id: 1,
            author: {
                avatar: 'https://github.com/luca-merighi.png',
                name: 'Luca Merighi',
                role: 'Web Developer'
            },
            content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type: 'link', content: '👉 jane.design/doctorcare'},
            ],
            publishedAt: new Date('2023-05-25 21:00:00')
        },
        {
            id: 2,
            author: {
                avatar: 'https://github.com/maykbrito.png',
                name: 'Mayk Brito',
                role: 'Educator'
            },
            content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
                {type: 'link', content: '👉 jane.design/doctorcare'},
            ],
            publishedAt: new Date('2023-05-26 12:00:00')
        },
    ]
    
    return (
        <React.Fragment>
            <Header />
            
            <main className={styles.wrapper}>
                <Sidebar />
                
                <section>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post} />
                        )
                    })}
                </section>
            </main>
        </React.Fragment>
    )
}