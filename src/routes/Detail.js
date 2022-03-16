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
            ? <div className="w_1400"><h1>Loading...</h1></div>
            : <div className="detail-box">
                <h2>{movie.title}</h2>
                <div className="txt-box">
                    <p>{movie.description_intro}</p>
                    <div>
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <span className="style-bg-dgray info_name">Genres</span>
                                <ul className="style-bg-dgray">
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
                            <li><span className="style-bg-dgray info_name">Ratings</span><span className="style-bg-dgray">{movie.rating}</span></li>
                            <li><span className="style-bg-dgray info_name">Year</span><span className="style-bg-dgray">{movie.year}</span></li>
                            <li><span className="style-bg-dgray info_name">Running time</span><span className="style-bg-dgray">{movie.runtime} minutes</span></li>
                        </ul>
                    </div>
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