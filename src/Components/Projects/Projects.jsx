import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  SimpleGrid,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import image1 from '../../Assets/Images/Screenshot 2024-10-08 001708.png';
import image2 from '../../Assets/Images/Screenshot 2024-10-08 001544.png';
import image3 from '../../Assets/Images/Screenshot 2024-10-08 001305.png';
import image4 from '../../Assets/Images/Screenshot 2024-10-08 022244.png';
import image5 from '../../Assets/Images/Screenshot 2024-10-08 023657.png';
import image6 from '../../Assets/Images/Screenshot 2024-10-09 175347.png';
import image7 from '../../Assets/Images/Screenshot 2024-10-09 150933.png';
import image8 from '../../Assets/Images/Screenshot 2024-10-10 144029.png';

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
      'Developed a responsive Familly Breakery responsive website for selling a lot of types of delicious breads.',
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
    link: 'https://surian-restaurant.vercel.app/',
  },
  {
    title: 'Gusto Restaurant',
    description:
      'Developed a responsive restaurant website for making real food from the best ingredients.',
    image: image6,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React JS',"React Bootstrap"],
    link: 'https://gusto-itali.surge.sh/',
  },
  {
    title: 'Unifox Website',
    description:
      'Developed a responsive Unifox website for managing your business.',
    image: image7,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://unifox.vercel.app/',
  },
  {
    title: 'Iphone Design ',
    description:'Developed a responsive Iphone Design',
    image: image8,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link:'https://iphon-15-pro-max.vercel.app/',
  },
];
// Create a motion-enabled Box component
const MotionBox = motion(Box);

export default function Projects() {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
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
      <SimpleGrid columns={columns} spacing={10}>
        {projects.map((project, index) => (
          <AnimatedProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

// Separate component for animated project cards
const AnimatedProjectCard = ({ project }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Animate only once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
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
          <Text fontSize={'sm'}>
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
    </MotionBox>
  );
};
