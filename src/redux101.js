import { createStore } from "redux";

const initialState = {
  count: 1
}
//* const add = ({a, b}, c) => a + b + c === 16

//* console.log(add({a:2, b:2}, 12));


//* Below is function - actionGenerator, return action object
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({count}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.incrementBy}
    }
    case 'DECREMENT': {
      return {count: state.count - action.decrementBy}
    }
    case 'RESET': {
      return {count: 0}
    }
    case "SET": {
      return {count: action.count}
    }
    default:
      return state
  }

};

const store = createStore(countReducer)

console.log(store.getState()); //*prints count: 1 ===initalState

store.dispatch(incrementCount())

// store.dispatch({
//   type:'INCREMENT',
//   incrementBy: 10
// })                    //! below is object - payload
store.dispatch(incrementCount({incrementBy: 10}))

// store.dispatch({
//   type: "RESET"
// })
store.dispatch(resetCount())
// store.dispatch({
//   type: "SET",
//   count: 100
// })
store.dispatch(setCount({count:200}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 200}))

//todo action === {type: 'ACTION_NAME}
//todo reducer === function that interprets action and executes it:
// switch(action.type) {
//    case 'INCREMENT': {
//     return {count: state.count +1}
//   }
//   case 'DECREMENT': {
//     return {count: state.count -1}
//   }
//   case 'RESET': {
//     return {count: 0}
//   }
//   default:
//     return state
// }

console.log(store.getState()); //* prints count: -100

export default store
