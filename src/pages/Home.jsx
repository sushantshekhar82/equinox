import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css';
import { Typewriter } from "react-simple-typewriter";
import CardCarousel from '../components/CardCarousel';
import {MdOutlineVerified} from 'react-icons/md'
import {CiDiscount1} from 'react-icons/ci'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import {BsBagHeart,BsEmojiSmile} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import ImageCard from '../components/ImageCard';
import NumberIncreaseAnnimation from '../components/NumberIncreaseAnnimation';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import CaptionCarousel from '../components/Carousel';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Box>
        <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Equinox Home Interior"/>
<meta name="keywords" content="Equinox Home Interior, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
<title>Equinox Home Interior </title>
  </Helmet>
  <Navbar/>
  <Slider/>
       <div id="home" className="intro">
        <Box margin={'auto'} float={'left'}  width={'500'} height={'auto'} marginTop={{base:'10px',lg:'100px'}} marginLeft={{base:'1px',lg:'150px'}} >
       <Text as={'h1'} color={{base:'#141438',lg:'white'}}  textAlign={'center'} fontSize={'25px'} fontWeight={'bold'}>Meet Our Designers</Text>
       <Box className="form"  margin={'auto'}>
       
        <form action="mailto:equinoxhomeinterior7@gmail.com" method="post" enctype="text/plain" autoComplete='off'  >
   
    <input type="text" name="Name" placeholder="Name" required/><br/>
    <input type="number" name="contact number" placeholder='Contact Number' required min="10" max="10"/>
    <input type="text" name="city" placeholder='City' required/>
    <input type="email" name="email" placeholder="Your Email" required/><br/>
    
    <textarea name="body" rows="5" cols="30" placeholder="Your Message here" required></textarea><br/>
    <input type="submit" value="Send"  className='btn'/>
  </form>
  </Box>
  </Box>
     
      </div>
      <Box padding={{base:'5px',lg:'25px'}}>
        <Text fontSize={{base:'3xl',lg:'5xl'}} textAlign={{base:'center',lg:'left'}} fontWeight={'bold'} color={'#141438'}>
          Services we are giving
        </Text>
      <Grid gridTemplateColumns={{base:'1fr 1fr', lg:'1fr 1fr 1fr '}}>
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
    
  >
    <Image src='./onebhk.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >1BHK</Text>
  </Link>
  </Box>
        </GridItem>
       
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
   
  >
    <Image src='./twobhk.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >2BHK</Text>
  </Link>
  </Box>
        </GridItem>
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
   
  >
    <Image src='./threebhk.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >3BHK</Text>
  </Link>
  </Box>
        </GridItem>
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
    
  >
    <Image src='./bunglow.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >BUNGLOW</Text>
  </Link>
  </Box>
        </GridItem>
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
   
  >
    <Image src='./commercial.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >COMMERCIAL PLACES</Text>
  </Link>
  </Box>
        </GridItem>
        <GridItem>
        <Box>
      <Link to={'/'}>
    <Box
    display="inline-block"
    position="relative"
    borderRadius={'5px'}
    overflow="hidden"
    width={{base:'95%',lg:'95%'}}
   height={{base:'200px',lg:'250px'}}
    transition="transform 0.3s"
  
    _hover={{
      transform: "scale(1.02)",
    }}
   
  >
    <Image src='./others.jpg' alt="Image" width="100%" height="100%" objectFit="cover" />
    
  </Box>
  <Text fontSize={{base:'18px',lg:'20px'}} color={'black'} fontWeight={'bold'} textAlign={'center'} >OTHERS</Text>
  </Link>
  </Box>
        </GridItem>
      </Grid>

      </Box>
      <Box padding={{base:'5px',lg:'25px'}} display={{base:'none',lg:'block'}}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#141438'}>
         Why Choose Us?
        </Text>
        <Grid templateColumns={{base:'1fr 1fr',lg:'1fr 1fr 1fr 1fr'}}    templateRows={{base:'200px',lg:'250px'}}gap={{base:'5px',lg:'1px'}} justifyContent={'center'} alignItems={'center'} marginTop={'50px'}>
          <GridItem>
              <Grid templateColumns={'1% 99%'}gap={{base:'5px',lg:'1px'}} justifyContent={'center'} alignItems={'center'}>
                  <GridItem>
                   
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'} justifyContent={'center'} alignItems={'center'}>
                      <GridItem paddingLeft={'25px'}>
                      <MdOutlineVerified color={'#141438'} fontSize={'100px'}/> 
       </GridItem>
                      <GridItem paddingTop={'10px'}>
                 <Text as='h3' >  100+ Design Experts</Text>
                        </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem  >
          <Grid templateColumns={'1% 99%'}gap={{base:'5px',lg:'1px'}}   marginTop={{base:'10px',lg:'5px'}}>
                  <GridItem>
                   
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'} justifyContent={'center'} alignItems={'center'}  >
                      <GridItem> <TbShoppingCartDiscount color={'#141438'} fontSize={'100px'}/></GridItem>
                      <GridItem>
                      
                      Luxurious Designs
        </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'1% 99%'} gap={{base:'5px',lg:'1px'}} >
                  <GridItem>
                   
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'} justifyContent={'center'} alignItems={'center'} >
                      <GridItem paddingLeft={'15px'}> <BsEmojiSmile color={'#141438'} fontSize={'100px'}/>
                     
       </GridItem>
                      <GridItem >
                     Happy customers </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'1% 99%'}gap={{base:'5px',lg:'1px'}} >
                  <GridItem>
                   
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'} justifyContent={'center'} alignItems={'center'}>
                      <GridItem> <RiCustomerService2Fill color={'#141438'} fontSize={'100px'}/>
                     
        </GridItem>
                      <GridItem>
                      Customer Support </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
         
          </GridItem>
        </Grid>
      </Box>
      <Box padding={{base:'5px',lg:'25px'}} display={{base:'block',lg:'none'}}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#141438'}>
         Why Choose Us?
        </Text>
        <Grid gridTemplateColumns={'1fr 1fr'} gap={1} justifyContent={'center'} alignItems={'center'} >
           
            <GridItem>  <Grid gridTemplateColumns={'1fr'}  margin={'auto'} gridTemplateRows={'auto'} justifyContent={'center'} alignItems={'center'} >
                 <GridItem margin={'auto'}><MdOutlineVerified fontSize={'50px'}/></GridItem>
            <GridItem><Text fontWeight={'bold'} textAlign={'center'}>100+ Designs Experts</Text></GridItem>
                 </Grid></GridItem>
            <GridItem>  <Grid gridTemplateColumns={'1fr'}  margin={'auto'} gridTemplateRows={'auto'} justifyContent={'center'} alignItems={'center'} >
                 <GridItem margin={'auto'}><TbShoppingCartDiscount fontSize={'50px'}/></GridItem>
            <GridItem><Text fontWeight={'bold'} textAlign={'center'}>Luxurious Design</Text></GridItem>
                 </Grid></GridItem>
            <GridItem>  <Grid gridTemplateColumns={'1fr'}  margin={'auto'} gridTemplateRows={'auto'} justifyContent={'center'} alignItems={'center'} >
                 <GridItem margin={'auto'}><BsEmojiSmile fontSize={'50px'}/></GridItem>
            <GridItem><Text fontWeight={'bold'} textAlign={'center'}>Happpy customers</Text></GridItem>
                 </Grid></GridItem>
                 <GridItem>
                 <Grid gridTemplateColumns={'1fr'}  margin={'auto'} gridTemplateRows={'auto'} justifyContent={'center'} alignItems={'center'} >
                 <GridItem margin={'auto'}><RiCustomerService2Fill fontSize={'50px'}/></GridItem>
            <GridItem><Text fontWeight={'bold'} textAlign={'center'}>Customer Support</Text></GridItem>
                 </Grid>
            </GridItem>
        </Grid>
        </Box>

      <Box padding={{base:'5px',lg:'25px'}}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#141438'}>
          We are designing
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
          <ImageCard imageUrl="./balcony.jpg" text="Balcony Area" href="balcony" />
       
            </GridItem> 
            
            
          
            <GridItem justifyContent={'center'} alignItems={'center'}>
          <ImageCard imageUrl="./guestroom.jpg" text="Guest Room" href="/guestroom" />
       
            </GridItem> 

        </Grid>
      </Box>
      
      <Text fontSize={'4xl'} textAlign={'center'} fontWeight={'bold'} marginTop={'20px'} color={'#141438'}>FAQ</Text>
        <Box width={{base:'85%',lg:'50%'} } margin={'auto'} data-aos="zoom-in-up">
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>What services does Equinox Home Interior offer?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Text textAlign={'justify'}>
        Equinox Home Interior specializes in interior design services for both homes and offices. We provide a range of services, including concept development, space planning, material selection, furniture procurement, lighting design, and project management. Our team is dedicated to creating beautiful and functional spaces that reflect the unique preferences and requirements of our clients. </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>How does Equinox Home Interior approach the design process?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    At Equinox Home Interior, we believe in a collaborative approach to design. We work closely with our clients, taking the time to understand their vision, lifestyle, and budget. Our team of skilled designers combines creativity and innovation to develop concept designs and detailed plans. We ensure clear communication and client involvement throughout the process to achieve the desired outcome.   </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>What is the quality of materials and craftsmanship provided by Equinox Home Interior?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    We are committed to delivering top-notch quality in all aspects of our projects. We work with trusted suppliers and vendors to source high-quality materials, furniture, and decor items. Our team of experienced craftsmen and artisans pay meticulous attention to detail to ensure flawless execution. We strive for excellence in every project, resulting in exceptional quality and long-lasting durability.  </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={'bold'}>What kind of support can clients expect from Equinox Home Interior?
</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    At Equinox Home Interior, we prioritize customer satisfaction and aim to provide comprehensive support to our clients. From the initial consultation to project completion, we offer professional guidance, expertise, and timely communication. Our team is available to address any queries or concerns throughout the design process and even after the project is completed. We believe in building long-term relationships with our clients and providing ongoing support whenever needed.   </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={'bold'}>How does Equinox Home Interior ensure timely project delivery and adherence to budgets?
</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    We understand the importance of project timelines and budget constraints. Our team meticulously plans and schedules each project, ensuring efficient execution and timely completion. We maintain transparency and open communication with our clients regarding costs and budget considerations. Through careful project management and attention to detail, we strive to deliver projects within the agreed-upon timelines and budgets, without compromising on quality.</Text> </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>
        
        
        
        
       
    </Box>
  )
}

export default Home