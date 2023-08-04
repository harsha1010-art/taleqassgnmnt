import React from "react";

import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';



const Banner = ({ bannerData }) => {


  return (


    <Card sx={{ minWidth: 275, margin: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h2>{bannerData.text}</h2>
        </Typography>
        <Typography variant="h5" component="div" style={{ textDecoration: "none" }}>

          {bannerData.link && (
            <a href={bannerData.link} style={{ textDecoration: "none" }} >{bannerData.id}</a>

          )}
        </Typography>

        <CardActions>
          {bannerData.link && (
            <Button href={bannerData.link}>{bannerData.btn_name}</Button>

          )}
        </CardActions>
      </CardContent>
    </Card>



  );
};

export default Banner;