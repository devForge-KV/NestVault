import { useState, useContext, createContext } from "react";
export const FilterContext = createContext();
const initialFilterState = {
  location: "",
  propertyType: "all",
  priceRange: 15000000,
  bedRooms: "any",
  bathRooms: "any",
  status: { forSale: false, forRent: false },
};

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState(initialFilterState);
  const resetFilter = () => setFilter(initialFilterState);

  return (
    <FilterContext.Provider value={{ filter, setFilter, resetFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export default FilterContext;
