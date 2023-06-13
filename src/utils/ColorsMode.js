import { useColorModeValue } from "@chakra-ui/react";

export const getColorsShcema = () => {
  const bgColor = useColorModeValue("light.800", "dark.900");
  const bgColorV2 = useColorModeValue("light.600", "dark.800");
  const textColor = useColorModeValue("dark.900", "light.800");
  const textColorV2 = useColorModeValue("dark.900", "dark.700");

  return { bgColor, textColor, textColorV2, bgColorV2 };
};
