import React from "react";
import { Button, Box, Heading, VStack, Fade, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUpAs = () => {
  return (
    <Box
      p={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Fade in={true} delay={0.3}>
        <Box
          textAlign="center"
          p={12} 
          bg="white"
          borderRadius="lg"
          boxShadow="xl" 
          minWidth={["300px", "400px", "500px"]} 
          maxWidth="600px" 
          width="100%"
          transform="scale(0.98)"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1)" }}
        >
          <Heading
            as="h2"
            mb={6}
            fontSize="3xl"
            color="gray.800"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wider"
            bgGradient="linear(to-r, #6A5ACD, #FF7F50)" 
            bgClip="text"
          >
            Register As
          </Heading>

          <Text fontSize="lg" mb={6} color="gray.600">
            Select your role to get started
          </Text>

          <VStack spacing={5}>
            <Link to="/sign-up">
              <Button
                colorScheme="orange"
                size="lg"
                width="full"
                height="50px"
                borderRadius="md"
                _hover={{
                  bg: "orange.600", 
                  boxShadow: "0 4px 10px rgba(255, 165, 0, 0.3)", 
                }}
                transition="all 0.3s ease"
                boxShadow="md"
                _focus={{
                  outline: "none",
                }}
              >
                Register as Student
              </Button>
            </Link>

            <Link to="/mentor-registration">
              <Button
                colorScheme="teal"
                size="lg"
                width="full"
                height="50px"
                borderRadius="md"
                _hover={{
                  bg: "teal.600", 
                  boxShadow: "0 4px 10px rgba(0, 204, 204, 0.3)", 
                }}
                transition="all 0.3s ease"
                boxShadow="md"
                _focus={{
                  outline: "none",
                }}
              >
                Register as Mentor
              </Button>
            </Link>
          </VStack>
        </Box>
      </Fade>
    </Box>
  );
};

export default SignUpAs;
