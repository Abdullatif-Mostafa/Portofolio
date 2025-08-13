import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  useToast,
  useColorModeValue,
  Text,
  Icon,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Replace with your form submission logic (e.g., email service, backend API)
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'تم إرسال الرسالة بنجاح',
        description: "شكراً لك على التواصل معي. سأقوم بالرد عليك في أقرب وقت ممكن.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'البريد الإلكتروني',
      value: 'abdullatif.mostafa@example.com',
      color: 'blue.500'
    },
    {
      icon: FaPhone,
      title: 'الهاتف',
      value: '+20 123 456 7890',
      color: 'green.500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'الموقع',
      value: 'القاهرة, مصر',
      color: 'red.500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Abdullatif-Mostafa', color: 'gray.700' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdullatif-moustafa-1b6322248', color: 'blue.600' },
    { icon: FaTwitter, href: 'https://twitter.com/AbdullatifMous3', color: 'blue.400' },
  ];

  return (
    <Box bg={bgColor} py={20} id="contact">
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
              تواصل معي
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} w="100%">
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VStack align="flex-start" spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4} color="gray.800">
                    معلومات التواصل
                  </Heading>
                  <Text color="gray.600" mb={8}>
                    يمكنك التواصل معي من خلال أي من الطرق التالية. سأكون سعيداً للحديث معك حول مشروعك القادم.
                  </Text>
                </Box>

                <VStack spacing={6} align="flex-start" w="100%">
                  {contactInfo.map((info, index) => (
                    <MotionBox
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      w="100%"
                    >
                      <HStack spacing={4} p={4} bg={cardBg} borderRadius="12px" shadow="sm">
                        <Flex
                          w={12}
                          h={12}
                          bg={`${info.color.split('.')[0]}.50`}
                          borderRadius="full"
                          align="center"
                          justify="center"
                        >
                          <Icon as={info.icon} w={6} h={6} color={info.color} />
                        </Flex>
                        <Box>
                          <Text fontWeight="semibold" color="gray.800" mb={1}>
                            {info.title}
                          </Text>
                          <Text color="gray.600" fontSize="sm">
                            {info.value}
                          </Text>
                        </Box>
                      </HStack>
                    </MotionBox>
                  ))}
                </VStack>

                {/* Social Links */}
                <Box w="100%">
                  <Text fontWeight="semibold" color="gray.800" mb={4}>
                    تابعني على وسائل التواصل
                  </Text>
                  <HStack spacing={4}>
                    {socialLinks.map((social, index) => (
                      <MotionBox
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Flex
                          as="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          w={12}
                          h={12}
                          bg={cardBg}
                          borderRadius="full"
                          align="center"
                          justify="center"
                          shadow="md"
                          transition="all 0.3s ease"
                          _hover={{
                            shadow: 'lg',
                            bg: `${social.color.split('.')[0]}.50`,
                          }}
                        >
                          <Icon as={social.icon} w={5} h={5} color={social.color} />
                        </Flex>
                      </MotionBox>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="20px"
                shadow="xl"
                transition="all 0.3s ease"
                _hover={{ shadow: '2xl' }}
              >
                <Heading as="h3" size="lg" mb={6} color="gray.800">
                  أرسل رسالة
                </Heading>
                
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <FormControl id="name" isRequired>
                      <FormLabel color="gray.700" fontWeight="semibold">
                        الاسم *
                      </FormLabel>
                      <Input
                        type="text"
                        name="name"
                        placeholder="اسمك الكامل"
                        value={formData.name}
                        onChange={handleChange}
                        bg="gray.50"
                        border="2px solid transparent"
                        borderRadius="12px"
                        py={6}
                        _focus={{
                          borderColor: 'mocha.500',
                          bg: 'white',
                          shadow: 'md',
                        }}
                        _hover={{ borderColor: 'gray.300' }}
                      />
                    </FormControl>

                    <FormControl id="email" isRequired>
                      <FormLabel color="gray.700" fontWeight="semibold">
                        البريد الإلكتروني *
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        bg="gray.50"
                        border="2px solid transparent"
                        borderRadius="12px"
                        py={6}
                        _focus={{
                          borderColor: 'mocha.500',
                          bg: 'white',
                          shadow: 'md',
                        }}
                        _hover={{ borderColor: 'gray.300' }}
                      />
                    </FormControl>

                    <FormControl id="message" isRequired>
                      <FormLabel color="gray.700" fontWeight="semibold">
                        الرسالة *
                      </FormLabel>
                      <Textarea
                        name="message"
                        placeholder="اكتب رسالتك هنا..."
                        value={formData.message}
                        onChange={handleChange}
                        bg="gray.50"
                        border="2px solid transparent"
                        borderRadius="12px"
                        minH="120px"
                        resize="vertical"
                        _focus={{
                          borderColor: 'mocha.500',
                          bg: 'white',
                          shadow: 'md',
                        }}
                        _hover={{ borderColor: 'gray.300' }}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="mocha"
                      size="lg"
                      width="full"
                      isLoading={isSubmitting}
                      loadingText="جاري الإرسال..."
                      borderRadius="12px"
                      py={6}
                      fontSize="md"
                      fontWeight="semibold"
                      _hover={{
                        transform: 'translateY(-2px)',
                        shadow: 'lg',
                      }}
                      transition="all 0.3s ease"
                    >
                      إرسال الرسالة
                    </Button>
                  </VStack>
                </form>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
