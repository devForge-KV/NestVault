import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StatCounter from "./StatCounter";
import AgentCard from "./AgentCard";
import AgentReviews from "./AgentReviews";
import {
  FaStar,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaCheck,
} from "react-icons/fa";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiBookmark,
  FiSend,
  FiCalendar,
  FiChevronRight,
  FiBriefcase,
  FiAward,
  FiSmile,
  FiTrendingUp,
} from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";

const AgentDetail = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [otherAgents, setOtherAgents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    fetch(`/api/agents/${id}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success) {
          setAgent(resData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching agent detail:", err);
        setLoading(false);
      });

    fetch("/api/agents")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && Array.isArray(resData.data)) {
          const filtered = resData.data.filter((item) => item._id !== id);
          const randomAgents = filtered
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

          setOtherAgents(randomAgents);
        }
      })
      .catch((err) => {
        console.error("Error fetching other agents:", err);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07090e] flex items-center justify-center text-[#f59e0b] font-semibold text-lg">
        Loading Agent Details...
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen bg-[#07090e] flex flex-col items-center justify-center text-white gap-4">
        <h2 className="text-2xl font-bold">Agent Not Found</h2>
        <Link to="/agents" className="text-[#f59e0b] underline text-sm">
          Back to Agents List
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#07090e] text-white min-h-screen pb-8  mt-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-8xl mx-auto space-y-8">
        {}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <FiChevronRight className="w-3 h-3 text-gray-600" />
          <Link to="/agents" className="hover:text-white transition-colors">
            Agents
          </Link>
          <FiChevronRight className="w-3 h-3 text-gray-600" />
          <span className="text-[#f59e0b] font-medium">{agent.name}</span>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch">
          {}
          <div className="lg:col-span-4 bg-[#0c0f17] border border-white/10 rounded-2xl p-4 flex flex-col justify-between gap-4">
            <div className="relative w-full h-[400px] sm:h-[440px] rounded-xl overflow-hidden bg-[#161b26]">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {}
            <div className="bg-[#131722] border border-white/5 rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
                <FaStar className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-[#f59e0b] font-bold text-xs">
                  {agent.badge && agent.badge !== "None"
                    ? `${agent.badge} Agent`
                    : "Verified Agent"}
                </h5>
                <p className="text-gray-400 text-[11px] mt-0.5">
                  {agent.badgeTagline || "Among top 1% agents on NestVault"}
                </p>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-5 bg-[#0c0f17] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div>
              {}
              {agent.badge && agent.badge !== "None" && (
                <span className="inline-block bg-[#f59e0b]/20 text-[#f59e0b] border border-[#f59e0b]/30 text-[10px] font-bold px-3 py-1 rounded-md mb-3">
                  {agent.badge}
                </span>
              )}

              {}
              <div className="flex items-center gap-2.5">
                <h1 className="text-white text-3xl sm:text-[32px] font-serif font-medium tracking-wide">
                  {agent.name}
                </h1>
                {agent.isVerified && (
                  <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-black flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                )}
              </div>

              {}
              <p className="text-[#f59e0b] text-xs font-semibold mt-1">
                {agent.role}
              </p>

              {}
              <div className="flex items-center gap-2 mt-3 text-xs">
                <div className="flex text-[#f59e0b] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <span className="text-white font-bold">{agent.rating}</span>
                <span className="text-gray-400">
                  ({agent.reviewsCount} Reviews)
                </span>
              </div>

              {}
              <p className="text-gray-300 text-xs leading-relaxed mt-4">
                {agent.bio}
              </p>

              {}
              <div className="grid grid-cols-4 gap-2 mt-6 p-3 bg-[#131722] border border-white/5 rounded-xl text-center items-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    <FiBriefcase className="w-3.5 h-3.5" />
                    <span className="text-white font-bold text-sm sm:text-base">
                      {agent.experienceYears}+
                    </span>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">
                    Years Experience
                  </p>
                </div>

                <div className="flex flex-col items-center border-l border-white/5">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    <LuBuilding2 className="w-3.5 h-3.5" />
                    <span className="text-white font-bold text-sm sm:text-base">
                      {agent.propertiesSold}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">
                    Properties Sold
                  </p>
                </div>

                <div className="flex flex-col items-center border-l border-white/5">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    <FiTrendingUp className="w-3.5 h-3.5" />
                    <span className="text-white font-bold text-sm sm:text-base">
                      {agent.totalSales}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">Total Sales</p>
                </div>

                <div className="flex flex-col items-center border-l border-white/5">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    <FiSmile className="w-3.5 h-3.5" />
                    <span className="text-white font-bold text-sm sm:text-base">
                      {agent.clientSatisfaction}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">
                    Client Satisfaction
                  </p>
                </div>
              </div>

              {}
              <div className="space-y-2.5 mt-6 text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <FiBriefcase className="text-[#f59e0b] w-4 h-4 shrink-0" />
                  <span>
                    {agent.specialization || "Luxury Property Specialist"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-[#f59e0b] w-4 h-4 shrink-0" />
                  <span>{agent.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#f59e0b] w-4 h-4 shrink-0" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-[#f59e0b] w-4 h-4 shrink-0" />
                  <span>{agent.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-[#f59e0b] w-4 h-4 shrink-0" />
                  <span>
                    {agent.languages && agent.languages.length > 0
                      ? agent.languages.join(", ")
                      : "English, Spanish"}
                  </span>
                </div>
              </div>
            </div>

            {}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                  Contact Agent <FiSend className="w-3.5 h-3.5" />
                </button>
                <button className="flex-1 bg-transparent border border-[#f59e0b]/40 hover:bg-[#f59e0b]/10 text-[#f59e0b] font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                  Schedule Meeting <FiCalendar className="w-3.5 h-3.5" />
                </button>
              </div>

              {}
              <div className="flex items-center gap-3">
                {agent.socials?.linkedin && (
                  <a
                    href={agent.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#131722] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-colors"
                  >
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                )}
                {agent.socials?.facebook && (
                  <a
                    href={agent.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#131722] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-colors"
                  >
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                )}
                {agent.socials?.instagram && (
                  <a
                    href={agent.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#131722] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-colors"
                  >
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-3 bg-[#0c0f17] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              {}
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold text-sm">
                  About {agent.name?.split(" ")[0]}
                </h3>
                <button className="flex items-center gap-1.5 border border-white/10 hover:border-[#f59e0b]/40 bg-[#131722] text-xs text-gray-300 px-3 py-1.5 rounded-lg transition-colors">
                  Save Agent <FiBookmark className="w-3 h-3 text-[#f59e0b]" />
                </button>
              </div>

              {}
              <p className="text-gray-300 text-xs leading-relaxed">
                {agent.aboutText}
              </p>

              {}
              {agent.certifications && agent.certifications.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <h4 className="text-[#f59e0b] text-xs font-semibold">
                    Certifications
                  </h4>
                  <div className="space-y-2 text-xs text-gray-300">
                    {agent.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheck className="text-[#f59e0b] w-3 h-3 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {}
              {agent.areasOfExpertise && agent.areasOfExpertise.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <h4 className="text-[#f59e0b] text-xs font-semibold">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.areasOfExpertise.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#131722] border border-white/10 text-gray-300 text-[10px] px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <StatCounter />

      {}
      <div className="space-y-6 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-xl sm:text-3xl">
              Explore Other <span className="text-[#f59e0b]">Top Agents</span>
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Connect with other verified real estate specialists on NestVault
            </p>
          </div>
          <Link
            to="/agents"
            className="text-[#f59e0b] hover:underline text-xs font-semibold"
          >
            View All Agents →
          </Link>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {otherAgents.map((item) => (
            <AgentCard key={item._id} agent={item} />
          ))}
        </div>
      </div>

      <AgentReviews agentName={agent?.name} />
    </div>
  );
};

export default AgentDetail;
