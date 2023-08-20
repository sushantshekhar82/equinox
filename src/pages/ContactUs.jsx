import { Box, Divider, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
import {BsFillTelephoneFill, BsWhatsapp}from 'react-icons/bs'
import {HiLocationMarker, HiOutlineLocationMarker}from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiMessageRoundedDots}from 'react-icons/bi'
import {GrLocation} from 'react-icons/gr'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
const ContactUs = () => {
  return (
   <Box>
      <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Ananya Interiors Contact Us"/>
<meta name="keywords" content="Ananya Interiors,contact us, kitchen interiors, bedroom interiors, dining room interiors, balcony interiors,living room intriors,guest room interiors"/>
<title>Contact us @ Ananya Interiors</title>
  </Helmet>
  <Navbar/>

    <Box padding={'10px'} backgroundColor={'#FECC2A'}>
    <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}} justifyContent={'center'} alignItems={'center'}>
           <GridItem>
            <Image src="./contact.webp" />
           </GridItem>
           <GridItem>
           <Stack spacing={8} mx={'auto'}  py={5} px={2}  justifyContent={'center'} alignItems={'center'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} fontWeight={'bold'} color={'#E58000'}>
            Get in Touch
          </Heading>
          <Text fontSize={'2xl'} color={'black.600'} fontWeight={'bold'}>
         Design for Every Budget
          </Text>
        </Stack>
        <Box className="form">
        <form action="mailto:annanyainteriors@gmail.com" method="post" enctype="text/plain" autoComplete='off'>
   
    <input type="text" name="Name" placeholder="Name" required/><br/>
    <input type="number" name="contact number" placeholder='Contact Number' required min="10" max="10"/>
    <input type="text" name="city" placeholder='City' required/>
    <input type="email" name="email" placeholder="Your Email" required/><br/>
    
    <textarea name="body" rows="5" cols="30" placeholder="Your Message here" required></textarea><br/>
    <input type="submit" value="Send"  className='btn' style={{backgroundColor:'#E58000'}}/>
  </form>
  </Box>
      </Stack>
           </GridItem>
        </Grid>
        </Box>
       <Box padding={'10px'}>
       <Text fontSize={{base:'4xl',lg:'5xl'}} fontWeight={'bold'} color={'#FECC2A'} textAlign={'center'}>
        Contact Us
        </Text>
        <Box width={'70%'} margin={'auto'}>
        <Text fontSize={'3xl'} fontWeight={'bold'} color={'#E58000'}  >Call Us</Text>
                <Text fontSize={'md'}>We are always ready to help you.</Text>
                <Flex color={'#E58000'}  alignItems={'center'} gap={2}fontSize={'2xl'}><AiOutlinePhone/><Text>9035473892</Text></Flex>

                <Divider margin={'15px'}/>
                <Text fontSize={'3xl'} fontWeight={'bold'} color={'#E58000'} >Visit Us</Text>
                <Text fontSize={'md'}>You can reach our destination and check our plethora of designs </Text>
                <Flex color={'#E58000'}  alignItems={'center'} gap={2}   ><HiOutlineLocationMarker fontSize={'30px'}/><Text fontSize={'18px'}> ANANYA INTERIORS Kdathi panchayath office Huskur Road main Road off Sarjapur  Marathahalli Road Bengaluru Karnataka 560035 "</Text></Flex>
                <Divider  margin={'15px'}/>
                <Text fontSize={'3xl'} fontWeight={'bold'} color={'#E58000'} >Chat</Text>
                <Text fontSize={'md'}>Chat with us on Whatsapp we try to understand your need provide what you acutally want.</Text>
                <Flex color={'#E58000'}  alignItems={'center'} gap={2} fontSize={'2xl'}><BsWhatsapp/><Text>9035473892</Text></Flex>

        </Box>
        </Box>
        <Box marginTop={'20px'}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.321297934013!2d77.71459697425304!3d12.887049716728034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a6ec9583e1%3A0xc24ff3d629e0a378!2sAnanya%20interiors!5e0!3m2!1sen!2sin!4v1687762111952!5m2!1sen!2sin" width="100%" height="500px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
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

export default ContactUs