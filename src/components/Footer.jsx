import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaConnectdevelop } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
<motion.footer
  className="bg-gray-900 text-white px-6 py-10 mt-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl space-between mx-auto grid md:grid-cols-3 gap-6 text-sm">
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
  <div>
    <div className="flex flex-col gap-2">
          <Link className="flex text-center items-center" href={'/'}>
             <CiMail /> <span className="ml-2">Email</span>
          </Link>
          <Link className="flex text-center items-center" href={'/'}>
             <FaFacebookF /> <span className="ml-2">Facebook</span>
          </Link>
          <Link className="flex text-center items-center" href={'/'}>
             <FaInstagram /> <span className="ml-2">Instagram</span>
          </Link>
          <Link className="flex text-center items-center" href={'/'}>
             <FaXTwitter /> <span className="ml-2">Twitter</span>
          </Link>
          <Link className="flex text-center items-center" href={'/'}>
             <FaLinkedinIn /> <span className="ml-2">LinkedIn</span>
          </Link>
          <Link className="flex text-center items-center" href={'https://byteprowler.vercel.app'}>
             <FaConnectdevelop /> <span className="ml-2">Developer</span>
          </Link>
    </div>
  </div>
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
        <div>
        {item.content}
        </div>
      </motion.div>
    ))}
  </div>

  <motion.div
  className="flex justify-center gap-4 mt-8"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  viewport={{ once: true }}
>

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
