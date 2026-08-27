import { useState, useEffect } from "react";
import PropertyCard from "../../components/Common/PropertiesCard";
import { NavLink } from "react-router-dom";
import { useWishlist } from "../../hooks/useWishlist";
import Loading from "../Common/Loading";
import { ArrowRight } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/properties`);

        if (!res.ok) {
          throw new Error("Unable to load properties");
        }

        const data = await res.json();
        const list = Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data)
            ? data
            : [];

        setFeaturedProperties(list);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties. Please try again.");
        setFeaturedProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-lg font-medium text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-8 text-center flex  items-center justify-between">
        <h2 className="text-xl lg:text-3xl font-semibold text-gray-100">
          Featured{" "}
          <span className="italic text-[#f59e0b]">Luxury  Properties</span>{" "}
        </h2>
        <NavLink to="/properties" className="text-[#f59e0b] flex items-center justify-center gap-2  text-xs lg:text-sm underline mt-2">
          View All  <ArrowRight size={14} />
        </NavLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredProperties.slice(0, 4).map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            isWishlisted={wishlist.some(
              (item) => (item._id || item.id) === property._id,
            )}
            onToggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
