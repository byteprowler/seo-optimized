"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ladders = [
  {
    name: "6ft Aluminium Ladder",
    image: "/ladder-ceo.jpg",
    height: "6ft",
    category: "Aluminium",
  },
  {
    name: "10ft Multi-Purpose",
    image: "https://images.unsplash.com/photo-1575737685561-3ce224445a59?q=80&w=800",
    height: "10ft",
    category: "Multipurpose",
  },
  {
    name: "Foldable Extension",
    image: "/hdhyeg",
    height: "8ft",
    category: "Extension",
  },
  {
    name: "Aluminium Scaffold Tower",
    image: "/aluminium-scaffold-tower.jpg",
    height: "8ft",
    category: "Extension",
  },
  {
    name: "Extension Ladder",
    image: "/extension-ladder.jpg",
    height: "16ft",
    category: "Extension",
  },
  {
    name: "Frame Scaffolding",
    image: "/frame-scaffolding.jpg",
    height: "16ft",
    category: "Extension",
  },
];

const categories = ["All", "Aluminium", "Multipurpose", "Extension"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? ladders
    : ladders.filter((ladder) => ladder.category === filter);

  return (
    <main className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-md ${
              filter === cat
                ? "bg-[#FACC15] text-white rounded-lg border-2 px-4 py-2 font-semibold transition-colors"
              : "bg-white transition-colors hover:text-white text-gray-800 font-semibold hover:bg-[#FACC15]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map((ladder, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={ladder.image}
                alt={ladder.name}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">{ladder.name}</h2>
              <p className="text-sm text-gray-500 mb-2">Height: {ladder.height}</p>

              {/* WhatsApp to Order */}
              <Link
                href={`https://wa.me/2348035717860?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(
                  ladder.name
                )}`}
                target="_blank"
                className="inline-block mt-3 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600"
              >
                WhatsApp to Order
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
