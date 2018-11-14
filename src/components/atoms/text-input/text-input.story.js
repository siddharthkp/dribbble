import React from "react"
import { storiesOf } from "@storybook/react"
import TextInput from "./index"
import { Stack } from "../_helpers"

storiesOf("Button", module).add("states", () => (
  <Stack>
    <TextInput placeholder="Enter text" />
    <TextInput hasError placeholder="Enter text" />
  </Stack>
))
