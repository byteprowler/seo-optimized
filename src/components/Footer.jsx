import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {motion} from 'framer-motion'

export default function Footer() {
  return (
<motion.footer
  className="bg-gray-900 text-white bottom-1 px-6 max-h-screen top-0 py-10 mt-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
    {[
      {
        title: "About Us",
        content: (
          <p>
            We specialize in crafting premium aluminium ladders for professionals and homeowners.
          </p>
        ),
      },
      {
        title: "Quick Links",
        content: (
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        ),
      },
      {
        title: "Contact",
        content: (
          <>
            <p>Email: support@laddershop.com</p>
            <p>Phone: +123 456 7890</p>
          </>
        ),
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
        {item.content}
      </motion.div>
    ))}
  </div>

  {/* SOCIAL ICONS */}
  <motion.div
  className="flex justify-center gap-4 mt-8"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  viewport={{ once: true }}
>
  <a
    href="https://facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition"
  >
    <FaFacebookF className="text-white w-4 h-4" />
  </a>

  <a
    href="https://instagram.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 p-2 rounded-full hover:bg-pink-500 transition"
  >
    <FaInstagram className="text-white w-4 h-4" />
  </a>

  <a
    href="https://twitter.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition"
  >
    <FaTwitter className="text-white w-4 h-4" />
  </a>

  <a
    href="https://linkedin.com/in/YourProfile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition"
  >
    <FaLinkedinIn className="text-white w-4 h-4" />
  </a>
</motion.div>  

  <motion.div
    className="text-center text-xs text-gray-400 mt-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    viewport={{ once: true }}
  >
    &copy; {new Date().getFullYear()} J&L Powertools. All rights reserved.
  </motion.div>
</motion.footer>
  )
}
