import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At ShopHub, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and disclose your personal
          information.
        </p>
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information from you, such as your name,
          email address, and shipping address, when you place an order on our
          website.
        </p>
        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We may use your personal information to process your orders,
          communicate with you about your orders, and send you promotional
          emails.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Disclosure of Your Information
        </h2>
        <p className="mb-4">
          We may disclose your personal information to third-party service
          providers who help us operate our website and fulfill your orders.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
