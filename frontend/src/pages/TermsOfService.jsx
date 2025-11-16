import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">
          By using our website, you agree to be bound by these Terms of
          Service.
        </p>
        <h2 className="text-2xl font-bold mb-2">Use of Our Website</h2>
        <p className="mb-4">
          You may use our website for lawful purposes only. You may not use our
          website to post or transmit any material that is unlawful,
          threatening, defamatory, or obscene.
        </p>
        <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content on our website, including text, graphics, logos, and
          images, is the property of ShopHub and is protected by copyright
          laws.
        </p>
        <h2 className="text-2xl font-bold mb-2">Disclaimer of Warranties</h2>
        <p className="mb-4">
          Our website is provided on an "as is" and "as available" basis. We
          make no warranties, express or implied, as to the operation of our
          website or the information, content, materials, or products included
          on our website.
        </p>
      </main>
    </div>
  );
};

export default TermsOfService;
