import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Link,
  SimpleGrid,
  Button,
  useBreakpointValue,
  useColorModeValue,
  VStack,
  HStack,
  Badge,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import image1 from '../../Assets/Images/Screenshot 2024-10-08 001708.png';
import image2 from '../../Assets/Images/Screenshot 2024-10-08 001544.png';
import image3 from '../../Assets/Images/Screenshot 2024-10-08 001305.png';
import image4 from '../../Assets/Images/Screenshot 2024-10-08 022244.png';
import image5 from '../../Assets/Images/Screenshot 2024-10-08 023657.png';
import image6 from '../../Assets/Images/Screenshot 2024-10-09 175347.png';
import image7 from '../../Assets/Images/Screenshot 2024-10-09 150933.png';
import image8 from '../../Assets/Images/Screenshot 2024-10-10 144029.png';
import image9 from '../../Assets/Images/Screenshot 2024-10-12 144651.png';
import image10 from '../../Assets/Images/Screenshot 2025-08-12 170740.png'
import image11 from '../../Assets/Images/Screenshot 2025-08-12 173432.png'
import image12 from '../../Assets/Images/Screenshot 2025-08-12 224323.png'

const projects = [
  {
    title: 'تطبيق وصال',
    description: "وصال هو موقع تواصل اجتماعي مثل فيسبوك يمكنك من إضافة أصدقاء جدد والتواصل معهم ونشر المنشورات ومشاهدة منشورات الأصدقاء",
    image: image12,
    technologies: ['React.js','Bootstrap', 'Tailwind CSS',"Responsive","Node.js","Express.js","MongoDB","JWT"],
    link: 'https://wasal-chi.vercel.app/',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'موقع فندق السعادة',
    description: "موقع فندق يوفر العديد من الخدمات مثل حجز الغرف والخدمات الأخرى",
    image: image10,
    technologies: ['React.js','Bootstrap', 'Chakra UI',"Responsive"],
    link: 'https://happiness-hotel.vercel.app/',
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'متجر إلكتروني',
    description: 'تطوير منصة تجارة إلكترونية متكاملة مع نظام مصادقة المستخدمين وتصفح المنتجات وإدارة السلة',
    image: image2,
    technologies: ['Node.js', 'React.js', 'Redux', 'MongoDB', 'Bootstrap', 'Express.js'],
    link: 'https://sales-gules.vercel.app/',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'موقع تواصل اجتماعي',
    description: 'تطوير منصة تواصل اجتماعي متكاملة تتيح للمستخدمين إنشاء المنشورات والتواصل مع الأصدقاء والتفاعل من خلال التعليقات',
    image: image1,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'Chakra UI', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://social-aapp.vercel.app/',
    category: 'Full Stack',
  },
  {
    title: 'منصة نقل الأثاث',
    description: 'تطوير منصة متجاوبة للواجهة الأمامية للمستخدمين للتواصل مع خدمات النقل المخصصة لنقل الأثاث',
    image: image3,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://furniture-eaccd.firebaseapp.com',
    category: 'Frontend',
  },
  {
    title: 'مخبز العائلة',
    description: 'تطوير موقع متجاوب لمخبز العائلة لبيع أنواع مختلفة من الخبز اللذيذ',
    image: image4,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React.js',"React Bootstrap"],
    link: 'https://abdullatif-mostafa.github.io/Bread-Store/',
    category: 'Frontend',
  },
  {
    title: 'قائمة المهام',
    description: 'تطوير تطبيق قائمة مهام تفاعلي',
    image: image11,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://to-do-list-eosin-xi.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'مطعم فوديرا',
    description: 'تطوير موقع متجاوب لمطعم لتقديم طعام حقيقي من أفضل المكونات',
    image: image5,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React.js',"React Bootstrap"],
    link: 'https://surian-restaurant.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'مطعم جوستو',
    description: 'تطوير موقع متجاوب لمطعم لتقديم طعام حقيقي من أفضل المكونات',
    image: image6,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','React.js',"React Bootstrap"],
    link: 'https://gusto-itali.surge.sh/',
    category: 'Frontend',
  },
  {
    title: 'موقع يونيفوكس',
    description: 'تطوير موقع متجاوب ليونيفوكس لإدارة أعمالك',
    image: image7,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://unifox.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'تصميم آيفون',
    description: 'تطوير تصميم متجاوب لآيفون',
    image: image8,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://iphon-15-pro-max.vercel.app/',
    category: 'Frontend',
  },
  {
    title: 'مطعم علامي',
    description: 'تطوير تصميم متجاوب لقائمة مطعم',
    image: image9,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://alamy-rest.vercel.app/',
    category: 'Frontend',
  },
];

