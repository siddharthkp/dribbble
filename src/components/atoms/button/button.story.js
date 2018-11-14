import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./index"
import { Stack } from "../_helpers"

storiesOf("Button", module).add("appearances", () => (
  <Stack>
    <Button appearance="primary">Button Label</Button>
    <Button appearance="secondary">Button Label</Button>
    <Button appearance="secondary-alt">Button Label</Button>
    <Button appearance="info">Button Label</Button>
    <Button appearance="accent">Button Label</Button>
    <Button appearance="success">Button Label</Button>
  </Stack>
))

storiesOf("Button", module).add("disabled", () => (
  <Stack>
    <Button disabled appearance="primary">
      Button Label
    </Button>
    <Button disabled appearance="secondary">
      Button Label
    </Button>
    <Button disabled appearance="secondary-alt">
      Button Label
    </Button>
    <Button disabled appearance="info">
      Button Label
    </Button>
    <Button disabled appearance="accent">
      Button Label
    </Button>
    <Button disabled appearance="success">
      Button Label
    </Button>
  </Stack>
))

storiesOf("Button", module).add("sizes", () => (
  <Stack>
    <Button size="small" appearance="primary">
      Button Label
    </Button>
    <Button size="normal" appearance="primary">
      Button Label
    </Button>
    <Button size="large" appearance="primary">
      Button Label
    </Button>
  </Stack>
))
