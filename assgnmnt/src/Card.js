import React from "react";
import { useState } from "react";
import jsonData from "./data.json";


const Card = ({ cardData, }) => {


    // const [showAllCards, setShowAllCards] = useState(false);

    // const toggleShowAllCards = () => {
    //     setShowAllCards(!showAllCards);
    // };
    // const sectionCards = Array.isArray(cardData)
    //     && cardData.filter((cardData) => cardData.parent_sec === sectionData.id)
    return (
        <div className="maincrd">

    
        <div className="card">
            <h4>{cardData.card_title}</h4>
            {cardData.data && (
                <div className="card-data">
                    {cardData.data_type === 'progress' && <progress value={cardData.data_value} max="100"></progress>}
                    {cardData.data_type === 'number' && <p>{cardData.data_value}</p>}
                    {cardData.data_type === 'image' && <img src="https://i.ibb.co/XxstWC6/large-1x-Free-Vector-Halftone-Waves-Backgroundyc0323-generated.jpg" />}
                    {cardData.data_type === 'text' && <p>{cardData.data_value}</p>}

                </div>
            )}
            {cardData.button && (
                <a href={cardData.redirect} className="card-button">
                    {cardData.button_name}
                </a>
            )}
            {cardData.link && (
                <a href={cardData.redirect} className="card-link">
                    {cardData.link_name}
                </a>
            )}
            {cardData.note && <p className="card-note">{cardData.note}</p>}
            <h2>{cardData.parent_sec}</h2>
           
            
            

        </div>
        </div>
    );
};

export default Card;
