import React from "react"
import { storiesOf } from "@storybook/react"
import TextArea from "./index"
import { Stack } from "../_helpers"

storiesOf("Button", module).add("states", () => (
  <Stack>
    <TextArea placeholder="Enter text" />
    <TextArea hasError placeholder="Enter text" />
  </Stack>
))
