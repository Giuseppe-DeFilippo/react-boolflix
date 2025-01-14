import React from "react"
import './CardComponent.css';
export default function CardComponent({ imageUrl, title, description, language }) {

    return (

        <div className="card" style={{}}>
            <img src={imageUrl} className="card-img" alt={title} />
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center ">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <span className="text-muted">language:{language}</span>
                </p>
            </div>
        </div>

    )
}