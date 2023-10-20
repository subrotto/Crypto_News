import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=9a68fc37a7de4df29a51a93bbaf7a90e')
        .then(res=>res.json())
        .then(data=>setNews(data.articles));
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
         
              {
                news.map(article=><News article={article}></News>)
              }
            
          
        </Grid>
      </Box>
    );
};

export default Newspaper;