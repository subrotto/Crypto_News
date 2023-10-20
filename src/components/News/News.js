import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const handleClick=(url)=>{
    window.location.href=url;
    
}

const News = (props) => {
    const {title,description,urlToImage,url}=props.article;
    return (
        <Grid item xs={2} sm={4} md={4}>
        <Card onClick={()=>handleClick(url)} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target='_blank' onClick={()=>handleClick(url)}  size="small" color="primary">
          See More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    );
};

export default News;