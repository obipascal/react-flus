import { appActions } from "./../config/actions/app.actions"
import { AppStores } from "./../config/stores"
import FlusAppServiceProvider from "./../flus/FlusAppServiceProvider"
import React from "react"
import Hello from "./Hello"

export default function App() {
	return (
		<FlusAppServiceProvider stores={AppStores} actions={appActions}>
			<Hello />
		</FlusAppServiceProvider>
	)
}
