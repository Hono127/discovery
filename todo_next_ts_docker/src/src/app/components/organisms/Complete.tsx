import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BackButton from "../atoms/BackButton";
import DeleteButton from "../atoms/DeleteButton";

const Complete = () => {
  return (
    <Box w={{ base: "100%", md: "80%" }}>
      <Heading display="block" mb="30px">
        完了
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
              <BackButton />
              <DeleteButton />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Complete;
