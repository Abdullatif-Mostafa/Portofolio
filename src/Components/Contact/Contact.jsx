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
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);

export default function Contact() {
  const { t , i18n} = useTranslation();
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
      title_ar: 'البريد الإلكتروني',
      title_en:"Email",
      value: 'abdullatif.mostafa@example.com',
      color: 'blue.500'
    },
    {
      icon: FaPhone,
      title_ar: 'الهاتف',
      title_en: "Phone",
      value: '+20 01032558781',
      color: 'green.500'
    },
    {
      icon: FaMapMarkerAlt,
      title_ar: 'الموقع',
      title_en: "Location",
      value_ar: 'القاهرة, مصر',
      value_en: 'Cairo, Egypt',
      color: 'red.500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Abdullatif-Mostafa', color: 'gray.700' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdullatif-moustafa-1b6322248', color: 'blue.600' },
    { icon: FaTwitter, href: 'https://twitter.com/AbdullatifMous3', color: 'blue.400' },
  ];

  const contactDetails = contactInfo.map(info => ({
    ...info,
    title:i18n.language === 'ar' ? 'تواصل معي' : 'Contact Me',
    phone: i18n.language === 'ar' ? 'الهاتف' : 'Phone',
    email: i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email',
    location: i18n.language === 'ar' ? 'الموقع' : 'Location',
    locationValue: i18n.language === 'ar' ? 'القاهرة, مصر' : 'Cairo, Egypt',
    socialMedia: i18n.language === 'ar' ? 'تابعني على وسائل التواصل' : 'Follow me on social media',
    form: {
      title: i18n.language === 'ar' ? 'أرسل رسالة' : 'Send Message',
      name: i18n.language === 'ar' ? 'الاسم' :  'Name',
      namePlaceholder: i18n.language === 'ar' ? 'اسمك الكامل' : 'Your full name',
      email: i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      emailPlaceholder: i18n.language === 'ar' ? '  البريد الإلكتروني' : 'Your email address',
      message: i18n.language === 'ar' ? 'الرسالة' : 'Message',
      messagePlaceholder: i18n.language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...',
      send: i18n.language === 'ar' ? 'إرسال الرسالة' : 'Send Message',
      sending: i18n.language === 'ar' ? 'جاري الإرسال...' : 'Sending...',
      success: i18n.language === 'ar' ? 'تم إرسال الرسالة بنجاح' : 'Message sent successfully',
      successDescription: i18n.language === 'ar' 
        ? 'شكراً لك على التواصل معي. سأقوم بالرد عليك في أقرب وقت ممكن.'
        : 'Thank you for contacting me. I will get back to you as soon as possible.'
    }
  }));
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
              {t('contact.title')}
              {/* تواصل معي */}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              {t('contact.subtitle')}
              {/* هل لديك مشروع في ذهنك؟ دعنا نتحدث ونحوله إلى واقع */}
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
                    {t('contact.info')}
                    {/* معلومات التواصل */}
                  </Heading>
                  <Text color="gray.600" mb={8}>
                    {t('contact.infoDescription')}
                    {/* يمكنك التواصل معي من خلال أي من الطرق التالية. سأكون سعيداً للحديث معك حول مشروعك القادم. */}
                  </Text>
                </Box>

                <VStack spacing={6} align="flex-start" w="100%">
                  {contactDetails.map((info, index) => (
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
                            {i18n.language === 'ar' ? info.title_ar : info.title_en}
                            {/* {t('info.title')} */}
                          </Text>
                          <Text color="gray.600" fontSize="sm">
                            {i18n.language === 'ar' ? info.value_ar || info.value : info.value_en || info.value}
                          </Text>
                        </Box>
                      </HStack>
                    </MotionBox>
                  ))}
                </VStack>

                {/* Social Links */}
                <Box w="100%">
                  <Text fontWeight="semibold" color="gray.800" mb={4}>
                    {t('contact.socialMedia')}
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
                  {i18n.language === 'ar' ? 'أرسل رسالة' : 'Send Message'}
                </Heading>                
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <FormControl id="name" isRequired>
                      <FormLabel color="gray.700" fontWeight="semibold">
                        {i18n.language === 'ar' ? 'الاسم ' : 'Name '}
                        {/* الاسم * */}
                      </FormLabel>
                      <Input
                        type="text"
                        name="name"
                        placeholder={i18n.language === 'ar' ? 'اسمك' : 'Your Name'}
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
                        {i18n.language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </FormLabel>
                      <Input
                        type="email"
                        name="email"
                        placeholder={i18n.language === 'ar' ? 'البريد الإلكتروني الخاص بك' : 'Your Email'}
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
                        {i18n.language === 'ar' ? 'الرسالة' : 'Message'}
                      </FormLabel>
                      <Textarea
                        name="message"
                        placeholder={i18n.language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
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
                      loadingText= {i18n.language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
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
                      {i18n.language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
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
