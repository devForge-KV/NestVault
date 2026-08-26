import { Link } from "react-router-dom";
import PropertiesCard from "../components/Common/PropertiesCard";
import { useWishlist } from "../hooks/useWishlist";
import Loading from "../components/Common/Loading";

const Wishlist = () => {
  const { wishlist, loading, toggleWishlist } = useWishlist();

  if (loading) return <Loading />;

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white pt-28 px-4 sm:px-6 lg:px-12 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f59e0b]">
              Your collection
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">
              Saved Properties
            </h1>
          </div>
          <Link
            to="/properties"
            className="text-sm text-[#f59e0b] hover:underline"
          >
            Browse listings
          </Link>
        </div>

        {wishlist.length === 0 ? (
          <div className="border border-white/10 rounded-2xl p-12 text-center text-gray-400">
            No saved properties yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlist.map((property) => (
              <PropertiesCard
                key={property._id}
                property={property}
                isWishlisted
                onToggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
