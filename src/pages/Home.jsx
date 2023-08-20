import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css';
import { Typewriter } from "react-simple-typewriter";
import CardCarousel from '../components/CardCarousel';
import {MdOutlineVerified} from 'react-icons/md'
import {CiDiscount1} from 'react-icons/ci'
import {TbShoppingCartDiscount} from 'react-icons/tb'
import {BsBagHeart} from 'react-icons/bs'
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
const Home = () => {
  return (
    <Box>
        <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Ananya Interiors"/>
<meta name="keywords" content="Ananya Interiors, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
<title>Ananya Interiors </title>
  </Helmet>
  <Navbar/>
       <div id="home" className="intro">
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}} justifyContent={'space-around'} alignItems={'center'} >
        <GridItem padding={'25px'}>
       <Text fontSize={{base:'6xl',lg:'6xl'}} fontWeight={'bold'}>
          Bring home beautiful
Ananya interiors
          </Text>
         <Text color={'#FECC2A'} fontSize={{base:'3xl',lg:'5xl'}} fontWeight={'bold'}>
            <span>
              {" "}
              <Typewriter
                words={[
                  "that fits your budget",
                  "has Classic design",
                  "give Premium feeling",
                  "unbelievable design",
                  " that is unique",
                ]}
                loop={500}
                cursor
                cursorStyle={"|"}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
            </Text>

         
        
        </GridItem>
        <GridItem  justifyContent={'center'} alignItems={'center'}>
        <Stack mx={'auto'}   justifyContent={'center'} >
        <Stack align={'center'} margin={'auto'} >
          <Heading fontSize={'5xl'} textAlign={'center'} fontWeight={'bold'} color={{base:'white',lg:'#FECC2A'}} marginRight={'20px'}>
            Get in Touch
          </Heading>
          <Text fontSize={'2xl'} color={'black.600'} fontWeight={'bold'} marginRight={'20px'}>
        We  design for every budget
          </Text>
        
        <Box className="form" margin={'auto'}  >
        <form action="mailto:annanyainteriors@gmail.com" method="post" enctype="text/plain" autoComplete='off'  >
   
    <input type="text" name="Name" placeholder="Name" required/><br/>
    <input type="number" name="contact number" placeholder='Contact Number' required min="10" max="10"/>
    <input type="text" name="city" placeholder='City' required/>
    <input type="email" name="email" placeholder="Your Email" required/><br/>
    
    <textarea name="body" rows="5" cols="30" placeholder="Your Message here" required></textarea><br/>
    <input type="submit" value="Send"  className='btn'/>
  </form>
  </Box>
      </Stack>
      </Stack>
        </GridItem>
      </Grid>
      </div>
      <Box padding={'25px'}>
        <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'}>
          Services we are giving
        </Text>
        <CardCarousel/>

      </Box>
      <Box padding={'25px'}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'}>
         Why Choose Us?
        </Text>
        <Grid templateColumns={{base:'1fr',lg:'1fr 1fr 1fr'}}   templateRows={{base:'200px',lg:'250px'}}gap={{base:'15px',lg:'px'}} justifyContent={'flex-start'} alignItems={'center'} marginTop={'50px'}>
          <GridItem>
              <Grid templateColumns={'30% 70%'}gap={{base:'5px',lg:'1px'}} >
                  <GridItem>
                    <MdOutlineVerified color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'}>
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Quality Materials 
        </Text></GridItem>
                      <GridItem>
                        <Text>At our company, we always ensure customer satisfaction and selcet premium materials  from reputable suppliers. We prioritize our customers' budgets,and ensures they get happy.</Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem  >
          <Grid templateColumns={'30% 70%'}gap={{base:'5px',lg:'1px'}}   marginTop={{base:'10px',lg:'5px'}}>
                  <GridItem>
                    <TbShoppingCartDiscount color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'} >
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Luxurious Design
        </Text></GridItem>
                      <GridItem>
                        <Text>Our team of designers specializes in creating luxurious spaces that exude elegance and sophistication. We have a keen eye for detail and a deep understanding of the elements that contribute to a luxurious aesthetic.</Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'30% 70%'} gap={{base:'5px',lg:'1px'}} >
                  <GridItem>
                    <BsBagHeart color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'}>
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Client Satisfaction
        </Text></GridItem>
                      <GridItem>
                        <Text>Your satisfaction is our top priority. We believe in building long-term relationships with our clients, and we go the extra mile to ensure that you are delighted with the end result. </Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'30% 70%'}gap={{base:'5px',lg:'1px'}} >
                  <GridItem>
                    <RiCustomerService2Fill color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'}>
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Customer Support
        </Text></GridItem>
                      <GridItem>
                        <Text>We take pride in delivering exceptional customer support. Our dedicated team is readily available round the clock to assist you promptly and efficiently, addressing any queries or concerns you may encounter along the way.</Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'30% 70%'}gap={{base:'5px',lg:'1px'}}>
                  <GridItem>
                    <CiDiscount1 color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'}>
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Free Consultation
        </Text></GridItem>
                      <GridItem>
                        <Text>We understand that every client has unique requirements and preferences when it comes to interior design. That's why we offer a free consultation to understand your specific needs and discuss your lifestyle</Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
          <GridItem>
          <Grid templateColumns={'30% 70%'}gap={{base:'5px',lg:'1px'}}>
                  <GridItem>
                    <HiHome color={'#E58000'} fontSize={'100px'}/>
                  </GridItem>
                  <GridItem>
                    <Grid templateRows={'auto auto'}>
                      <GridItem><Text fontSize={{base:'3xl',lg:'3xl'}} fontWeight={'bold'} color={'#E58000'}>
                      Lifestyle-Focused 
        </Text></GridItem>
                      <GridItem>
                        <Text>We firmly believe that interior design should be centered around your lifestyle. Our team takes the time to understand your daily routines, preferences, and how you utilize your space. </Text>
                      </GridItem>
                    </Grid>
                    
                    </GridItem>
              </Grid>
          </GridItem>
        </Grid>
      </Box>

      <Box padding={'25px'}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'}>
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
      <Box backgroundColor={'#FECC2A'} padding={'25px'} color={'white'}>
        <Grid templateColumns={{base:'1fr 1fr',lg:'1fr 1fr 1fr 1fr'}}  justifyContent={'center'} alignItems={'center'}>
          <GridItem> <Flex justifyContent={'center'} alignItems={'center'}><Text fontSize={{base:'xl',lg:'4xl'}} fontWeight={'bold'} textAlign={'center'}><NumberIncreaseAnnimation n={500}/></Text><Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>+</Text></Flex>
          <Text fontSize={{base:'md',lg:'3xl'}}fontWeight={'bold'} textAlign={'center'}>Designs</Text>
         
     </GridItem>
     <GridItem> <Flex justifyContent={'center'} alignItems={'center'}><Text fontSize={{base:'xl',lg:'4xl'}} fontWeight={'bold'} textAlign={'center'}><NumberIncreaseAnnimation n={300}/></Text><Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>+</Text></Flex>
          <Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>Services Given</Text>
          </GridItem>
     
     <GridItem> <Flex justifyContent={'center'} alignItems={'center'}><Text fontSize={{base:'xl',lg:'4xl'}} fontWeight={'bold'} textAlign={'center'}><NumberIncreaseAnnimation n={5}/></Text><Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>+</Text></Flex>
          <Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>Cities</Text>
           </GridItem>
           <GridItem> <Flex justifyContent={'center'} alignItems={'center'}><Text fontSize={{base:'xl',lg:'4xl'}} fontWeight={'bold'} textAlign={'center'}><NumberIncreaseAnnimation n={300}/></Text><Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>+</Text></Flex>
          <Text fontSize={{base:'md',lg:'3xl'}} fontWeight={'bold'} textAlign={'center'}>Happy Coustomers</Text>
          </GridItem>
      </Grid>
      </Box>
      <Box padding={'5px'}>
      <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'} textAlign={'center'}>
        Testimonials
        </Text>
      <CaptionCarousel/>
      </Box>
      <Text fontSize={'4xl'} textAlign={'center'} fontWeight={'bold'} marginTop={'20px'} color={'#FECC2A'}>FAQ</Text>
        <Box width={{base:'85%',lg:'50%'} } margin={'auto'} data-aos="zoom-in-up">
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>What services does Ananya Interiors offer?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Text textAlign={'justify'}>
        Ananya Interiors specializes in interior design services for both homes and offices. We provide a range of services, including concept development, space planning, material selection, furniture procurement, lighting design, and project management. Our team is dedicated to creating beautiful and functional spaces that reflect the unique preferences and requirements of our clients. </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>How does Ananya Interiors approach the design process?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    At Ananya Interiors, we believe in a collaborative approach to design. We work closely with our clients, taking the time to understand their vision, lifestyle, and budget. Our team of skilled designers combines creativity and innovation to develop concept designs and detailed plans. We ensure clear communication and client involvement throughout the process to achieve the desired outcome.   </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Text fontWeight={'bold'}>What is the quality of materials and craftsmanship provided by Ananya Interiors?</Text>
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
        <Text fontWeight={'bold'}>What kind of support can clients expect from Ananya Interiors?
</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Text textAlign={'justify'}>
    At Ananya Interiors, we prioritize customer satisfaction and aim to provide comprehensive support to our clients. From the initial consultation to project completion, we offer professional guidance, expertise, and timely communication. Our team is available to address any queries or concerns throughout the design process and even after the project is completed. We believe in building long-term relationships with our clients and providing ongoing support whenever needed.   </Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Text fontWeight={'bold'}>How does Ananya Interiors ensure timely project delivery and adherence to budgets?
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