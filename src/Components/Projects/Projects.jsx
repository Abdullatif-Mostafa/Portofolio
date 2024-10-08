import React from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  SimpleGrid,
  Button,
//   useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import image1 from '../../Assets/Images/Screenshot 2024-10-08 001708.png'
import image2 from '../../Assets/Images/Screenshot 2024-10-08 001544.png'
import image3 from '../../Assets/Images/Screenshot 2024-10-08 001305.png'
import image4 from '../../Assets/Images/Screenshot 2024-10-08 022244.png'
import image5 from '../../Assets/Images/Screenshot 2024-10-08 023657.png'

const projects = [
  {
    title: 'Social Website',
    description:
      'Developed a full-stack social networking platform allowing users to create posts, connect with friends, and interact through comments.',
    image: image1, // Replace with your project image
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Chakra UI', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://social-aapp.vercel.app/',
  },
  {
    title: 'Ecommerce Website',
    description:
      'Built a fully functional eCommerce platform with user authentication, product browsing, and cart management.',
    image: image2,
    technologies: ['Node.js', 'React.js', 'Redux', 'MongoDB', 'Bootstrap', 'Express.js'],
    link: 'https://sales-gules.vercel.app/',
  },
  {
    title: 'Furniture Transport Platform',
    description:
      'Developed a responsive frontend platform for users to connect with transport services specifically for moving furniture.',
    image: image3,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://furniture-eaccd.firebaseapp.com',
  },
  {
    title: 'Familly Breakery',
    description:
      'Developed a responsive Familly Breakery responsive website for selling alot of types of delicious breads.',
    image: image4,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React JS',"React Bootstrap"],
    link: 'https://abdullatif-mostafa.github.io/Bread-Store/',
  },
  {
    title: 'Foodera Restaurant',
    description:
      'Developed a responsive restaurant website for making real food from the best ingredients.',
    image: image5,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React JS',"React Bootstrap"],
    link: 'https://surian.surge.sh/',
  },
  
];

export default function Projects() {
  return (
    <Box
      id="projects"
      maxW={'1200px'}
      mx={'auto'}
      px={4}
      py={10}
    >
      <Heading mb={6} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project, index) => (
          <Box
            key={index}
            // bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'md'}
            rounded={'lg'}
            overflow={'hidden'}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.0145)' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              height="200px"
              width="100%"
            />
            <Box p={6}>
              <Stack spacing={2}>
                <Heading size="md">{project.title}</Heading>
                <Text fontSize={'sm'} 
                // color={useColorModeValue('gray.600', 'gray.400')}
                >
                  {project.description}
                </Text>
                <Text fontSize={'sm'} color="teal.500">
                  Technologies: {project.technologies.join(', ')}
                </Text>
                <Link href={project.link} isExternal>
                  <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal" variant="outline">
                    View Project
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
