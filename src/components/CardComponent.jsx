import React, { useState, useEffect } from "react"
import './CardComponent.css';
import { FaStar } from 'react-icons/fa';

export default function CardComponent({ imageUrl, title, description, language, vote }) {




    const [flagUrl, setFlagUrl] = useState(null)
    const getFlagUrl = (languageCode) => {
        if (languageCode === "en") return "https://www.bandiere-mondo.it/data/flags/normal/gb.png";
        if (languageCode === "it") return "https://www.bandiere-mondo.it/data/flags/normal/it.png";
        if (languageCode === "fr") return "https://www.bandiere-mondo.it/data/flags/normal/fr.png";
        if (languageCode === "es") return "https://www.bandiere-mondo.it/data/flags/normal/es.png";
        if (languageCode === "de") return "https://www.bandiere-mondo.it/data/flags/normal/de.png";
        if (languageCode === "ja") return "https://www.bandiere-mondo.it/data/flags/normal/jp.png";
        if (languageCode === "zh") return "https://www.bandiere-mondo.it/data/flags/normal/cn.png";
        if (languageCode === "ko") return "https://www.bandiere-mondo.it/data/flags/normal/kr.png";
        if (languageCode === "ru") return "https://www.bandiere-mondo.it/data/flags/normal/ru.png";

        return "https://upload.wikimedia.org/wikipedia/commons/5/56/No_flag.svg";
    };
    useEffect(() => {
        if (language) {
            const url = getFlagUrl(language)
            setFlagUrl(url);
        }
    }, [language])

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
                <div>{getStars(vote)}</div>
            </div>
        </div>

    );
} 