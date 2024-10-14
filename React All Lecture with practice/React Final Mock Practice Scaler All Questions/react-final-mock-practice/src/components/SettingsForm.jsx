import React, { useState } from 'react';
import {
  Box, VStack, HStack, Input, Text, Switch, Checkbox, Button, Heading, Icon, Divider
} from '@chakra-ui/react';
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SettingsForm = () => {
  const [title, setTitle] = useState('Form');
  const [formEnabled, setFormEnabled] = useState(true);
  const [encryptData, setEncryptData] = useState(false);

  return (
    <Box p={6} bg="gray.50" borderRadius="lg" boxShadow="md" maxW="lg" mx="auto">
      <Heading size="md" color="blue.600" mb={2}>
        FORM SETTINGS
      </Heading>
      <Text color="gray.500" mb={4}>
        Customize form status and properties
      </Text>

      <VStack spacing={6} align="flex-start">
        {/* Title */}
        <Box w="100%">
          <Text fontWeight="bold" mb={1}>
            Title
          </Text>
          <Input
            placeholder="Enter a name for your form"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        {/* Form Status */}
        <Box w="100%">
          <Text fontWeight="bold" mb={1}>
            Form Status
          </Text>
          <HStack justify="space-between" w="100%" p={3} borderRadius="md" border="1px solid" borderColor="gray.300">
            <HStack>
              <Icon as={CheckCircleIcon} color="green.500" />
              <Text fontWeight="bold" color={formEnabled ? "green.600" : "red.500"}>
                {formEnabled ? 'ENABLED' : 'DISABLED'}
              </Text>
            </HStack>
            <ChevronRightIcon color="gray.500" />
          </HStack>
          <Text fontSize="sm" color="gray.600">
            Your form is currently {formEnabled ? 'visible' : 'hidden'} and able to receive submissions
          </Text>
          <Switch
            isChecked={formEnabled}
            onChange={(e) => setFormEnabled(e.target.checked)}
            mt={2}
            colorScheme="green"
          />
        </Box>

        {/* Encrypt Form Data */}
        <Box w="100%">
          <HStack justify="space-between" w="100%">
            <Text fontWeight="bold">
              Encrypt Form Data
            </Text>
            <Switch
              isChecked={encryptData}
              onChange={(e) => setEncryptData(e.target.checked)}
              colorScheme="blue"
            />
          </HStack>
          <Text fontSize="sm" color="gray.600">
            Encrypt your form responses to store sensitive data securely.
          </Text>
          <Button variant="link" size="sm" color="blue.400">
            Learn more
          </Button>
        </Box>

        {/* Show More Options Button */}
        <Divider />
        <Button colorScheme="blue" w="100%">
          SHOW MORE OPTIONS
        </Button>
      </VStack>
    </Box>
  );
};

export default SettingsForm;