const MotionBox = motion(Box);

export default function Projects() {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const bgColor = useColorModeValue('white', 'gray.800');
  
  return (
    <Box bg={bgColor} py={20} id="projects">
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
              أعمالي
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              مجموعة من المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات
            </Text>
          </MotionBox>

          {/* Featured Projects */}
          <VStack spacing={12} w="100%">
            <Heading as="h3" size="lg" color="gray.800" alignSelf="flex-start">
              المشاريع المميزة
            </Heading>
            
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="100%">
              {projects.filter(project => project.featured).map((project, index) => (
                <FeaturedProjectCard key={index} project={project} index={index} />
              ))}
            </SimpleGrid>
          </VStack>

          {/* All Projects */}
          <VStack spacing={12} w="100%">
            <Heading as="h3" size="lg" color="gray.800" alignSelf="flex-start">
              جميع المشاريع
            </Heading>
            
            <SimpleGrid columns={columns} spacing={8} w="100%">
              {projects.map((project, index) => (
                <AnimatedProjectCard key={index} project={project} index={index} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

// Featured Project Card Component
const FeaturedProjectCard = ({ project, index }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      bg={cardBg}
      borderRadius="20px"
      overflow="hidden"
      shadow="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        shadow: '2xl',
      }}
      position="relative"
    >
      <Badge
        position="absolute"
        top={4}
        right={4}
        colorScheme="mocha"
        px={3}
        py={1}
        borderRadius="full"
        zIndex={2}
      >
        {project.category}
      </Badge>
      
      <Box position="relative" overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          height="250px"
          width="100%"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      
      <Box p={6}>
        <VStack align="flex-start" spacing={4}>
          <Heading as="h4" size="md" color="gray.800">
            {project.title}
          </Heading>
          
          <Text fontSize="sm" color="gray.600" lineHeight="1.6">
            {project.description}
          </Text>
          
          <HStack spacing={2} flexWrap="wrap">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="subtle"
                colorScheme="gray"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="subtle"
                colorScheme="gray"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </HStack>
          
          <HStack spacing={3} w="100%">
            <Button
              as={Link}
              href={project.link}
              isExternal
              leftIcon={<Icon as={FaExternalLinkAlt} />}
              colorScheme="mocha"
              variant="solid"
              size="sm"
              flex={1}
              _hover={{ textDecoration: 'none' }}
            >
              عرض المشروع
            </Button>
          </HStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

// Regular Project Card Component
const AnimatedProjectCard = ({ project, index }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  return (
    <MotionBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      bg={cardBg}
      borderRadius="16px"
      overflow="hidden"
      shadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'lg',
      }}
      position="relative"
    >
      <Badge
        position="absolute"
        top={3}
        right={3}
        colorScheme={project.category === 'Full Stack' ? 'purple' : 'blue'}
        px={2}
        py={1}
        borderRadius="full"
        fontSize="xs"
        zIndex={2}
      >
        {project.category}
      </Badge>
      
      <Box position="relative" overflow="hidden">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          height="180px"
          width="100%"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      
      <Box p={5}>
        <VStack align="flex-start" spacing={3}>
          <Heading as="h4" size="sm" color="gray.800" noOfLines={1}>
            {project.title}
          </Heading>
          
          <Text fontSize="xs" color="gray.600" lineHeight="1.5" noOfLines={2}>
            {project.description}
          </Text>
          
          <HStack spacing={1} flexWrap="wrap">
            {project.technologies.slice(0, 2).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="subtle"
                colorScheme="gray"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 2 && (
              <Badge
                variant="subtle"
                colorScheme="gray"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                +{project.technologies.length - 2}
              </Badge>
            )}
          </HStack>
          
          <Button
            as={Link}
            href={project.link}
            isExternal
            leftIcon={<ViewIcon />}
            colorScheme="mocha"
            variant="outline"
            size="sm"
            w="100%"
            _hover={{ textDecoration: 'none' }}
          >
            عرض المشروع
          </Button>
        </VStack>
      </Box>
    </MotionBox>
  );
};
