import { Box, Button, Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Icon from "./Icon";
import { MdSpaceDashboard } from "react-icons/md";
import { getColorsShcema } from "../utils/ColorsMode";
import { ToggleMode } from "./ToggleMode";
import { getState } from "../utils/Context";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

export default function SideBare() {
  const { textColor, bgColor, bgColorV2, textColorV2 } = getColorsShcema();
  const { colorMode, toggleColorMode } = useColorMode();
  const { sideStatus } = getState();
  return (
    <Box
      height={"100%"}
      padding={"30px"}
      position={{ base: "absolute", md: "static" }}
      left={!sideStatus ? "-100%" : "0"}
      transition={"ease-in-out .3s "}
      bg={bgColor}
    >
      <Icon>
        <Image src="./assets/Logo.png" maxWidth={"20px"} loading="lazy" />
        <Text fontSize={"1.3rem"} color={"main.900"} fontWeight={"600"}>
          Cyrpton
        </Text>
      </Icon>
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        padding={"100px 0px"}
        height={"90%"}
      >
        <Icon>
          <Button bg={bgColorV2} _hover={{ bg: "main.900" }}>
            <MdSpaceDashboard />
          </Button>
          <Text fontWeight={"600"} fontSize={"1rem"} color={textColorV2}>
            Dashboard
          </Text>
        </Icon>
        <Icon>
          <Button
            onClick={toggleColorMode}
            bg={bgColorV2}
            _hover={{ bg: "main.900" }}
          >
            {colorMode == "light" ? <BsFillMoonFill /> : <BsSunFill />}
          </Button>
        </Icon>
        <Stack position={"fixed"} bottom={"20px"} left={"20px"}>
          <ToggleMode mess={"Enable Edit Mode ?"} id={"mode"} />
        </Stack>
      </Flex>
    </Box>
  );
}
