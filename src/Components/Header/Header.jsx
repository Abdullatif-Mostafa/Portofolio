import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Button,
  useColorModeValue,
  Container,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const MotionBox = motion(Box);

const NavLink = ({ children, to, onClick }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}
    onClick={onClick}
  >
    <Button
      variant="ghost"
      size="md"
      fontWeight="500"
      color="gray.700"
      _hover={{
        color: 'mocha.600',
        bg: 'mocha.50',
        transform: 'translateY(-1px)',
      }}
      _active={{
        color: 'mocha.700',
        bg: 'mocha.100',
      }}
      transition="all 0.2s ease"
      borderRadius="lg"
      px={4}
      py={2}
    >
      {children}
    </Button>
  </ScrollLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const Links = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.projects'), to: 'projects' },
    { name: t('nav.skills'), to: 'skills' },
    { name: t('nav.contact'), to: 'contact' }
  ];

  const bg = useColorModeValue(
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)',
    scrolled ? 'rgba(26, 32, 44, 0.95)' : 'rgba(26, 32, 44, 0.1)'
  );

  const borderColor = useColorModeValue(
    scrolled ? 'gray.200' : 'transparent',
    scrolled ? 'gray.700' : 'transparent'
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MotionBox
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        position="fixed"
        width="100%"
        zIndex={1000}
        bg={bg}
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor={borderColor}
      // transition="all 0.3s ease"
      >
        <Container maxW="7xl">
          <Flex h={20} alignItems="center" justifyContent="space-between">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              position="relative"
              ml={{ base: 0, md: -4 }}
            >
              <HStack spacing={3} align="center">

                <MotionBox
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Heading
                    size={{ base: "md", md: "lg" }}
                    bgGradient="linear(135deg, mocha.600, mocha.800)"
                    bgClip="text"
                    fontWeight="800"
                    cursor="pointer"
                    display={{ base: "none", sm: "block" }}
                    letterSpacing="tight"
                    _hover={{
                      bgGradient: "linear(135deg, mocha.500, mocha.700)",
                    }}
                    transition="all 0.3s"
                  >
                    {t('hero.name').split(' ')[0]}
                  </Heading>
                </MotionBox>
              </HStack>
            </MotionBox>

            <HStack
              as="nav"
              spacing={1}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, index) => (
                <MotionBox
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <NavLink to={link.to}>
                    {link.name}
                  </NavLink>
                </MotionBox>
              ))}

              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                ml={4}
              >
                <LanguageSwitcher />
              </MotionBox>
            </HStack>

            <Image
              fallback={
                <Flex
                align="center"
                justify="center"
                bg="mocha.100"
                fontSize="45px"
                color="mocha.500"
                display={{ base: "none", sm: "none" , md: "block" }}
                  borderRadius="md"
                >
                  👨‍💻
                </Flex>
              }
            />
            {/* munu */}
            <HStack display={{ lg: 'none' }} >
              {/* <Box display={{ base: 'none', md: 'none' , lg: 'none' }}>
                <LanguageSwitcher />
              </Box> */}
              <IconButton
                size="lg"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label="فتح القائمة"
                display={{ md: 'none', lg: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                variant="ghost"
                color="gray.700"
                _hover={{
                  bg: 'mocha.50',
                  color: 'mocha.600',
                }}
              />
            </HStack>
          </Flex>
        </Container>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              display={{ md: 'none' }}
              bg="white"
              borderTop="1px solid"
              borderColor="gray.200"
              shadow="lg"
            >
              <Container maxW="7xl">
                <Stack spacing={2} py={4}>
                  {Links.map((link) => (
                    <NavLink key={link.name} to={link.to} onClick={onClose}>
                      {link.name}
                    </NavLink>
                  ))}
                  <Box display={{ base: 'block', md: 'none', lg: 'none' }}>
                    <LanguageSwitcher />
                  </Box>
                </Stack>
              </Container>
            </MotionBox>
          )}
        </AnimatePresence>
      </MotionBox>

      {/* Spacer */}
      <Box h="20" />
    </>
  );
};
export default Header;