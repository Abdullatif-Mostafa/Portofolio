import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

// CSS animations as strings
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
`;

const gradientShiftAnimation = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Hero = () => {
  const { t } = useTranslation();
  const bgGradient = useColorModeValue(
    'linear(to-br, mocha.50, gray.100, mocha.100)',
    'linear(to-br, gray.900, mocha.900, gray.800)'
  );

  const textGradient = 'linear(to-r, mocha.500, mocha.700, accent.500)';

  return (
    <>
      <style>{floatAnimation}</style>
      <style>{gradientShiftAnimation}</style>
      <Box
        minH="100vh"
        bgGradient={bgGradient}
        position="relative"
        overflow="hidden"
        id="hero"
      >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        backgroundImage={`url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
      />

      <Container maxW="7xl" h="100vh" position="relative">
        <Flex
          h="100%"
          align="center"
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
        >
          {/* Left Content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={6}
            flex="1"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <MotionText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              fontSize="lg"
              color="mocha.600"
              fontWeight="500"
              letterSpacing="wide"
            >
              {t('hero.greeting')}
            </MotionText>

            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              as="h1"
              size="3xl"
              bgGradient={textGradient}
              bgClip="text"
              fontWeight="800"
              lineHeight="1.2"
              sx={{
                animation: 'gradientShift 3s ease infinite',
                backgroundSize: '200% 200%',
              }}
            >
              {t('hero.name')}
            </MotionHeading>

            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              as="h2"
              size="xl"
              color="gray.600"
              fontWeight="600"
            >
              {t('hero.title')}
            </MotionHeading>

            <MotionText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              fontSize="lg"
              color="gray.600"
              maxW="500px"
              lineHeight="1.8"
            >
              {t('hero.description')}
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <HStack spacing={4} justify={{ base: 'center', lg: 'flex-start' }}>
                <Button
                  size="lg"
                  variant="solid"
                  leftIcon={<FaEnvelope />}
                  as="a"
                  href="#contact"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(166, 146, 110, 0.3)',
                  }}
                >
                  {t('hero.contactBtn')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  as="a"
                  href="#projects"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(166, 146, 110, 0.2)',
                  }}
                >
                  {t('hero.projectsBtn')}
                </Button>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <HStack spacing={4} justify={{ base: 'center', lg: 'flex-start' }}>
                <Button
                  variant="ghost"
                  size="lg"
                  leftIcon={<FaGithub />}
                  as="a"
                  href="https://github.com/Abdullatif-Mostafa"
                  target="_blank"
                  color="gray.600"
                  _hover={{ color: 'mocha.500', bg: 'mocha.50' }}
                >
                  GitHub
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  leftIcon={<FaLinkedin />}
                  as="a"
                  href="#"
                  target="_blank"
                  color="gray.600"
                  _hover={{ color: 'mocha.500', bg: 'mocha.50' }}
                >
                  LinkedIn
                </Button>
              </HStack>
            </MotionBox>
          </VStack>

          {/* Right Content - Profile Image */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              position="relative"
              sx={{ animation: 'float 6s ease-in-out infinite' }}
            >
              {/* Decorative circles */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                w="100px"
                h="100px"
                borderRadius="full"
                bg="mocha.200"
                opacity="0.3"
                sx={{ animation: 'float 4s ease-in-out infinite reverse' }}
              />
              <Box
                position="absolute"
                bottom="-30px"
                left="-30px"
                w="80px"
                h="80px"
                borderRadius="full"
                bg="accent.200"
                opacity="0.3"
                sx={{ animation: 'float 5s ease-in-out infinite' }}
              />
              
              {/* Profile Image Container */}
              <Box
                w={{ base: '280px', md: '350px', lg: '400px' }}
                h={{ base: '280px', md: '350px', lg: '400px' }}
                borderRadius="full"
                overflow="hidden"
                boxShadow="0 20px 40px rgba(0,0,0,0.1)"
                border="4px solid"
                borderColor="white"
                bg="gradient-to-br from-mocha-100 to-mocha-200"
                position="relative"
              >
                <Image
                  src="/api/placeholder/400/400"
                  alt={t('hero.name')}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  fallback={
                    <Flex
                      w="100%"
                      h="100%"
                      align="center"
                      justify="center"
                      bg="mocha.100"
                      fontSize="6xl"
                      color="mocha.500"
                    >
                      👨‍💻

                    </Flex>
                  }
                />
              </Box>
            </Box>
          </MotionBox>
        </Flex>

        {/* Scroll Indicator */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          position="absolute"
          bottom="30px"
          left="50%"
          transform="translateX(-50%)"
          cursor="pointer"
          as="a"
          href="#about"
        >
          <VStack spacing={2}>
            <Text fontSize="sm" color="gray.500">
              {i18n.language === 'en' ? 'Scroll Down' : 'انتقل إلى الأسفل'}
            </Text>
            <Icon
              as={FaArrowDown}
              color="mocha.500"
              sx={{ animation: 'float 2s ease-in-out infinite' }}
            />
          </VStack>
        </MotionBox>
      </Container>
      </Box>
    </>
  );
};

export default Hero;

