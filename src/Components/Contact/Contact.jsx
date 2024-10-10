import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        title: 'Message Sent.',
        description: "I've received your message and will get back to you shortly.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:"top"
      });
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <Box
      id="contact"
      maxW={'600px'}
      mx={'auto'}
      px={4}
      py={10}
    //   bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      rounded={'lg'}
      my={6}
    >
      <Heading mb={6} textAlign="center">
        Contact Me
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type0="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            width="full"
            isLoading={isSubmitting}
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
