import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const bgColor = useColorModeValue('mocha.50', 'mocha.200');
  const borderColor = useColorModeValue('gray.200', 'mocha.600');
  const hoverBg = useColorModeValue('mocha.200', 'mocha.400');

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇪🇬' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    // Update document direction and language
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg={bgColor}
          border="1px"
          borderColor={borderColor}
          _hover={{ bg: hoverBg }}
          _active={{ bg: hoverBg }}
          size="sm"
          borderRadius="lg"
          px={3}
          py={2}
          minW="120px"
        >
          <HStack spacing={2}>
            <Text fontSize="lg" color={"gray.700"} >{currentLanguage.flag}</Text>
            <Text fontSize="sm" color={"gray.700"} fontWeight="medium">
              {currentLanguage.name}
            </Text>
          </HStack>
        </MenuButton>
        <MenuList
          bg={bgColor}
          border="1px"
          borderColor={borderColor}
          borderRadius="lg"
          boxShadow="lg"
          minW="120px"
        >
          {languages.map((language) => (
            <MenuItem
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              bg={i18n.language === language.code ? hoverBg : 'transparent'}
              _hover={{ bg: hoverBg }}
              _focus={{ bg: hoverBg }}
              px={3}
              py={2}
            >
              <HStack spacing={2}>
                <Text fontSize="lg">{language.flag}</Text>
                <Text fontSize="sm" fontWeight="medium">
                  {language.name}
                </Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </MotionBox>
  );
};

export default LanguageSwitcher;

