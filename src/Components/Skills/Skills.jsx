import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiChakraui, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redux', icon: SiRedux },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'Databases', icon: FaDatabase },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <Box
      id="skills"
      maxW={'800px'}
      mx={'auto'}
      px={4}
      py={10}
    >
      <Heading mb={6} textAlign="center">
        Skills
      </Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={6}>
        {skills.map((skill, index) => (
          <VStack key={index} spacing={2}>
            <Icon as={skill.icon} w={12} h={12} color="teal.500" />
            <Text fontSize="md" fontWeight="medium">
              {skill.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
