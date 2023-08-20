import { Box, Image, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const CardCarousel = () => {
    const images = [
        {
            image:"./onebhk.jpg",
            text:'1 BHK',
            href:"/services"

        },
        {
            image:"./twobhk.jpg",
            text:'2 BHK',
            href:"/services"
        },
        {
          image:"./threebhk.jpg",
          text:'3 BHK',
          href:"/services"
      },
      {
        image:"./bunglow.jpg",
        text:'Bunglow',
        href:"/services"
    },
        
      ];
      const [isHovered, setIsHovered] = useState(false);

      const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
      const carouselRef = useRef(null);
  return (
    <Box marginTop={'5px'} >
        <Carousel responsive={responsive}
       infinite={true}
       ref={carouselRef}
       autoPlay 
       autoPlaySpeed={2000}
       arrows={false}
     
    
        >
       
  {images.map((el, index) => (
    <Box>
      <Link to={el.href}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'97%',lg:'97%'}}
   height={{base:'250px',lg:'250px'}}
    transition="transform 0.3s"
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}
    _hover={{
      transform: "scale(1.02)",
    }}
    marginBottom={'10px'}
  >
    <Image src={el.image} alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} >{el.text}</Text>
  </Link>
  </Box>
  ))}


 
 
</Carousel>
    </Box>
  )
}

export default CardCarousel