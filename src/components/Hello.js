import { FLUSDYNAMIC_STORE, useFlusDispatcher, useFlusStores } from "./../flus"
import React from "react"
import { UPDATE_APPNAME } from "./../config/constants/app.const"

const listItems = [
	{
		id: 1,
		name: "First Name",
		value: "Obi"
	},
	{
		id: 2,
		name: "Last Name",
		value: "Pascal"
	},
	{
		id: 3,
		name: "Age",
		value: 22
	},

	{
		id: 4,
		name: "Email",
		value: "pascalobi83@gmail.com"
	},
	{
		id: 5,
		name: "Contact",
		value: "09125256272"
	}
]

export default function Hello() {
	const { app } = useFlusStores()
	const dispatcher = useFlusDispatcher()

	const changeAppName = () => {
		dispatcher({ type: UPDATE_APPNAME, payload: { appname: "Flus SM Name Updated" } })
	}

	const createDynamicList = () => {
		dispatcher({ type: FLUSDYNAMIC_STORE, payload: { store: "myDynamicList", data: listItems } })
	}

	return (
		<div>
			Hello! my name is: {app?.name}, I'm {app?.version} years old
			<br />
			<br />
			<button classsName="btn btn-lg btn-primary" onClick={changeAppName} type="button">
				Change App name to: "Flus SM Name Updated"
			</button>
		</div>
	)
}
