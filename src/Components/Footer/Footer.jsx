import React from 'react';
import { Box, chakra, Stack, Text, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/Abdullatif-Mostafa' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/abdullatif-moustafa-1b6322248' },
  { icon: FaTwitter, url: 'https://twitter.com/AbdullatifMous3' },
  {icon:FaFacebook,url:'https://www.facebook.com/profile.php?id=100047386332222&mibextid=kFxxJD'}
];

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={6} mt={10}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        maxW="6xl"
        mx="auto"
        px={4}
      >
        {/* Footer Navigation */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
          {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
            <ScrollLink
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none', bg: 'gray.600' }}
                cursor="pointer"
              >
                {link}
              </Link>
            </ScrollLink>
          ))}
        </Stack>

        {/* Social Media Links */}
        <Stack direction="row" spacing={3}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              as="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              icon={<social.icon   />}
              size="lg"
              color="white"
              bg="teal.600"
           
              _hover={{ bg: 'teal.700' }}
              aria-label={social.url.split('//')[1]}
            />
          ))}
        </Stack>
      </Stack>

      {/* Copyright Text */}
      <Text textAlign="center" mt={6} fontSize="sm">
        © {new Date().getFullYear()} Abdullatif Mostafa. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
