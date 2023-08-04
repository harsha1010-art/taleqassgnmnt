import React, { useState } from "react";
import Card from "./Card";
import jsonData from "./data.json";

const Section = ({ sectionData }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const toggleShowAllCards = () => {
        setShowAllCards(!showAllCards);
    };

    // Filter cardData based on sectionData.sec_no
    const sectionCards = jsonData.card.filter(
        (cardData) => cardData.parent_sec_no === sectionData.sec_no
    );

    const maxVisibleCards = 3;
    const visibleCards = showAllCards ? sectionCards : sectionCards.slice(0, maxVisibleCards);

    return (
        <div className="section">
            <h1>{sectionData.id}</h1>
            <h1>{sectionData.title}</h1>
            <div className="card1">
                {visibleCards.map((cardData) => (
                    <div className="card" key={cardData.id}>
                        <h4>{cardData.card_title}</h4>
                        <div className="card-data">
                            {cardData.data_type === "progress" && <progress value={cardData.data_value} max="100"></progress>}
                            {cardData.data_type === "number" && <p>{cardData.data_value}</p>}
                            {cardData.data_type === "image" && <img src={cardData.data_value} alt="Card" />}
                            {cardData.data_type === "text" && <p>{cardData.data_value}</p>}
                        </div>
                        {cardData.button_name && (
                            <a href={cardData.redirect} className="card-button">
                                {cardData.button_name}
                            </a>
                        )}
                        {cardData.link_name && (
                            <a href={cardData.redirect} className="card-link">
                                {cardData.link_name}
                            </a>
                        )}
                        {cardData.note && <p className="card-note">{cardData.note}</p>}
                    </div>
                ))}
                {sectionCards.length > maxVisibleCards && !showAllCards && (
                    <button onClick={toggleShowAllCards} style={{ backgroundColor: '#068FFF', color: 'white' }}>See More</button>
                )}
            </div>
        </div>
    );
};

export default Section;
