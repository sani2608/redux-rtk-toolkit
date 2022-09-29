const cakeReducer = require('../features/cake/cakeSlice')
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

module.exports = store;