import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/Detail.scss";

function Detail(){
    const [loading, setLoading] = useState(true);
    
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);

    console.log(movie)
    return (
        <div className="detail-wrapper w_1400">
            {
            loading
            ? <div>Loading......:-(</div>
            : <div className="detail-box">
                <div className="txt-box">
                    <h2>{movie.title}</h2>
                    <p>{movie.description_intro}</p>
                    <ul>
                        <li>
                            <span className="info_name">Genres</span>
                            <ul>
                                {movie.genres.map((g, i) => (
                                    <li key={g}>{g}
                                    { i + 1 < movie.genres.length
                                      ? ","
                                      : null
                                    }
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><span className="info_name">Ratings</span>{movie.rating}</li>
                        <li><span className="info_name">Year</span>{movie.year}</li>
                        <li><span className="info_name">Running time</span>{movie.runtime} minutes </li>
                    </ul>
                </div>
                <div className="img-box">
                    <img src={movie.large_cover_image} alt={movie.title}/>
                </div>
            </div>
            }
        </div>
    )
}
export default Detail;