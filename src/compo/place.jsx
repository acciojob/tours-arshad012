import React, { useState } from "react";

const Place = ({data, handleDelete}) => {
    const [isFull, setIsFull] = useState(false);

    const {id, name, info, image, price} = data;

    
    
    return <div className="tour-item">
        <img src={image} />
        <h2>{name}</h2>
        <div style={{display: isFull ? 'block' : 'none'}}>
            <p id="tour-item-para-rec6d6T3q5EBIdCfD">{info}</p>
            <p>Price: {price}</p>
        </div>
        <div className="buttons">
            <button onClick={() => setIsFull((preState) => !preState)}>{isFull ? 'See less' : 'Show more'}</button>
            <button id="delete-btn-rec6d6T3q5EBIdCfD" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </div>
}

export default Place;