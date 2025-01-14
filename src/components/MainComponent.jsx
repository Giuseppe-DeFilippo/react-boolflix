import React, { useEffect, useState } from "react"
import CardComponent from "./CardComponent"
export default function MainComponent() {
    const [movies, setMOvies] = useState([]);
    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setMOvies(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="container my-4 ">
            <h3 className="text-white mb-4">movies</h3>
            <div className=" row justify-content-center">
                {movies.map((movie) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" >
                        <CardComponent
                            key={movie.id}
                            title={movie.title}
                            imageUrl={`${import.meta.env.VITE_API_BASE_URL}${movie.poster_path}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

}