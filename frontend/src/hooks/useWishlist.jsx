import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const WishlistContext = createContext(null);

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshWishlist = useCallback(async () => {
    try {
      const response = await axios.get("/api/users/wishlist", {
        withCredentials: true,
      });
      setWishlist(response.data?.data || []);
    } catch (error) {
      if (error.response?.status !== 401)
        console.error("Wishlist load error:", error);
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshWishlist();
    window.addEventListener("authChange", refreshWishlist);
    return () => window.removeEventListener("authChange", refreshWishlist);
  }, [refreshWishlist]);

  const toggleWishlist = useCallback(
    async (propertyId) => {
      const isSaved = wishlist.some(
        (item) => (item._id || item.id) === propertyId,
      );
      try {
        const response = isSaved
          ? await axios.delete(`/api/users/wishlist/${propertyId}`, {
              withCredentials: true,
            })
          : await axios.post(
              `/api/users/wishlist/${propertyId}`,
              {},
              { withCredentials: true },
            );
        setWishlist(response.data?.data || []);
      } catch (error) {
        if (error.response?.status === 401)
          window.dispatchEvent(new Event("authRequired"));
        else console.error("Wishlist update error:", error);
      }
    },
    [wishlist],
  );

  return (
    <WishlistContext.Provider
      value={{ wishlist, loading, toggleWishlist, refreshWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider };
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
};
