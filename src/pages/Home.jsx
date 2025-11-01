import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import productsData from '../../public/products.json';

const Home = () => {
    // Unique categories
    const categories = Array.from(new Set(productsData.map((p) => p.category)));

    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Categories Section */}
            <Categories categories={categories} />

            {/* Featured Products Section (or all products) */}
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">All Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productsData.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>

            {/* Existing Feature Section */}
            <Feature />
        </div>
    );
};

export default Home;
