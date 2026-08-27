import React from "react";
import PropertieHome from "../components/Properties/PropertieHome";
import PropertyListing from "../components/Properties/PropertyListing";
import Filter from "../components/Properties/Filter";
import { FilterContext, FilterProvider } from "../hooks/FilterContext";

const Properties = () => {
  return (
    <>
      <PropertieHome />
      <FilterProvider>
        <PropertyListing />
      </FilterProvider>
    </>
  );
};

export default Properties;
