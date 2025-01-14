import React from "react"
export default function CardComponent({ imageUrl, title }) {

    return (

        <div className="card" style={{ width: "18rem;" }}>
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                {/* <h5 className="card-title">{title}</h5> */}
            </div>
        </div>

    )
}