import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiTailwindcss,
  // SiTypescript,
  SiMaterialui,
  SiWebpack,
} from 'react-icons/si';
import {  } from 'react-icons/si';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Expanded skills array with additional skills
const skills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redux', icon: SiRedux },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Docker', icon: FaDocker },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Webpack', icon: SiWebpack },
  // Add more skills as needed
];

// Create a motion-enabled VStack component
const MotionVStack = motion(VStack);

export default function Skills() {
  // Determine responsive grid columns
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4 });

  return (
    <Box
      id="skills"
      maxW={'1000px'} // Increased max width to accommodate more skills
      mx={'auto'}
      px={4}
      py={10}
    >
      <Heading mb={6} textAlign="center">
        Skills
      </Heading>
      <SimpleGrid columns={columns} spacing={6}>
        {skills.map((skill, index) => (
          <AnimatedSkillCard key={index} skill={skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

// Separate component for animated skill cards
const AnimatedSkillCard = ({ skill }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Animate only once
  });

  React.useEffect(() => {
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
    <MotionVStack
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      spacing={2}
      align="center"
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={4}
      rounded="md"
      shadow="md"
      whileHover={{ scale: 1.05 }}
    >
      <Icon as={skill.icon} w={12} h={12} color="teal.500" />
      <Text fontSize="md" fontWeight="medium">
        {skill.name}
      </Text>
    </MotionVStack>
  );
};
