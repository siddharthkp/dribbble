import { configure } from "@storybook/react"

/* This line loads all the .story files from the components */
const components = require.context("../src/components/", true, /story\.js$/)

function loadStories() {
  components.keys().forEach(components)
}

configure(loadStories, module)
