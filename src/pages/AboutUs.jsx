import React from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
const AboutUs = () => {
  return (
    <Box>
        <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Ananya Interiors About us"/>
<meta name="keywords" content="Ananya Interiors,About us, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
<title>About const [state, setstate] = useState(initialState) </title>
  </Helmet>
  <Navbar/>
    <Image src="./aboutusbanner1.jpg" alt='about us' borderRadius={'10px'} width={'100%'} height={{base:'300px',lg:'450px'}}/>
    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} templateRows={{base:'auto',lg:'auto'}}   marginTop={'30px'} justifyContent={'center'} alignItems={'center'}>
      <GridItem order={{ base: -1, lg: 1 }}  data-aos="zoom-in-up" padding={'10px'}>
      <Box
  w={{base:'100%',lg:'100%'}}
  h={{base:'340px',lg:'370px'}}
  position="relative"
  overflow="hidden"
  borderRadius={'10px'}
  margin={'auto'}
  display="flex"
  justifyContent="center"
  alignItems="center"
  
>
          <Image src="./aboutusananya.jpg" borderRadius={'10px'}  objectFit="contain"
maxWidth="100%" marginTop={'2px'} alt='team'/>
      </Box>
           </GridItem>
      <GridItem  justifyContent={'center'} alignItems={'center'}  data-aos="zoom-in-right">
        <Box width={{base:'100%',lg:'75%'}} margin={'auto'} padding={{base:5,lg:10}}>
        <Text
          color={'#FECC2A'}
          textAlign={'left'}
          fontSize="5xl"
          fontWeight="bold"
          
        >
          About Us
        </Text>
       <Text fontSize={'xl'} textAlign={'justify'}>Ananya Interiors is a leading interior design company located on the vibrant Sarjapur-Marathahalli Road in Bengaluru. With a strong commitment to creating beautiful and functional spaces, we specialize in providing top-notch interior design services for both homes and offices.

Our team of highly skilled and experienced designers understands the unique requirements and aspirations of our clients. We believe in translating their vision into reality by combining creativity, functionality, and innovation. From concept development to execution, we strive to deliver exceptional design solutions that exceed expectations.
</Text>
       </Box>
      </GridItem>
    </Grid >
    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} templateRows={{base:'auto',lg:'auto'}} marginTop={'70px'}  >
    <GridItem margin={'auto'}  data-aos="zoom-in-up">
    <Box
  w={{base:'100%',lg:'100%'}}
  h={{base:'340px',lg:'440px'}}
  position="relative"
  overflow="hidden"
  borderRadius={'10px'}
  margin={'auto'}
  display="flex"
  justifyContent="center"
  alignItems="center"
>
          <Image src="./ourprocess.jpg" borderRadius={'10px'}  width={'100%'} height={'auto'} alt='team'/>
          </Box>
      </GridItem>
      <GridItem  justifyContent={'center'} alignItems={'center'}  data-aos="zoom-in-right">
        <Box width={{base:'100%',lg:'80%'}} margin={'auto'} padding={{base:5,lg:10}}>
        <Text
          color={'#FECC2A'}
          textAlign={'left'}
          fontSize="5xl"
          fontWeight="bold"
        >
         Our Process
        </Text>
       <Text fontSize={'xl'} textAlign={'justify'}>At Ananya Interiors, our interior design process begins with a personalized consultation where we understand your requirements and vision. Our expert team then creates customized design concepts and plans, ensuring clear communication and client involvement throughout. Contact us today to schedule a visit and let us transform your space into a reflection of your dreams.</Text>
       </Box>
      </GridItem>
      
    </Grid >
   
    </Box>
  )
}

export default AboutUs