import { Box, Container, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/world" p={2} color="white">
            World
          </Link>
          <Link as={RouterLink} to="/business" p={2} color="white">
            Business
          </Link>
          <Link as={RouterLink} to="/tech" p={2} color="white">
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" p={2} color="white">
            Markets
          </Link>
        </Flex>
      </Flex>

      <Box p={4}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Image src="https://via.placeholder.com/1200x400" alt="Main article image" />
            <Heading as="h2" size="xl" mt={4}>
              Main Article Title
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>

          <Box>
            <Heading as="h3" size="lg">
              Latest News
            </Heading>
            <VStack spacing={4} align="stretch">
              <Box>
                <Heading as="h4" size="md">
                  News Article 1
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="md">
                  News Article 2
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
              <Box>
                <Heading as="h4" size="md">
                  News Article 3
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;