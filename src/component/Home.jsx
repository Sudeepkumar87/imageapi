import React from 'react'
import Box from '@mui/material/Box';


const Home = ({handlerSearchTerm,visibleItems,loadMore ,visibleCount,filteredDescriptions}) => {
  return (
    <Box>
          
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "10px",
            marginTop:"2rem",
            "@media (min-width: 1024px) and (max-width: 1434px)": {
                gridTemplateColumns: "1fr 1fr 1fr",
              },
          }}
        >
          {visibleItems.map((item, index) => (
            <Box key={index} style={{ display: "grid" }}>
              {item.image && item.image.length > 0 && (
                <img
                  src={item.image}
                  alt={item.name || "Beer"}
                  sx={{
                    aspectRatio: "3/2",
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        {visibleCount < filteredDescriptions.length && (
          <button
            onClick={loadMore}
            sx={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        )}
      </Box>
    </Box>
  )
}

export default Home
