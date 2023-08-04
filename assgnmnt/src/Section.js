
import React, { useState } from "react";
import Card from "./Card";
import jsonData from "./data.json";

const Section = ({ sectionData, cardData }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const toggleShowAllCards = () => {
        setShowAllCards(!showAllCards);
    };

    // Verify if cardData is available and is an array before using filter and slice
   



    return (

        <div className="section">
            <h1>{sectionData.id}</h1>
            <h3>{sectionData.title}</h3>


            {

                jsonData.card.map((cardData) => (
                    cardData.parent_sec_no === sectionData.sec_no &&
                    


                    <div className="card">

                        <h4>{cardData.parent_sec_no === sectionData.sec_no && <p>{cardData.card_title}</p>}</h4>
                        {cardData.parent_sec_no === sectionData.sec_no && (
                            <div className="card-data">
                                {cardData.data_type === 'progress' && <progress value={cardData.data_value} max="100"></progress>}
                                {cardData.data_type === 'number' && <p>{cardData.data_value}</p>}
                                {cardData.data_type === 'image' && <img src="https://i.ibb.co/XxstWC6/large-1x-Free-Vector-Halftone-Waves-Backgroundyc0323-generated.jpg" />}
                                {cardData.data_type === 'text' && <p>{cardData.data_value}</p>}

                            </div>
                        )}
                        {cardData.button_name && (
                            <a href={cardData.redirect} className="card-button">
                                {cardData.button_name}
                            </a>
                        )}
                        {cardData.parent_sec_no === sectionData.sec_no && (
                            <a href={cardData.redirect} className="card-link">
                                {cardData.link_name}
                            </a>
                        )}
                        {cardData.parent_sec_no === sectionData.sec_no && <p className="card-note">{cardData.note}</p>}





                    </div>
                ))
            }


            {jsonData.card.length > 3 && !showAllCards && (
                <button onClick={toggleShowAllCards}>See More</button>
            )}

        </div>
    );
};

export default Section;