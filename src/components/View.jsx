import React, { useEffect, useState } from "react";
import { getState } from "../utils/Context";
import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import { getColorsShcema } from "../utils/ColorsMode";
import SideBare from "./SideBare";
import { LineChart } from "./LineChart";
import { getLineData } from "../utils/LineCharData";
import { formatDate } from "../utils/Date";
import { BarChart } from "./BarChart";
import { getChartData } from "../utils/BarChartData";
import { VscListFilter } from "react-icons/vsc";

export default function View() {
  const { bgColor, bgColorV2, textColorV2, textColor } = getColorsShcema();
  const [lineData, setLineDate] = useState([]);
  const { boxData_1, boxData_2, mode, setSideStatus, sideStatus } = getState();
  const [boxStatus, setBoxStatus] = useState({ bx_1: false, bx_2: false });
  const { data, options } = getLineData({
    labels: boxData_1 && formatDate(boxData_1.lables),
    dataLine: lineData && lineData,
    lab: "Crypto Graph",
    title: "Crypto Graphy",
  });

  const { BarData, BarOptions } = getChartData({
    data: boxData_2 && boxData_2.data,
    labels: boxData_2 && boxData_2.labels,
  });

  const handelData = () => {
    boxData_1 &&
      boxData_1.value.forEach(({ EUR }) => {
        setLineDate((prop) => [...prop, EUR]);
      });
  };

  useEffect(() => {
    handelData();
  }, [boxData_1]);

  return (
    <Box as="section" width={"100%"} height={"100vh"} bg={bgColor}>
      <Flex height={"100%"}>
        <SideBare />
        <Box
          display={{ base: "block", md: "none" }}
          position={"fixed"}
          right={"20px"}
          top={"20px"}
        >
          <Button color={textColor} onClick={() => setSideStatus(!sideStatus)}>
            <VscListFilter size={"30px"} />
          </Button>
        </Box>
        <Flex
          flexWrap={"wrap"}
          padding={{ base: "20px", md: "50px" }}
          width={"100%"}
          gap={"40px"}
        >
          <Box
            width={{ base: "100%", md: "45%" }}
            height={"max-content"}
            bg={bgColorV2}
            display={boxStatus.bx_1 ? "none" : ""}
          >
            <LineChart data={data} options={options} />
          </Box>
          <Box
            bg={bgColorV2}
            width={{ base: "100%", md: "45%" }}
            height={"max-content"}
            display={boxStatus.bx_2 ? "none" : ""}
          >
            <BarChart data={BarData} options={BarOptions} />
          </Box>
          <Box
            padding={"30px"}
            position={"fixed"}
            bottom={{
              base: mode ? "300px" : "-100%",
              md: mode ? "30px" : "-100%",
            }}
            right={{ base: "15px", md: "30px" }}
            width={{ base: "90%", md: "400px" }}
            height={"200px"}
            bg={bgColorV2}
            display={"flex"}
            flexDir={"column"}
            gap={"30px"}
            transition={"all ease-in-out .1s"}
          >
            <Text color={textColorV2} fontWeight={"600"}>
              Hide/Add - Boxes
            </Text>
            <Flex gap={"30px"}>
              <Checkbox
                onChange={(e) =>
                  setBoxStatus({ bx_2: boxStatus.bx_2, bx_1: !boxStatus.bx_1 })
                }
              >
                Hide Box One
              </Checkbox>
              <Checkbox
                onChange={(e) =>
                  setBoxStatus({ bx_1: boxStatus.bx_1, bx_2: !boxStatus.bx_2 })
                }
              >
                Hide Box Two
              </Checkbox>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
