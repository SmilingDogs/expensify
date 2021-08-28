import { createStore } from "redux"; //*functions that creates store

//? Creating action-generators
// const incrementCount = value => ({type: "INCREMENT", payload: value})
// const decrementCount = value => ({type: "DECREMENT", payload: value})
//*desctructure object that's passed in //* if argument doesnt exist - pass {}
const incrementCount = ({ payload = 1} = {}) => ({
  type: 'INCREMENT',
  payload: payload
})

const decrementCount = ({ payload = 1} = {}) => ({
  type: 'DECREMENT',
  payload: payload
})

const setCount = payload => ({
  type: 'SET',
  payload: payload
})

const resetCount = () => ({
  type: 'RESET'
})
//*Creating a Reducer - fucntions that changes the Redux state based on actions


const initialState = {
  count: 10
}
//todo  1st arguement is default initialState, 2nd - action object
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // const incrementBy = typeof action.payload === 'number' ? action.payload : 1
      return { count: state.count + action.payload };
    case "DECREMENT":
      // const decrementBy = typeof action.payload === 'number' ? action.payload : 1
      return { count: state.count - action.payload };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.payload };
    default:
      return state;
  }
};

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState()); //* returns the current state object
}) //* subscribe(callback) gets called every time the store changes


//todo ACTIONS! that change the state of the Redux Store
//todo Action => is just an object that is sent to the Store describing the type of action

store.dispatch(incrementCount({ payload: 5})); //*changed action object to function-generator

// store.dispatch({
//   type: "INCREMENT",
// });
store.dispatch(incrementCount())

// store.dispatch({
//   type: "RESET",
// });
store.dispatch(resetCount())

// store.dispatch({
//   type: "DECREMENT",
//   payload: 10
// });
store.dispatch(decrementCount({ payload: 10 })) //*changed action object to function-generator

// store.dispatch({
//   type: "DECREMENT",

// });
store.dispatch(decrementCount())

// store.dispatch({
//   type: "SET",
//   payload: 101
// });
store.dispatch(setCount(101))

//* ======================= initialState, Reducers =================================//
// decrement, set , reset
// const initialState = {
//   count: 1
// }
// //* const add = ({a, b}, c) => a + b + c === 16
// //* console.log(add({a:2, b:2}, 12));

export default store;
