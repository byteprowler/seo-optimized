'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';
import { Home, Info, Phone, Package } from 'lucide-react'
import Link from 'next/link'

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
}

const HamburgerButton = ({ isOpen, toggleSidebar, scrolled }) => {
  const hamburgerColor = isOpen ? 'bg-black' : (scrolled ? 'bg-black' : 'bg-white');

  return(
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={toggleSidebar}
      className="relative z-[60] h-11 w-10 rounded-full transition-colors"
    >
      <motion.span
        variants={VARIANTS.top}
        className={`absolute h-1 w-8 ${hamburgerColor}`}
        style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
      />
      <motion.span
        variants={VARIANTS.middle}
        className={`absolute h-1 w-8 bg-gray-800 ${hamburgerColor}`}
        style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
      />
      <motion.span
        variants={VARIANTS.bottom}
        className={`absolute h-1 w-4 ${hamburgerColor}`}
        style={{
          x: "-50%",
          y: "50%",
          bottom: "35%",
          left: "calc(50% + 10px)",
        }}
      />
    </motion.button>
  </MotionConfig>
)}



const SideBar = ({ isOpen, toggleSidebar, navLinks }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(10px)",
          }}
          className="fixed top-0 right-0 w-[75%] h-full p-10 bg-white text-black z-40 flex flex-col justify-between"
        >
          <div className="flex flex-col space-y-4">

            <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black flex items-center hover:text-blue-600 text-lg"
                onClick={toggleSidebar}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

            {/* BOTTOM SECTION */}
          <div className="space-y-4">
            <div className="space-x-4">
              {[
                { icon: <FaFacebook />, href: 'https://facebook.com'},
              ].map(({icon, href}, idx) => (
                <motion.a
                key={idx}
                href={href}
                target='_blank'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-black"> 
                {icon}
              </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight
        setScrolled(window.scrollY > heroHeight - 80)
      } else {
        setScrolled(window.scrollY > 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="mr-2 w-4 h-4" /> },
    { name: "Product", href: "/products", icon: <Package className="mr-2 w-4 h-4" /> },
    { name: "About", href: "/about", icon: <Info className="mr-2 w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="mr-2 w-4 h-4" /> },
  ]

  if (!mounted) return null

  return (
    <nav
      className={`px-10 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="text-xl font-bold">Ladder.co</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-blue-600">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-[60]">
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} scrolled={scrolled} />
      </div>

      {/* Sidebar */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </nav>
  )
}