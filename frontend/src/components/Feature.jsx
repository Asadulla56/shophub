import React from 'react';
import { Truck, Shield, Headphones, ShoppingBag } from "lucide-react"; // ensure correct icon imports

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure transactions" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer service" },
  { icon: ShoppingBag, title: "Easy Returns", desc: "30-day return policy" },
];
const Feature = () => {
    return (
          <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Feature;