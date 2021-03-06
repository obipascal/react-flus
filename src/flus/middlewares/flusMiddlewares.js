export const FlusMiddlewares = {
	flusapp: {
		createDynamicStore(state, payload) {
			state[payload?.store] = payload?.data

			/* give the user the previllage to write this data to storage  */
			if (typeof payload?.writeData !== "undefined" && typeof payload?.writeData === "function") typeof payload?.writeData(state, payload?.store, payload?.data)

			return {
				...state
			}
		},

		emitDynamicEvent(state, payload) {
			state[payload?.event] = payload?.data

			/* give the user the previllage to handle the dispatched event by tapping into the app glogal store object.  */
			if (typeof payload?.onDispatch !== "undefined" && typeof payload?.onDispatch === "function") typeof payload?.onDispatch(state, payload?.event, payload?.data)

			return {
				...state
			}
		}
	}
}
