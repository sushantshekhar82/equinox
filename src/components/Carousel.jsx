import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:false
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState([]);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title:`"Working with Equinox Home Interior was an absolute pleasure! From the initial consultation to the final installation, they demonstrated a high level of professionalism and expertise. They truly understood my vision and transformed it that exceeded my expectations."`,
      text:"Suhana and Gaurav",
     
      
    },
    {
      title:`“ Equinox Home Interior' attention to detail and commitment to delivering on time and within budget were commendable. I highly recommend their services to anyone seeking exceptional interior design expertise."`,
      text:"Rohini and Mohit",
     
      
    },
    {
      title:`"I had the pleasure of working with Equinox Home Interior to revamp my restaurant, and I must say, they exceeded my expectations in every way. The team at Equinox Home Interior understood the unique atmosphere I wanted to create and translated it flawlessly into a captivating interior design. ”`,
      text:"Parul and Rohan Bist",
     
      
    },
  ];


  return (
    <Box
      position={'relative'}
      height={{base:"320px",lg:"350px"}}
      width={'100%'}
      overflow={'hidden'}
    
     justifyContent={'center'}
     
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
           
          
      >
            
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="250px" position="relative">
              <Stack
                
                w={'95%'}
               
                position="absolute"
                top="70%"
                transform="translate(0, -50%)"
                
                textAlign={'center'}
                >
                <Text fontSize={{ base: 'xl', md: '3xl', lg: '2xl' }} color={"black"} fontStyle={'italic'}>
                  {card.title}
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight={'bold'} color={'black'}>
                  {card.text}
                </Text>
                {/* <Button bgColor={'#FECC2A'} width={'150px'} height={'45px'} color={'white'} fontSize={'18px'} margin={'auto'} _hover={{
                  bgCo: 'yellow.400',
                 
                }}>See Our Projects</Button> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}