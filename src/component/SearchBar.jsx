import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const SearchBar = ({handlerSearchTerm,searchTerm}) => {
  return (
    <Box>
        <Box sx={{width:"100%", background:"#ff742b",height:"106px",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"10px"}}>


       <TextField
       value={searchTerm}
       onChange={handlerSearchTerm}
       
      variant="outlined"
      style={{
        width:"80%",
        height: '12px',
        border:"none",
        borderRadius:"30px",
        '& .MuiOutlinedInput-root': {
          '& input': {
             width:"99%",
            height: '12px', 
            border:"none",
            borderRadius:"30px",

         
            background: '#fff', 
          },
        },
      }}
    />
       </Box>
    </Box>
  )
}

export default SearchBar