/* update application name */
export const appMiddlewares = {
	/** App middleware group */
	app: {
		createDynamicStore(state, payload) {
			state[payload?.store] = payload?.data

			return {
				...state
			}
		},

		emitDynamicEvent(state, payload) {
			state[payload?.event] = payload?.data

			return {
				...state
			}
		},

		updateAppName(state, payload) {
			state.app.name = payload?.appname

			return { ...state }
		}
	}
}
