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
	}
})

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;

