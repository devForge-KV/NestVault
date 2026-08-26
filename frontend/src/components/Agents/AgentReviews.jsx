import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const AgentReviews = ({ agentName }) => {
  const firstName = agentName ? agentName.split(" ")[0] : "Agent";
  const reviews = [
    {
      id: 1,
      name: "Ethan Wright",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: "5.0",
      review: `${firstName} was incredible throughout our house-hunting journey! Understood our family's exact needs and closed the deal under budget. Truly exceptional service.`,
    },
    {
      id: 2,
      name: "Olivia Bennett",
      location: "Austin, TX",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      rating: "5.0",
      review: `Seamless communication and brilliant negotiation skills. ${firstName} made selling our apartment look completely effortless. Highly recommended!`,
    },
    {
      id: 3,
      name: "Lucas Vance",
      location: "Seattle, WA",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      rating: "5.0",
      review: `Outstanding market insight! ${firstName} guided me toward high-yield investment properties with total transparency. Would definitely partner again.`,
    },
  ];

  return (
    <div className="space-y-6 mt-12 mb-8">
      {}
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl sm:text-3xl  font-medium">
          What Clients Say About{" "}
          <span className="text-[#f59e0b] text-3xl sm:text-4xl font-bold tracking-wide">
            {firstName || "Agent"}
          </span>
        </h2>
        <button className="text-[#f59e0b] hover:text-[#d97706] text-xs font-semibold underline underline-offset-4 transition-colors">
          View All Reviews
        </button>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-[#0c0f17] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative hover:border-[#f59e0b]/30 transition-all duration-300"
          >
            <div>
              {}
              <div className="flex items-center gap-3.5 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {item.location}
                  </p>
                </div>
              </div>

              {}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#f59e0b] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <span className="text-white font-bold text-xs">
                  {item.rating}
                </span>
              </div>

              {}
              <p className="text-gray-300 text-xs leading-relaxed">
                {item.review}
              </p>
            </div>

            {}
            <div className="flex justify-end mt-4">
              <FaQuoteRight className="text-[#f59e0b] w-5 h-5 opacity-90" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentReviews;
