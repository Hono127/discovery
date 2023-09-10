import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CompleteButton from "../atoms/CompleteButton";
import DeleteButton from "../atoms/DeleteButton";

const InComplete = () => {
  return (
    <Box w={{ base: "100%", md: "80%" }} mb={{ base: "30px", md: "0px" }}>
      <Heading as="h4" display="block" mb="30px">
        未完了
      </Heading>
      <Stack
        as="ul"
        listStyleType="none"
        w={{ base: "90%", md: "80%" }}
        justifyContent="center"
        mx={{ base: "auto" }}
        spacing="8"
      >
        <Box as="li">
          <Flex alignItems="center" justifyContent="space-between">
            <Text>タスク1</Text>
            <Box display={{ base: "flex" }}>
              <CompleteButton />
              <DeleteButton />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default InComplete;
