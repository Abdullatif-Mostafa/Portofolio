import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Flex,
  Badge
} from '@chakra-ui/react';
import { FaCode, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import image1 from '../../Assets/Images/contentImage.png';

const MotionBox = motion(Box);

export default function About() {
  const { t } = useTranslation();
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  const skills = [
    { icon: FaCode, title: t('about.frontend.title'), desc: t('about.frontend.description') },
    { icon: FaServer, title: t('about.backend.title'), desc: t('about.backend.description') },
    { icon: FaDatabase, title: t('about.database.title'), desc: t('about.database.description') },
    { icon: FaMobile, title: t('about.responsive.title'), desc: t('about.responsive.description') }
  ];

  return (
    <Box bg={bgColor} py={20} id="about">
      <Container maxW="7xl">
        <VStack spacing={16}>
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Heading
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, mocha.500, mocha.700)"
              bgClip="text"
              fontWeight="800"
              mb={4}
            >
              {t('about.title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              {t('about.subtitle')}
            </Text>
          </MotionBox>

          {/* Main Content */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            {/* Left Side - Image */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              display="flex"
              justifyContent="center"
            >
              <Box position="relative">
                {/* Decorative background */}
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  w="300px"
                  h="300px"
                  borderRadius="full"
                  bgGradient="linear(to-br, mocha.200, accent.200)"
                  opacity="0.3"
                  zIndex="0"
                />
                <Avatar
                  size="2xl"
                  src={image1}
                  alt={t('hero.name')}
                  w={{ base: '250px', md: '300px' }}
                  h={{ base: '250px', md: '300px' }}
                  border="6px solid white"
                  shadow="2xl"
                  position="relative"
                  zIndex="1"
                />
              </Box>
            </MotionBox>

            {/* Right Side - Content */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VStack align="flex-start" spacing={6}>
                <Heading as="h3" size="xl" color="gray.800">
                  {t('about.mainTitle')}
                </Heading>
                
                <Text fontSize="lg" color="gray.600" lineHeight="1.8">
                  {t('about.description')}
                </Text>

                <HStack spacing={4} flexWrap="wrap">
                  <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                    +2 {t('hero.experience')}
                  </Badge>
                  <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                    +16 {t('hero.projectsCount')}
                  </Badge>
                  <Badge colorScheme="purple" px={3} py={1} borderRadius="full">
                    {t('hero.fullStack')}
                  </Badge>
                </HStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>

          {/* Skills Grid */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            w="100%"
          >
            <Heading as="h3" size="lg" textAlign="center" mb={8} color="gray.800">
              {t('about.specializations')}
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {skills.map((skill, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Box
                    bg={cardBg}
                    p={6}
                    borderRadius="16px"
                    shadow="md"
                    textAlign="center"
                    transition="all 0.3s ease"
                    _hover={{
                      shadow: 'xl',
                      transform: 'translateY(-4px)',
                    }}
                  >
                    <Flex justify="center" mb={4}>
                      <Icon
                        as={skill.icon}
                        w={8}
                        h={8}
                        color="mocha.500"
                      />
                    </Flex>
                    <Heading as="h4" size="md" mb={2} color="gray.800">
                      {skill.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {skill.desc}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}
