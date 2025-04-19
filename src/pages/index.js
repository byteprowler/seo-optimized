"use client";
import Image from "next/image";
import { useEffect } from "react";
import React from "react";
import DrawOutline from "@/components/DrawOutline";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main className="space-y-20">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white"
        style={{
          backgroundImage: "url('/ladders/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium Aluminium Ladders for Every Job
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-100 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Lightweight. Durable. Trusted by Professionals.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <DrawOutline
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            >
              Browse Products
            </DrawOutline>
          </motion.div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Ladders?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Lightweight", "Non-Slip", "Industrial Strength"].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-xl">{feature}</h3>
              <p className="text-gray-600 mt-2">
                Engineered for reliability and built to last.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Top Sellers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              className="rounded-xl border bg-white shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.4 }}
              viewport={{ once: false }}
            >
              <Image
                src={`/ladders/ladder-${id}.jpg`}
                alt={`Ladder ${id}`}
                className="rounded-t-xl w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg">Ladder Model {id}</h4>
                <p className="text-gray-500">Perfect for indoor/outdoor use.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;