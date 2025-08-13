import React from 'react';
import { 
  Box, 
  Container,
  Stack, 
  Text, 
  IconButton, 
  Link, 
  VStack,
  HStack,
  Divider,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Flex
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const socialLinks = [
  { 
    icon: FaGithub, 
    url: 'https://github.com/Abdullatif-Mostafa',
    label: 'GitHub',
    color: 'gray.700'
  },
  { 
    icon: FaLinkedin, 
    url: 'https://www.linkedin.com/in/abdullatif-moustafa-1b6322248',
    label: 'LinkedIn',
    color: 'blue.600'
  },
  { 
    icon: FaTwitter, 
    url: 'https://twitter.com/AbdullatifMous3',
    label: 'Twitter',
    color: 'blue.400'
  },
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/profile.php?id=100047386332222&mibextid=kFxxJD',
    label: 'Facebook',
    color: 'blue.500'
  }
];

const quickLinks = [
  { name: 'الرئيسية', to: 'hero' },
  { name: 'نبذة عني', to: 'about' },
  { name: 'أعمالي', to: 'projects' },
  { name: 'مهاراتي', to: 'skills' },
  { name: 'تواصل معي', to: 'contact' }
];

const Footer = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900');
  const textColor = useColorModeValue('gray.300', 'gray.300');
  const headingColor = useColorModeValue('white', 'white');

  return (
    <Box bg={bgColor} color={textColor} pt={16} pb={8}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={12}>
          {/* Brand Section */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h3" size="lg" color={headingColor} fontWeight="bold">
              عبد اللطيف مصطفى
            </Heading>
            <Text fontSize="sm" lineHeight="tall">
              مطور ويب شغوف متخصص في بناء تطبيقات ومواقع ويب حديثة باستخدام أحدث التقنيات.
            </Text>
            <HStack spacing={1} align="center">
              <Text fontSize="sm">صُنع بـ</Text>
              <FaHeart color="#e53e3e" size="12px" />
              <Text fontSize="sm">و</Text>
              <FaCode color="#3182ce" size="12px" />
              <Text fontSize="sm">في مصر</Text>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor} fontWeight="semibold">
              روابط سريعة
            </Heading>
            <VStack align="flex-start" spacing={2}>
              {quickLinks.map((link, index) => (
                <MotionBox
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                  >
                    <Link
                      fontSize="sm"
                      _hover={{ 
                        color: 'mocha.400',
                        textDecoration: 'none'
                      }}
                      cursor="pointer"
                      transition="all 0.2s ease"
                    >
                      {link.name}
                    </Link>
                  </ScrollLink>
                </MotionBox>
              ))}
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor} fontWeight="semibold">
              الخدمات
            </Heading>
            <VStack align="flex-start" spacing={2}>
              {[
                'تطوير مواقع الويب',
                'تطوير تطبيقات الويب',
                'تصميم واجهات المستخدم',
                'استشارات تقنية',
                'صيانة وتطوير'
              ].map((service, index) => (
                <Text key={index} fontSize="sm" _hover={{ color: 'mocha.400' }} cursor="default">
                  {service}
                </Text>
              ))}
            </VStack>
          </VStack>

          {/* Contact & Social */}
          <VStack align="flex-start" spacing={4}>
            <Heading as="h4" size="md" color={headingColor} fontWeight="semibold">
              تواصل معي
            </Heading>
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="sm">
                📧 abdellatyfmostafa8@gmail.com

              </Text>
              <Text fontSize="sm">
                📱 +20 01032558781
              </Text>
              <Text fontSize="sm">
                📍 القاهرة، مصر
              </Text>
            </VStack>
            
            {/* Social Media Links */}
            <Box>
              <Text fontSize="sm" mb={3} fontWeight="semibold">
                تابعني على:
              </Text>
              <HStack spacing={3}>
                {socialLinks.map((social, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      as="a"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<social.icon />}
                      size="sm"
                      variant="ghost"
                      color="gray.400"
                      _hover={{ 
                        color: social.color,
                        bg: 'gray.800'
                      }}
                      aria-label={social.label}
                      transition="all 0.3s ease"
                    />
                  </MotionBox>
                ))}
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="gray.700" mb={8} />

        {/* Bottom Section */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
            © {new Date().getFullYear()} عبد اللطيف مصطفى. جميع الحقوق محفوظة.
          </Text>
          
          <HStack spacing={6} fontSize="sm">
            <Link 
              href="#" 
              _hover={{ color: 'mocha.400' }}
              transition="color 0.2s ease"
            >
              سياسة الخصوصية
            </Link>
            <Link 
              href="#" 
              _hover={{ color: 'mocha.400' }}
              transition="color 0.2s ease"
            >
              شروط الاستخدام
            </Link>
          </HStack>
        </Flex>

        {/* Decorative Elements */}
        <Box position="relative" mt={8}>
          <Box
            position="absolute"
            top="-20px"
            left="50%"
            transform="translateX(-50%)"
            w="100px"
            h="2px"
            bg="linear-gradient(90deg, transparent, #D69E2E, transparent)"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
