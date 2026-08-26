import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileBioCard from "../components/Profile/ProfileBioCard";
import ProfileSavedProperties from "../components/Profile/ProfileSavedProperties";
import ProfileInquiries from "../components/Profile/ProfileInquiries";
import ProfileRecentActivity from "../components/Profile/ProfileRecentActivity";
import ProfileAlerts from "../components/Profile/ProfileAlerts";
import Loading from "../components/Common/Loading";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/auth/me", {
          withCredentials: true,
        });
        setUser(res.data?.success ? res.data.user : null);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {}
        <div className="lg:col-span-3 lg:sticky lg:top-6 hidden lg:block">
          <ProfileSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            savedCount={user?.wishlist?.length || 0}
            inquiriesCount={user?.inquiries?.length || 0}
          />
        </div>

        {}
        <main className="lg:col-span-9 space-y-8">
          {}
          <ProfileStats user={user} />
          {}
          <ProfileBioCard user={user} />
          {}
          <ProfileSavedProperties savedProperties={user?.wishlist || []} />
          {}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProfileInquiries inquiries={user?.inquiries || []} />
            <ProfileRecentActivity activities={user?.activities || []} />
          </div>{" "}
          <ProfileAlerts
            alerts={user?.propertyAlerts || []}
            userLocation={user?.location || "New York, USA"}
            receiveUpdates={user?.receiveUpdates ?? true}
          />
        </main>
      </div>
    </div>
  );
};

export default Profile;
