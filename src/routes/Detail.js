import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMoive = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMoive()
    }, []);

    console.log(movie)
    return (
        <div>
        {loading
        ? <div>Loading......:-(</div>
        : <div>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.description_intro}</p>
            <ul>
                <li>
                    장르
                    <ul>
                        {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </li>
                <li>평점 : {movie.rating}</li>
                <li>개봉년도 : {movie.year}</li>
            </ul>
        </div>
        }
        </div>
    )
}
export default Detail;