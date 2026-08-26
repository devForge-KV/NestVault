import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PropertyCard from "../Common/PropertiesCard";
import { useWishlist } from "../../hooks/useWishlist";
import Loading from "../Common/Loading";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const SimilarProperties = ({ currentPropertyId, category }) => {
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/properties`);
        if (!res.ok) throw new Error("Failed to fetch similar properties");

        const result = await res.json();
        const data = Array.isArray(result) ? result : (result?.data ?? []);

        const filtered = data
          .filter((item) => item._id !== currentPropertyId)
          .slice(0, 4);

        setSimilarProperties(filtered);
      } catch (err) {
        console.error("Error fetching similar properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilar();
  }, [currentPropertyId, category]);

  if (!loading && similarProperties.length === 0) {
    return null;
  }

  if (loading) return <Loading />;

  return (
    <section className="mt-16 pt-12 border-t border-slate-800/80">
      {}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Similar Properties
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Explore other luxury properties you might love
          </p>
        </div>

        <Link
          to="/properties"
          className="text-xs sm:text-sm font-semibold text-[#E5A638] hover:text-[#f3b955] flex items-center gap-1.5 transition-colors group"
        >
          <span>View All Properties</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarProperties.map((prop) => (
          <Link
            key={prop._id}
            to={`/properties/${prop._id}`}
            className="h-full block"
          >
            <PropertyCard
              property={prop}
              isWishlisted={wishlist.some(
                (item) => (item._id || item.id) === prop._id,
              )}
              onToggleWishlist={toggleWishlist}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarProperties;
