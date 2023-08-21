import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';



const GuestRoom = () => {
  


    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const Images=[
      "./guest6.jpg",
      "./guest2.jpg",
      "./guest3.jpg",
      "./guest4.jpg",
      "./guest5.jpg",
      "./guest1.jpg"

    ]
  return (
   <Box>
   <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Equinox Home Interior Guest Room Collections"/>
<meta name="keywords" content="Equinox Home Interior, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
<title>Guest Room and Area </title>
  </Helmet>
   <Navbar/>
        <Text
              color={'#FECC2A'}
              
              fontSize="5xl"
              fontWeight="bold"
              textAlign={'center'}
            >
          Guest Room
            </Text>
            <Grid templateColumns={{base:"1fr 1fr",lg:"1fr 1fr 1fr "}} gap={2} justifyContent={'center'} alignItems={'center'} >
  {
    Images.map((el)=>(
    <GridItem marginTop={'10px'} margin={'auto'}  >
        <Box
        display="inline-block"
        position="relative"
        borderRadius={'5px'}
        overflow="hidden"
        width={{base:'100%',lg:'300px'}}
       height={{base:'250px',lg:'350px'}}
        transition="transform 0.3s"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        _hover={{
          transform: "scale(1.02)",
        }}
        marginBottom={'10px'}
       
      >
    
        <Image src={el} alt="Image" width="100%" height="100%" objectFit="cover" data-aos="zoom-in-up"/>
        
      </Box>
      </GridItem>
    ))
  }
  </Grid>
      
   </Box>
  )
}

export default GuestRoom