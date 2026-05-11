import React from 'react'
import { Leaf, ShoppingCart, Sprout } from "lucide-react";
import Navbar from '../components/Navbar';


export default function About() {
  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-green-50 py-16 px-6 mt-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold text-green-800 mb-6">
          About Paradise Nursery
        </h1>

        <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Paradise Nursery is an online plant shopping experience designed for
          plant lovers. Our goal is to make beautiful and healthy plants
          accessible to everyone while creating a simple and enjoyable shopping
          experience.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <Leaf className="text-green-700 w-8 h-8" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Fresh Plants
          </h2>

          <p className="text-gray-600 leading-7">
            Discover a variety of fresh indoor and outdoor plants carefully
            selected to brighten your home and workspace.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShoppingCart className="text-green-700 w-8 h-8" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Easy Shopping
          </h2>

          <p className="text-gray-600 leading-7">
            Browse categories, add items to your cart, and manage quantities
            with a smooth and user-friendly shopping experience.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
            <Sprout className="text-green-700 w-8 h-8" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Plant Care
          </h2>

          <p className="text-gray-600 leading-7">
            We believe plants improve everyday life by creating healthier,
            calmer, and more beautiful environments.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Our Mission
        </h2>

        <p className="text-gray-700 text-lg leading-8">
          Our mission is to connect people with nature through affordable,
          high-quality plants and a modern digital shopping experience. Paradise
          Nursery combines technology and greenery to make plant shopping easier
          and more enjoyable for everyone.
        </p>
      </section>
    </div>
   </>
  )
}
