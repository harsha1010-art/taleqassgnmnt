import React, { useState } from "react";
import jsonData from "./data.json";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const Section = ({ sectionData }) => {
    const [showAllCards, setShowAllCards] = useState(false);

    const toggleShowAllCards = () => {
        setShowAllCards(!showAllCards);
    };
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
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

            <div className="card1" >
                {visibleCards.map((cardData) => (
                    <div className="card" key={cardData.id} >
                        <Card sx={{ maxWidth: 345, minWidth: 400 }}>
                            <CardHeader

                                title={cardData.card_title}

                            />
                            {cardData.data_type === "image" ? <CardMedia
                                component="img"
                                height="194"
                                image={cardData.data_value}
                                alt="Paella dish"
                            /> : <CardMedia
                                component="img"
                                height="200"
                                image="https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.webp"
                                alt="Paella dish"
                            />}
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {cardData.data_type === "progress" && <progress value={cardData.data_value} max="100">{cardData.data_value}</progress>} {cardData.data_type === "progress" && <Typography>{cardData.data_value} % completed</Typography>}
                                    {cardData.data_type === "number" && <Typography>{cardData.data_value} % completed</Typography>}

                                </Typography>


                            </CardContent>
                            <Typography> {cardData.note && <p className="card-note">{cardData.note}</p>}</Typography>
                            
                            <CardActions disableSpacing>
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


                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent> {cardData.data_type === "text" &&
                                    <Typography paragraph>Method:{cardData.data_value}</Typography>

                                }
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                ))}



            </div>
            {sectionCards.length > maxVisibleCards && !showAllCards && (
                <button onClick={toggleShowAllCards} style={{ backgroundColor: '#068FFF', color: 'white',width:"100px", height:"20px" }}>See More</button>
            )}

        </div >
    );
};

export default Section;
