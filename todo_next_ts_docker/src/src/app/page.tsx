import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import AddButton from "./components/atoms/AddButton";
import Complete from "./components/organisms/Complete";
import InComplete from "./components/organisms/InComplete";

export default function Home() {
  return (
    <Stack
      spacing="6"
      w={{ base: "80%", md: "1200px" }}
      mx="auto"
      textAlign="center"
      backgroundColor="skyblue"
      pb="40px"
    >
      <Heading as="h1">ToDo管理</Heading>

      <Heading as="h3">ToDo入力</Heading>
      <Flex justifyContent="center">
        <Input
          backgroundColor="white"
          w={{ base: "60%" }}
          placeholder="ToDo名"
        />
        <AddButton />
      </Flex>
      <Box display={{ base: "block", md: "flex" }} justifyContent="center">
        <Complete />
        <InComplete />
      </Box>
    </Stack>
  );
}
