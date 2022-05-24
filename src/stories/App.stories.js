import React from "react"
import { storiesOf } from "@storybook/react"
import App from "../components/App"

const stories = storiesOf("Flus SM", module)

stories.add("Flus App", () => {
	return <App />
})
