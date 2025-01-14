import React, { useContext, useEffect, useState } from "react"
import CardComponent from "./CardComponent"
import GlobalContext from "../contexts/GlobalContext";


export default function MainComponent() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([])
    const [filteredSeries, setFilteredSeries] = useState([])
    const { searchQuery } = useContext(GlobalContext)


    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                setSeries(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSeries();
    }, []);

    //parte per filtrare i film
    useEffect(() => {
        if (searchQuery) {
            setFilteredMovies(
                movies.filter((movie) => {
                    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
                })
            );
        } else {
            //mostra i film se non ce nessuna ricerca
            setFilteredMovies(movies)
        }
    }, [searchQuery, movies])


    useEffect(() => {
        if (searchQuery) {
            setFilteredSeries(
                series.filter((serie) => {
                    return serie.name.toLowerCase().includes(searchQuery.toLowerCase());
                })
            );
        } else {
            setFilteredSeries(series)
        }
    }, [searchQuery, series])

    return (
        <>
            <div className="container my-4 ">
                <h3 className="text-white mb-4">movies</h3>
                <div className=" row justify-content-center">
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" >
                                <CardComponent
                                    key={movie.id}
                                    title={movie.title}
                                    imageUrl={`${import.meta.env.VITE_API_BASE_URL}${movie.poster_path}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p>nessun risultato </p>
                    )}
                </div>
            </div>

            <div className="container my-4 ">
                <h3 className="text-white mb-4">serie tv</h3>
                <div className=" row justify-content-center">
                    {filteredSeries.length > 0 ? (
                        filteredSeries.map((serie) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" >
                                <CardComponent
                                    key={serie.id}
                                    title={serie.name}
                                    imageUrl={`${import.meta.env.VITE_API_BASE_URL}${serie.poster_path}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p>nessun risultato</p>
                    )}
                </div>
            </div>
        </>
    );
}