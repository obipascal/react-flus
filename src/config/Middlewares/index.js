import { appMiddlewares } from "./app.middleware"

/** All the action dispatch middleware handlers should be registered here */
const Middleware = {
	...appMiddlewares
}

export default Middleware
