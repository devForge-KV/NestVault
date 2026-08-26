import React, { useCallback, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

const AgentFilter = ({ agents, setFilteredAgents }) => {
  const searchRef = useRef();
  const [specialization, setSpecialization] = useState("all");
  const [location, setLocation] = useState("all");
  const applyFilter = (
    searchVal = searchRef.current?.value || "",
    specVal = specialization,
    locVal = location,
  ) => {
    if (!agents || !Array.isArray(agents)) return;

    const result = agents.filter((agent) => {
      const nameMatch = searchVal.trim()
        ? agent.name.toLowerCase().includes(searchVal.toLowerCase().trim())
        : true;
      let specMatch = true;
      if (specVal !== "all") {
        const specLower = specVal.toLowerCase();
        const roleMatch = agent.role?.toLowerCase().includes(specLower);
        const expertiseMatch = agent.areasOfExpertise?.some((exp) =>
          exp.toLowerCase().includes(specLower),
        );
        specMatch = roleMatch || expertiseMatch;
      }
      const locMatch =
        locVal === "all"
          ? true
          : agent.location?.toLowerCase().includes(locVal.toLowerCase());

      return nameMatch && specMatch && locMatch;
    });

    setFilteredAgents(result);
  };
  const handleSearch = () => {
    applyFilter();
  };
  const handleSpecChange = (e) => {
    const val = e.target.value;
    setSpecialization(val);
    applyFilter(searchRef.current?.value, val, location);
  };
  const handleLocChange = (e) => {
    const val = e.target.value;
    setLocation(val);
    applyFilter(searchRef.current?.value, specialization, val);
  };
  const handleReset = useCallback(() => {
    if (searchRef.current) searchRef.current.value = "";
    setSpecialization("all");
    setLocation("all");
    setFilteredAgents(agents);
  }, [agents, setFilteredAgents]);

  const filterFields = [
    {
      id: 1,
      label: "Search Agent",
      type: "input",
      placeholder: "Enter agent name...",
      icon: FiSearch,
    },
    {
      id: 2,
      label: "Specialization",
      type: "select",
      value: specialization,
      onChange: handleSpecChange,
      options: [
        { value: "all", label: "All Specializations" },
        { value: "Luxury", label: "Luxury" },
        { value: "Residential", label: "Residential" },
        { value: "Investment", label: "Investment" },
        { value: "Commercial", label: "Commercial" },
      ],
    },
    {
      id: 3,
      label: "Location",
      type: "select",
      value: location,
      onChange: handleLocChange,
      options: [
        { value: "all", label: "All Locations" },
        { value: "California", label: "California" },
        { value: "New York", label: "New York" },
        { value: "Florida", label: "Florida" },
        { value: "Chicago", label: "Chicago" },
      ],
    },
  ];

  return (
    <div className="bg-[#0b0f17] border border-white/10 rounded-xl px-6 lg:px-12 py-4 flex flex-wrap gap-4 items-end">
      {filterFields.map((field) => (
        <div
          key={field.id}
          className="flex flex-col gap-1 flex-1 min-w-[200px]"
        >
          <label className="text-xs text-gray-400 font-medium">
            {field.label}
          </label>

          {}
          {field.type === "input" && (
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                placeholder={field.placeholder}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-[#13161c] border border-white/10 rounded-lg py-2.5 pl-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#f59e0b]"
              />
              <field.icon className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
            </div>
          )}

          {}
          {field.type === "select" && (
            <select
              value={field.value}
              onChange={field.onChange}
              className="bg-[#13161c] border border-white/10 rounded-lg py-2.5 px-4 text-sm text-gray-300 focus:outline-none focus:border-[#f59e0b] cursor-pointer"
            >
              {field.options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[#13161c] text-white"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      {}
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <button
          type="button"
          onClick={handleSearch}
          className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
        >
          Search Agent
          <FiSearch className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="text-sm text-[#f59e0b] underline hover:text-white transition-colors px-2 py-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AgentFilter;
