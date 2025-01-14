import React, { useState, useEffect } from "react"
import './CardComponent.css';
import { FaStar } from 'react-icons/fa';

export default function CardComponent({ imageUrl, title, description, language, vote }) {
    const [flagUrl, setFlagUrl] = useState(null)
    const fetchFlag = async (languageCode) => {
        try {
            const response = await fetch(`https://flagsapi.com/${languageCode}/flat/64.png`);
            if (response.ok) {
                setFlagUrl(response.url);
            } else {
                setFlagUrl('https://upload.wikimedia.org/wikipedia/commons/5/56/No_flag.svg');
            }
        } catch (error) {
            setFlagUrl('https://upload.wikimedia.org/wikipedia/commons/5/56/No_flag.svg');
        }
    };

    useEffect(() => {
        if (language) {
            fetchFlag(language);
        }
    }, [language]);

    const getStars = (vote) => {

        const stars = Math.ceil(vote / 2); // Converte il voto in scala  a 1-5
        let starsArray = [];
        for (let i = 0; i < 5; i++) {
            if (i < stars) {
                starsArray.push(<FaStar key={i} style={{ color: "yellow" }} />)
            } else {
                starsArray.push(<FaStar key={i} style={{ color: "black" }} />)
            }
        }
        return starsArray
    };

    return (
        <div className="card" style={{}}>
            <img src={imageUrl} className="card-img" alt={title} />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center ">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <span className="text-muted">Language:{language} </span>
                    {flagUrl && <img src={flagUrl} alt="flag" style={{ width: "30px", marginLeft: "10px" }} />}
                </p>
                <p>{getStars(vote)}</p>
            </div>
        </div>

    );
} 