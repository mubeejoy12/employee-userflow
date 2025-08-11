// app/components/ClientLayout.js
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import Header from "./Header";
import ProfileModal from "./components/ProfileModal";
import Header from "./components/Header";
// import ProfileModal from "./ProfileModal";

export default function ClientLayout({ children }) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const pathname = usePathname();
  const noHeaderPaths = ["/", "/auth/login", "/auth/signup", "/auth/forgot-password", "/auth/reset-password", "/auth/otp", "/auth/verify-OTP"];
  const shouldShowHeader = !noHeaderPaths.some(path => pathname.startsWith(path));

  return (
    <>
      {shouldShowHeader && (
        <Header
          onProfileClick={() => {
            console.log("Opening profile modal");
            setShowProfileModal(true);
          }}
        />
      )}
      <main>{children}</main>
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => {
          console.log("Closing profile modal");
          setShowProfileModal(false);
        }}
        user={{ name: "Chloe Davis", email: "chloe@example.com" }}
      />
    </>
  );
}
