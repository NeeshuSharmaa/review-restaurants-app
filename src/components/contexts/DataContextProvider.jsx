import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { cuisineData, restaurantsData } from "../../db";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export default function DataContextProvider({ children }) {
  const initialState = {
    cuisineData: [...cuisineData],
    restaurantsData: [...restaurantsData],
    selectedCuisine: "",
  };

  const reducerFunc = (state, { type, payload }) => {
    switch (type) {
      case "SELECT_CUISINE": {
        return { ...state, selectedCuisine: payload };
      }
      default: {
        return {
          cuisineData: [...cuisineData],
          restaurantsData: [...restaurantsData],
        };
      }
    }
  };
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const values = {
    state,
    dispatch,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
