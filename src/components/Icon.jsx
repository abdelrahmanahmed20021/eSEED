import { Flex } from "@chakra-ui/react";
import React from "react";

export default function Icon({ children }) {
  return (
    <Flex display={"flex"} alignItems={"center"} gap={"10px"}>
      {children}
    </Flex>
  );
}
