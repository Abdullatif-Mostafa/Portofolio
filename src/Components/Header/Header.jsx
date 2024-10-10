import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Links = ['About', 'Projects', 'Skills', 'Contact'];

const NavLink = ({ children, to }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-70} // Adjust based on header height
  >
    <Box
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
         bg: 'teal.600' 
        // bg: 'gray.200',
      }}
      cursor="pointer"
    >
      {children}
    </Box>
  </ScrollLink>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="teal.500" px={4} position="fixed" width="100%" zIndex={100}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading size="md" color="white">
              Abdullatif Mostafa
            </Heading>
          </Box>
          <Flex alignItems={'center'}>
            <HStack
              fontSize={'19px'}
              as={'nav'}
              color="gray.100"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              
            >
              {Links.map((link) => (
                <NavLink  key={link} to={link.toLowerCase()}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon style={{width:"30px",height:"25px"}} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bg="teal.500"
            _hover={{ bg: 'teal.600' }}
          />
        </Flex>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                  {Links.map((link) => (
                    <NavLink key={link} to={link.toLowerCase()}>
                      {link}
                    </NavLink>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <Box h="16" />
    </>
  );
}
