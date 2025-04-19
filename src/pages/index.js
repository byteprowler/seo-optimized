"use client";

import React from "react";
import DrawOutline from "@/components/DrawOutline";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    quote: "The sturdiest ladder I've ever used. I feel safe every time.",
  },
  {
    name: "Sarah L.",
    quote: "Lightweight and super easy to move around. Game changer!",
  },
  {
    name: "Carlos P.",
    quote: "Been using mine for over a year—still solid like day one.",
  },
];

const faqs = [
  {
    question: "Are the ladders weather resistant?",
    answer: "Yes, all our ladders are built to resist corrosion and can withstand outdoor conditions.",
  },
  {
    question: "Do you offer warranty?",
    answer: "We provide a 2-year warranty on all our ladders.",
  },
  {
    question: "Is international shipping available?",
    answer: "Yes, we ship globally with reliable carriers.",
  },
];

const HomePage = () => {
  return (
    <main className="space-y-20">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden items-center justify-center text-center px-6 text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542222105-31a21d807f09?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
            >
              Browse Products
            </DrawOutline>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-10 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* WHY US */}
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
              viewport={{ once: false }}
            >
              <h3 className="font-semibold text-xl">{feature}</h3>
              <p className="text-gray-600 mt-2">
                Engineered for reliability and built to last.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TOP SELLERS */}
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
                width={500}
                height={500}
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

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="flex gap-6 overflow-x-auto snap-x">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="snap-center min-w-[300px] bg-white rounded-xl shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
              <div className="mt-4 font-bold text-blue-600">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold text-lg group-open:text-blue-600">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;