import Middleware from "./../Middlewares"

/**
 * Application actions
 */
export const appActions = {
	/* handle drawer addition */
	"app/stores/create-dynamic-store": Middleware.app.createDynamicStore,
	"app/events/emit-dynamic-event": Middleware.app.emitDynamicEvent,
	"app/update-name": Middleware.app.updateAppName
}
