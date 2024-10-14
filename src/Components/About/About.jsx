import React from 'react';
import { Box, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';
import image1 from '../../Assets/Images/contentImage.png'
export default function About() {
  return (
    <Box
      id="about"
      maxW={'800px'}
      mx={'auto'}
      px={4}
      py={10}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      rounded={'lg'}
      my={6}
    >
      <Stack direction={['column', 'row']} spacing={8}>
        <Avatar
          size={'2xl'}
          src={image1} // Replace with your image
          alt={'Your Name'}
        />
        <Box>
          <Heading>About Me</Heading>
          <Text mt={4} fontSize={'lg'}>
            I'm a passionate Full Stack Web Developer with expertise in Node.js and React.js.
            I build robust, scalable websites and services, focusing on both frontend and backend development.
            Experienced in eCommerce and logistics platforms, delivering high-performing and user-centric solutions.
            I'm dedicated to solving complex problems and continuously improving user experiences.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
