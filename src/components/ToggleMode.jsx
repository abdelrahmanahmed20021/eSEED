import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import React from "react";
import { getState } from "../utils/Context";

export const ToggleMode = ({ mess, id }) => {
  const { setMode, mode } = getState();
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor={id} mb="0">
        {mess}
      </FormLabel>
      <Switch onChange={() => setMode(!mode)} id={id} />
    </FormControl>
  );
};
