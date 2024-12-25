import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Home = ({ handlerSearchTerm, visibleItems, loadMore, visibleCount, filteredDescriptions }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
            marginTop: "2rem",
            "@media (min-width: 1024px) and (max-width: 1434px)": {
              gridTemplateColumns: "1fr 1fr 1fr",
            },
          }}
        >
          {visibleItems.map((item, index) => (
            <Card key={index} sx={{ display: "flex", flexDirection: "column", boxShadow: 3 }}>
              {item.image && item.image.length > 0 && (
                <CardMedia
                  component="img"
                  alt={item.name || "Item"}
                  src={item.image}
                  sx={{
                    display:"flex",
                    margin:"auto",
                    aspectRatio: "3/2",
                    objectFit: "cover",
                    width: "50%",
                    height: "auto",
                  }}
                />
              )}
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {item.name || 'Untitled Item'}
                </Typography>
                {/* Optionally display more information here */}
                <Typography variant="body2" color="text.secondary">
                  {item.description || 'No description available'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {visibleCount < filteredDescriptions.length && (
          <Button
            onClick={loadMore}
            sx={{
                display:"flex",
                textAlign:"center",
                margin:"auto",
                background:"red",
                color:"black",
              
                width:"20%",
                height:"69%",

              marginTop: "4rem",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Home;

