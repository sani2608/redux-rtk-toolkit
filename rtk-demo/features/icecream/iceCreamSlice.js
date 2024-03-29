const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = { numOfIcecreams: 11 }


const icecreamSlice = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		ordered: (state) => {
			state.numOfIcecreams--
		},
		restocked: (state, action) => {
			state.numOfIcecreams += action.payload
		}
	},
	// extraReducers: {
	// 	['cake/ordered']: (state) => {
	// 		state.numOfIcecreams--
	// 	}
	// }
	extraReducers: (builder) => {
		builder.addCase(cakeActions.ordered, state => {
			state.numOfIcecreams--
		})
	}
})

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;

