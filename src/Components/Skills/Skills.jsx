import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  useBreakpointValue,
  Progress,
  Badge,
} from '@chakra-ui/react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiJest,
  SiNextdotjs,
  SiTailwindcss,
  SiWebpack,
} from 'react-icons/si';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

// Enhanced skills array with proficiency levels and categories
const skillCategories = [
  {
    title: 'Frontend Development',
    titleAr: 'تطوير الواجهات الأمامية',
    skills: [
      { name: 'React.js', icon: FaReact, level: 95, color: 'blue.500' },
      { name: 'Next.js', icon: SiNextdotjs, level: 85, color: 'gray.800' },
      { name: 'JavaScript', icon: FaJsSquare, level: 90, color: 'yellow.500' },
      { name: 'TypeScript', icon: SiTypescript, level: 80, color: 'blue.600' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: 'orange.500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'blue.400' },
    ]
  },
  {
    title: 'Backend Development',
    titleAr: 'تطوير الخلفية',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90, color: 'green.500' },
      { name: 'Express.js', icon: SiExpress, level: 85, color: 'gray.600' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: 'green.600' },
      { name: 'Firebase', icon: SiFirebase, level: 75, color: 'orange.400' },
    ]
  },
  {
    title: 'UI Libraries & Tools',
    titleAr: 'مكتبات واجهة المستخدم والأدوات',
    skills: [
      { name: 'Chakra UI', icon: SiChakraui, level: 90, color: 'teal.500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: 'cyan.500' },
      { name: 'Redux', icon: SiRedux, level: 80, color: 'purple.500' },
      { name: 'Bootstrap', icon: FaCss3Alt, level: 85, color: 'purple.600' },
    ]
  },
  {
    title: 'Development Tools',
    titleAr: 'أدوات التطوير',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85, color: 'orange.600' },
      { name: 'Docker', icon: FaDocker, level: 70, color: 'blue.600' },
      { name: 'Webpack', icon: SiWebpack, level: 75, color: 'blue.400' },
      { name: 'Jest', icon: SiJest, level: 70, color: 'red.500' },
    ]
  }
];

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function Skills() {
  const { t } = useTranslation();
  const columns = useBreakpointValue({ base: 1, md: 2 });
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  
  return (
    <Box bg={bgColor} py={20} id="skills">
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
              {t('skills.title')}
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px">
              {t('skills.subtitle')}
            </Text>
          </MotionBox>

          {/* Skills Categories */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="100%">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCategoryCard 
                key={categoryIndex} 
                category={category} 
                index={categoryIndex} 
              />
            ))}
          </SimpleGrid>

          {/* Overall Skills Summary */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            w="100%"
          >
            <VStack spacing={8}>
              <Heading as="h3" size="lg" color="gray.800" textAlign="center">
                {t('skills.summary')}
              </Heading>
              
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%">
                <StatCard title={t('skills.stats.experience')} value="2+" color="green" />
                <StatCard title={t('skills.stats.technologies')} value="17+" color="blue" />
                <StatCard title={t('skills.stats.projects')} value="16+" color="purple" />
                <StatCard title={t('skills.stats.clients')} value="15+" color="orange" />
              </SimpleGrid>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}

// Skill Category Card Component
const SkillCategoryCard = ({ category, index }) => {
  const { t ,i18n} = useTranslation();
  const cardBg = useColorModeValue('white', 'gray.700');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
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
      p={8}
      borderRadius="20px"
      shadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'xl',
      }}
    >
      <VStack align="flex-start" spacing={6}>
        <HStack spacing={3}>
          <Badge
            colorScheme="mocha"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
          >
            {i18n.language === 'en' ? category.title : category.titleAr}
            {/* {t(category.title)} */}
          </Badge>
        </HStack>
        
        {/* <Heading as="h4" size="md" color="gray.800">
          {category.titleAr}
        </Heading> */}
        
        <VStack spacing={4} w="100%">
          {category.skills.map((skill, skillIndex) => (
            <SkillItem key={skillIndex} skill={skill} delay={skillIndex * 0.1} />
          ))}
        </VStack>
      </VStack>
    </MotionBox>
  );
};

// Individual Skill Item Component
const SkillItem = ({ skill, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, delay }
        }
      }}
      w="100%"
    >
      <HStack justify="space-between" mb={2}>
        <HStack spacing={3}>
          <Icon as={skill.icon} w={6} h={6} color={skill.color} />
          <Text fontSize="sm" fontWeight="medium" color="gray.700">
            {skill.name}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.500" fontWeight="bold">
          {skill.level}%
        </Text>
      </HStack>
      
      <Progress
        value={skill.level}
        colorScheme={skill.color.split('.')[0]}
        size="sm"
        borderRadius="full"
        bg="gray.100"
      />
    </MotionBox>
  );
};

// Stat Card Component
const StatCard = ({ title, value, color }) => {
  const cardBg = useColorModeValue('white', 'gray.700');
  
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Box
        bg={cardBg}
        p={6}
        borderRadius="16px"
        shadow="md"
        textAlign="center"
        transition="all 0.3s ease"
        _hover={{ shadow: 'lg' }}
      >
        <Text fontSize="2xl" fontWeight="bold" color={`${color}.500`} mb={2}>
          {value}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {title}
        </Text>
      </Box>
    </MotionBox>
  );
};
