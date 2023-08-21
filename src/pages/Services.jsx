import React from 'react'
import CardCarousel from '../components/CardCarousel'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import ImageCard from '../components/ImageCard'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'

const Services = () => {
  return (
    <Box><Helmet>
    <meta charset="UTF-8"/>
  <meta name="description" content="Equinox Home Interior Services"/>
  <meta name="keywords" content="Equinox Home Interior,Services, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
  <title>Services @Equinox Home Interior </title>
    </Helmet>
    <Navbar/>
    <Box padding={'25px'}>
        
    <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'} textAlign={'center'}>
        Services We are providing
      </Text>
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr 1fr'}} gap={5} justifyContent={'center'} alignItems={'center'}>
      <GridItem justifyContent={'center'} alignItems={'center'}>
        <ImageCard imageUrl="./bedroom.jpg" text="Bedroom" href="/bedroom" />
     
          </GridItem>
          <GridItem>
        <ImageCard imageUrl="./kitchen.jpg" text="Kitchen" href="/kitchen" />
     
          </GridItem> 
        <GridItem justifyContent={'center'} alignItems={'center'}>
        <ImageCard imageUrl="./livingroom.jpg" text="Living Room" href="/livingroom" />
     
          </GridItem>
          <GridItem justifyContent={'center'} alignItems={'center'}>
        <ImageCard imageUrl="./diningroom.jpg" text="Dining Area" href="/diningroom" />
     
          </GridItem>  
          <GridItem>
        <ImageCard imageUrl="./balcony.jpg" text="Balcony Area" href="/balcony" />
     
          </GridItem> 
          
          
        
          <GridItem justifyContent={'center'} alignItems={'center'}>
        <ImageCard imageUrl="./guestroom.jpg" text="Guest Room" href="/guestroom" />
     
          </GridItem> 

      </Grid>
    </Box>
    </Box>
  )
}

export default Services