const redux = require('redux')
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const CAKE_ORDERED = "CAKE_ORDERED";

/**
 * function is ACTION creater
 * @returns an object
 */
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

// SCENARIOS
//? 1. RESTOCKING CAKES 

const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}


const initialState = { numOfCakes: 10, }

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns updated state
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            } 
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default: return state
    }
}


const store = createStore(reducer);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log('subscribe', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));
// store.dispatch(restockCake(5));
// store.dispatch(restockCake(3));

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch)
actions.orderCake()
actions.orderCake();
actions.restockCake(10)



unsubscribe();