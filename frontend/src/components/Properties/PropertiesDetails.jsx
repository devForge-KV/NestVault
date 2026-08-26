import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import ImageGallery from "./ImageGallery";
import PropertyHighlights from "./PropertyHighlights";
import AboutProperty from "./AboutProperty";
import Amenities from "./Amenities";
import PriceAndAgentCard from "./PriceAndAgentCard";
import LocationMap from "./LocationMap";
import PropertyDetailsTable from "./PropertyDetailsTable";
import SimilarProperties from "./SimilarProperties";
import Loading from "../Common/Loading";

const PropertiesDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const defaultFeatures = [
    "Expansive open-concept living and dining areas",
    "Floor-to-ceiling windows with stunning views",
    "Smart home system with advanced security",
  ];
  const defaultAmenities = [
    "Infinity Pool",
    "Smart Home",
    "Gym",
    "Security System",
  ];

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) throw new Error("Failed to fetch property details");

        const result = await response.json();
        const propertyData = result?.data ?? result;
        setProperty({
          ...propertyData,
          description:
            propertyData.description ||
            `Experience the perfect blend of comfort and modern living at ${propertyData.title}. This thoughtfully designed ${propertyData.category?.toLowerCase() || "property"} offers quality spaces, beautiful surroundings, and everything needed for an exceptional lifestyle.`,
          features:
            Array.isArray(propertyData.features) &&
            propertyData.features.length > 0
              ? propertyData.features
              : defaultFeatures,
          amenities:
            Array.isArray(propertyData.amenities) &&
            propertyData.amenities.length > 0
              ? propertyData.amenities
              : defaultAmenities,
        });
      } catch (error) {
        console.error("Error fetching property details:", error);
        setError("Property details load nahi ho paayi. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyData();
    }
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center px-4">
        <p className="text-red-400 text-center">{error}</p>
      </div>
    );
  }

  if (loading) return <Loading />;

  const handleScheduleTour = () => {
    console.log("Schedule tour clicked for property:", property?._id);
  };

  const handleRequestInfo = () => {
    console.log("Request info clicked for property:", property?._id);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-10">
      {}
      <Breadcrumbs propertyName={property?.title} isLoading={loading} />

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {}
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery
              images={property?.images}
              image={property?.image}
              badge={property?.badge}
              title={property?.title}
              isLoading={loading}
            />

            <PropertyHighlights property={property} isLoading={loading} />

            <AboutProperty
              description={property?.description}
              features={property?.features}
              isLoading={loading}
            />

            <Amenities amenities={property?.amenities} isLoading={loading} />
          </div>

          {}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
            <PriceAndAgentCard
              property={property}
              onScheduleTour={handleScheduleTour}
              onRequestInfo={handleRequestInfo}
              isLoading={loading}
            />

            <LocationMap location={property?.location} isLoading={loading} />

            <PropertyDetailsTable property={property} isLoading={loading} />
          </div>
        </div>

        {}
        <SimilarProperties
          currentPropertyId={property?._id}
          category={property?.category}
        />
      </div>
    </div>
  );
};

export default PropertiesDetails;
