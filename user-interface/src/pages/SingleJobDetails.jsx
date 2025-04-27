import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Spinner,
  Box,
  Text,
  Badge,
  Divider,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { getSingleJob } from "../utils/url";

const SingleJobDetails = ({ id, isOpen, onClose }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobDetails = async () => {
    const getSingleJobURL = `${getSingleJob}/${id}`;

    try {
      const response = await axios.get(getSingleJobURL);
      setJob(response.data.job);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch job details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  
  if (loading) {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent bg="gray.50">
          <DrawerBody
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Spinner size="xl" color="blue.500" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  if (!job) {
    return null;
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
      <DrawerOverlay />
      <DrawerContent
        bg="white"
        borderRadius="20px 0 0 20px"
        p={4}
        boxShadow="2xl"
      >
        <DrawerCloseButton size="lg" top="6" right="6" color="gray.600" />
        <DrawerHeader
          fontSize="2xl"
          fontWeight="bold"
          color="blue.700"
          borderBottom="1px"
          borderColor="gray.200"
          mb={4}
        >
          {job.jobTitle}
        </DrawerHeader>

        <DrawerBody overflowY="auto" pb={10} className="space-y-8">
          {/* Company and Location */}
          <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              🏢 {job.companyName}
            </Text>
            <Text color="gray.600" mb={1}>
              📍 {job.location}
            </Text>
            <Badge colorScheme="green" mb={1}>
              Posted: {new Date(job.createdAt).toLocaleDateString()}
            </Badge>
            <br />
            <Badge colorScheme="red">
              Last Date: {new Date(job.lastDateToApply).toLocaleDateString()}
            </Badge>
          </Box>

          <Divider />

      
          <Box>
            <Text fontSize="xl" fontWeight="semibold" mb={3} color="blue.700">
              📝 About the Job
            </Text>
            <Text color="gray.700" whiteSpace="pre-line" lineHeight="1.8">
              {job.description}
            </Text>
          </Box>

          
          <Box>
            <Text fontSize="xl" fontWeight="semibold" mb={3} color="blue.700">
              🎯 Role & Responsibilities
            </Text>
            <Box pl={4} color="gray.700">
              {job.roleAndResponsibilities.map((item, index) => (
                <Text key={index} mb={2} as="li" listStyleType="disc">
                  {item}
                </Text>
              ))}
            </Box>
          </Box>

      
          <Box>
            <Text fontSize="xl" fontWeight="semibold" mb={3} color="blue.700">
              🎓 Required Qualifications
            </Text>
            <Box pl={4} color="gray.700">
              {job.requiredQualifications.map((item, index) => (
                <Text key={index} mb={2} as="li" listStyleType="disc">
                  {item}
                </Text>
              ))}
            </Box>
          </Box>
        </DrawerBody>
        <DrawerFooter className="flex justify-center">
          <Button
            colorScheme="green"
            size="lg"
            className="w-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
          >
            Apply Now 🚀
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SingleJobDetails;
