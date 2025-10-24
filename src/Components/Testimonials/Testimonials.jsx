import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MotionBox = motion(Box);

// Sample testimonials (could be replaced with props or fetched data)
const testimonialsData = [
  {
    name: 'Ali Hassan',
    role: 'Product Manager',
    ar_message: 'عمل رائع. الالتزام بالمواعيد والدقة في التفاصيل جعل من المشروع نجاحًا فعليًا.',
    en_message: 'Great work. The commitment to deadlines and accuracy in details make this project a success indeed.',
    rating: 5,
  },
  {
    name: 'Sara Ibrahim',
    role: 'CTO, Startup',
    ar_message: 'كود نظيف، واجهة مستخدم حديثة، وتواصل ممتاز. أنصح به بشدة للأعمال الشاملة.',
    en_message: 'Clean code, modern UI, and excellent communication. Highly recommend for full-scale projects.',
    rating: 5,
  },
  {
    name: 'Mohamed Adel',
    role: 'Founder',
    ar_message: 'التعاون مع المطور كان سلسًا واحترافيًا. النتائج فاقت التوقعات.',
    en_message: 'Collaboration with the developer was smooth and professional. The results exceeded expectations.',
    rating: 4,
  },
];

export default function Testimonials() {
  const { t , i18n} = useTranslation();
  const cardBg = useColorModeValue('white', 'gray.700');
  const accent = useColorModeValue('mocha.500', 'mocha.300');

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20} id="testimonials">
      <Container maxW="7xl">
        <VStack spacing={12}>
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
            >
              {i18n.language === 'en' ? t('testimonials.en_title') : t('testimonials.ar_title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="700px" mx="auto" mt={4}>
              {i18n.language === 'en' ? t('testimonials.en_subtitle') : t('testimonials.ar_subtitle')}
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
            {testimonialsData.map((item, idx) => (
              <MotionBox
                key={idx}
                bg={cardBg}
                p={6}
                borderRadius="16px"
                shadow="lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                _hover={{ transform: 'translateY(-6px)', shadow: '2xl' }}
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack spacing={4} align="center">
                    <Avatar name={item.name} size="md" />
                    <Box>
                      <Text fontWeight="700">{item.name}</Text>
                      <Text fontSize="sm" color="gray.500">{item.role}</Text>
                    </Box>
                    {/* <HStack ml="auto" spacing={1}>
                      <Badge colorScheme="mocha">{t()}</Badge>
                    </HStack> */}
                  </HStack>

                  <Text color="gray.600" lineHeight="1.8">{ i18n.language === 'en' ? item.en_message : item.ar_message}</Text>

                  <HStack spacing={1}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} as={FaStar} color={i < item.rating ? accent : 'gray.200'} />
                    ))}
                  </HStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
