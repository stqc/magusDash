import { useReducer, useContext, createContext } from "react"

const StateContext = createContext()
const DispatchContext = createContext()

// This is dispatcher function
// It is used to manipulate the global state
// Access it by importing useDispatchContext from other components
// assign dispatch = useDispatchContext()
// To use it, do:
// dispatch({type: "type of action"}, payload:{the data that needed to be send})
// Eg. dispatch({type: "login"})
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      // This will change the loggedIn to true
      return Object.assign({}, state, { isLoggedIn: true })
    default:
      throw new error("Unknown action: " + action.type)
  }
}

// This is the global state
// add properties into initialState object
// It later can be accessed by importing useStateContext from other components
// Then assign globalState = useStateContext()
// Use it like globalState.property

let initialState = {
  loggedIn: false
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
export const useDispatchContext = () => useContext(DispatchContext)
