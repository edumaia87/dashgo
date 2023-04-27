import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Maia</Text>
          <Text color="gray.300">edumaia89@outlook.com</Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Eduardo Maia"
        src="https://github.com/edumaia87.png"
      />
    </Flex>
  );
}
