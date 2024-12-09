import { createContext, useEffect, useReducer } from "react";

// const dataFromLocalStorage = () => {
//   return (
//     JSON.parse(localStorage.getItem("products")) || {
//       color: "",
//       selectedProducts: [],
//     }
//   );
// };

export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, payload],
      };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};
export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selectedProducts: [],
  });

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(state));
  // }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
