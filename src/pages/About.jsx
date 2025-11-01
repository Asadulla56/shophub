import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

const IconStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconRocket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.0-3.0z" />
    <path d="M12 15S9 4.5 6 3s-5 6-5 6c0 3 7 15 7 15s12-7 12-7c0-3-3-5-6-5s-6 9-6 9" />
    <path d="M15 12s-3-1.5-3-3 1.5-3 3-3 3 1.5 3 3-1.5 3-3 3z" />
  </svg>
);

const IconUsers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconTrendingUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const highlights = [
  { icon: IconStar, value: "25K+", label: "Global Clients" },
  { icon: IconRocket, value: "150+", label: "Projects Delivered" },
  { icon: IconUsers, value: "5", label: "Creative Awards" },
  { icon: IconTrendingUp, value: "100%", label: "Client Retention" },
];

const values = [
  {
    icon: IconRocket,
    title: "Innovation",
    description:
      "We embrace the latest technology trends to provide cutting-edge solutions.",
  },
  {
    icon: IconUsers,
    title: "Customer-Centric",
    description:
      "We prioritize client satisfaction and craft experiences tailored to them.",
  },
  {
    icon: IconStar,
    title: "Quality Assurance",
    description:
      "Every product and service is delivered with the highest standards.",
  },
];

const team = [
  {
    name: "Alex Johnson",
    title: "CEO & Founder",
    imageUrl: "https://placehold.co/400x400/E2E8F0/4A5568?text=Alex+J.",
  },
  {
    name: "Maria Garcia",
    title: "Head of Design",
    imageUrl: "https://placehold.co/400x400/E2E8F0/4A5568?text=Maria+G.",
  },
  {
    name: "David Kim",
    title: "Lead Engineer",
    imageUrl: "https://placehold.co/400x400/E2E8F0/4A5568?text=David+K.",
  },
];

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-400 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-32 md:flex md:items-center md:justify-between">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6 z-10 relative">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Crafting Exceptional Shopping Experiences
            </h1>
            <p className="text-lg md:text-xl text-indigo-100">
              ShopHub merges premium products with modern e-commerce solutions
              to create an unforgettable shopping journey.
            </p>
            <Link
              to="/products"
              className="bg-white hover:bg-orange-400 text-purple-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Products
            </Link>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:-translate-y-2">
              <img
                src={heroImage}
                alt="ShopHub E-commerce"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
          </div>
        </div>
        <div className="absolute -bottom-20 left-0 w-full h-40 bg-white rounded-t-full"></div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-indigo-50 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
            >
              {React.createElement(item.icon, {
                className: "w-10 h-10 mx-auto text-indigo-600 mb-3",
              })}
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="mt-1 text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-indigo-100 rounded-full mb-6">
                  {React.createElement(val.icon, {
                    className: "w-8 h-8 text-indigo-600",
                  })}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Meet Our Team</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-64 h-64 mx-auto object-cover rounded-full shadow-md"
                />
                <h4 className="text-xl font-semibold mt-6">{member.name}</h4>
                <p className="text-indigo-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-r mb-5 from-indigo-600 to-indigo-400 text-white text-center">
        <h2 className="text-4xl font-bold">
          Start Your Shopping Journey Today
        </h2>
        <p className="mt-4 text-lg mb-5">
          Discover our premium products and enjoy a seamless experience.
        </p>
        <Link
          to="/contact"
          className="mt-8 bg-white text-indigo-600 hover:bg-orange-400 px-10 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
