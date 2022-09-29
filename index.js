const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"

// const initialState = { numOfCakes: 10, numOfIceCreams: 20 }

const initialCakeState = {
	numOfCakes: 10
}

const initialIceCreamState = {
	numOfIceCreams: 20
}

/**
 * function is ACTION creater
 * @returns an object
 */
function orderCake() {
	return {
		type: CAKE_ORDERED,
		payload: 1
	}
}

function restockCake(qty = 1) {
	return {
		type: CAKE_RESTOCKED,
		payload: qty
	}
}

function orderIceCream() {
	return {
		type: ICECREAM_ORDERED,
		payload: 1
	}
}

function restockIceCream(qty = 1) {
	return {
		type: ICECREAM_RESTOCKED,
		payload: qty
	}
}

/**
 *
 * @param {*} state
 * @param {*} action
 * @returns updated state
 */
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1
			}
		case CAKE_RESTOCKED:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload
			}
		default:
			return state
	}
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - action.payload
			}
		case ICECREAM_RESTOCKED:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload
			}
		default:
			return state
	}
}

const rootReducer = combinedReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))

console.log("initial state", store.getState())

const unsubscribe = store.subscribe(() => {})
const actions = bindActionCreators(
	{orderCake, restockCake, orderIceCream, restockIceCream},
	store.dispatch
)

actions.orderCake()
actions.orderCake()
actions.restockCake(10)

actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));
// store.dispatch(restockCake(5));
// store.dispatch(restockCake(3));
unsubscribe()
