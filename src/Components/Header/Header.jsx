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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const Links = [
  { name: 'الرئيسية', to: 'hero' },
  { name: 'نبذة عني', to: 'about' },
  { name: 'أعمالي', to: 'projects' },
  { name: 'مهاراتي', to: 'skills' },
  { name: 'تواصل معي', to: 'contact' }
];

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
      cursor="pointer"
      transition="all 0.2s"
    >
      {children}
    </Button>
  </ScrollLink>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

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
        transition="all 0.3s ease"
      >
        <Container maxW="7xl">
          <Flex h={20} alignItems="center" justifyContent="space-between">
            {/* Logo */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading
                size="lg"
                bgGradient="linear(to-r, mocha.500, mocha.700)"
                bgClip="text"
                fontWeight="800"
                cursor="pointer"
                _hover={{
                  transform: 'scale(1.05)',
                }}
                transition="transform 0.2s"
              >
                عبد اللطيف
              </Heading>
            </MotionBox>

            {/* Desktop Navigation */}
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
            </HStack>

            {/* Mobile menu button */}
            <IconButton
              size="lg"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="فتح القائمة"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="gray.700"
              _hover={{
                bg: 'mocha.50',
                color: 'mocha.600',
              }}
            />
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
}
