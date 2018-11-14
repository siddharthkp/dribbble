import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from "./index"
import { Stack, Box } from "../_helpers"

storiesOf("Icon", module).add("names", () => (
  <Stack>
    <Box color="#fff" name="white" />
    <Box color="#f4f4f4" name="gray-100" />
    <Box color="#e1e1e7" name="gray-200" />
    <Box color="#ddd" name="gray-300" />
    <Box color="#bbb" name="gray-400" />
    <br />
    <Box color="#999" name="gray-500" />
    <Box color="#777" name="gray-600" />
    <Box color="#666" name="gray-700" />
    <Box color="#444" name="gray-800" />
    <Box color="#333" name="gray-900" />
    <br />
    <Box color="#d95988" name="pink-500" />
    <Box color="#df3e7b" name="pink-700" />
    <Box color="#c22b65" name="pink-800" />
    <br />
    <Box color="#4fb4de" name="blue-300" />
    <Box color="#3a8bbb" name="blue-500" />
    <Box color="#1e6189" name="blue-700" />
    <Box color="#0c3f5d" name="blue-900" />
    <br />
    <Box color="#7bbb5e" name="green-500" />
    <Box color="#5b9540" name="green-700" />
    <Box color="#3b6d25" name="green-900" />
    <br />
    <Box color="#ed615c" name="red-300" />
    <Box color="#ea3423" name="red-500" />
    <Box color="#ae2318" name="red-700" />
    <br />
    ## Brand colors
    <Box color="#d95988" name="brand-500" />
    <Box color="#df3e7b" name="brand-700" />
    <Box color="#c22b65" name="brand-900" />
    <br />
    ## Primary colors
    <Box color="#d95988" name="primary-pink" />
    <Box color="#3a8bbb" name="primary-blue" />
    ## Secondary colors
    <Box color="#ddd" name="secondary-gray" />
    <Box color="#7bbb5e" name="secondary-green" />
    <Box color="#ed615c" name="secondary-red" />
    <Box color="#4fb4de" name="secondary-blue" />
    ## States
    <Box color="#7bbb5e" name="success-bg" />
    <Box color="#3b6d25" name="success-text" />
    <Box color="#ea3423" name="error-bg" />
    <Box color="#ae2318" name="error-text" />
  </Stack>
))
