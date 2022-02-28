import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import MainBanner from "../components/MainBanner";
import "../scss/Home.scss";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [mainMovies, setMainMovies] = useState([]);

    // async await
    const getMoives = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
    }
    const getMainMoives = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?sort_by=rating`
            )
        ).json();
        setMainMovies(json.data.movies.splice(0,5));
        setLoading(false);
    };
    useEffect(() => {
        getMoives();
        getMainMoives();
    }, []);
    
    return (
    <div>
        {loading
        ? <h1>Loading...</h1>
        : 
        <div>
            <div className="main-banner">
                <MainBanner
                    mainMovies={mainMovies}
                    loading={loading}
                />
            </div>
            <div className="movies-wrapper w_1400">
                {movies.map(movie => (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        summary={movie.summary} 
                        genres={movie.genres}
                    />
                ))}
            </div>
        </div>
        }
    </div>
    );
}

export default Home;