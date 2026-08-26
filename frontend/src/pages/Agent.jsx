import React, { useState, useEffect } from "react";
import AgentHero from "../components/Agents/AgentHero";
import AgentFeature from "../components/Agents/StatCounter";
import AgentFilter from "../components/Agents/AgentFilter";
import AgentCard from "../components/Agents/AgentCard";
import JoinTeam from "../components/Agents/JoinTeam";

const Agent = () => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/agents")
      .then((res) => res.json())
      .then((data) => {
        const agentsData = data.data || data || [];
        setAgents(agentsData);
        setFilteredAgents(agentsData);
      })
      .catch((err) => console.error("Agents fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <AgentHero />
      <AgentFeature />
      <AgentFilter agents={agents} setFilteredAgents={setFilteredAgents} />
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {loading || agents.length === 0
          ? [...Array(4)].map((_, index) => <AgentCard key={index} loading />)
          : filteredAgents.map((agent) => (
              <AgentCard key={agent._id} agent={agent} />
            ))}
      </div>
      <JoinTeam />
    </>
  );
};

export default Agent;
