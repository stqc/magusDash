import { useReducer, useContext, createContext } from "react"

const StateContext = createContext()
const DispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      break
    default:
      throw new error("Unknown action: " + action.type)
  }
}

export const StateProvider = ({ children }) => {
  const [globalState, setState] = useState({})
  const [state, dispatch] = useReducer(reducer, globalState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useState = () => useContext(StateContext)
export const useDispatch = () => useContext(DispatchContext)
