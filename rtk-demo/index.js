const store = require('./app/store');

const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions;
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state rtk', store.getState())
})


// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
store.dispatch(fetchUsers());

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(13));

// unsubscribe()