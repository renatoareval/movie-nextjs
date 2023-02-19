import Card from "../Card"
import styles from './CardList.module.css'

function CardList({ movies }) {

    return (
        <div className={styles.cardList}>
            {movies.map(movie => {
                return <Card
                key={movie.id}
                    title={movie.title}
                    imagem={'https://image.tmdb.org/t/p/w500'+ movie.poster_path} 
                  
                    />
            })}
        </div>
    )
}

export default CardList