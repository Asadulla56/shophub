import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-50"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Elevate Your Style, Upgrade Your Life
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Explore premium products designed to bring comfort, style, and quality to your everyday life.
              Limited offers available.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Premium Products Showcase"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-12 right-0 bg-white/90 rounded-xl p-6 shadow-lg w-72 hover:scale-105 transition-transform">
              <h3 className="font-bold text-gray-900 text-lg">Exclusive Deal</h3>
              <p className="text-gray-700 text-sm mt-2">
                Get 20% off on your first order! Limited time offer.
              </p>
              <Link
                to="/products"
                className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Grab Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
