import React, { useState, Fragment, useEffect } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { Home, Info, Phone } from 'lucide-react';import Link from 'next/link'

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

const HamburgerButton = ({ isOpen, toggleSidebar }) => (
  <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
    <motion.button
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onClick={toggleSidebar}
      className="relative z-[60] h-11 w-10 rounded-full transition-colors"
    >
      <motion.span
        variants={VARIANTS.top}
        className="absolute h-1 w-8 bg-gray-800"
        style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
      />
      <motion.span
        variants={VARIANTS.middle}
        className="absolute h-1 w-8 bg-gray-800"
        style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
      />
      <motion.span
        variants={VARIANTS.bottom}
        className="absolute h-1 w-4 bg-gray-800"
        style={{
          x: "-50%",
          y: "50%",
          bottom: "35%",
          left: "calc(50% + 10px)",
        }}
      />
    </motion.button>
  </MotionConfig>
)

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
          className="fixed top-0 right-0 w-[75%] h-full p-10 bg-white text-black z-40">
            <div className="fixed inset-0 z-50 flex justify-end">
              {/* Sidebar */}
              <div className="bg-white w-64 h-full p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-extrabold text-gray-800">Menu</h2>
                </div>
                <div className="flex flex-col space-y-4">
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

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="mr-2 w-4 h-4" /> },
    { name: "About", href: "/about", icon: <Info className="mr-2 w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="mr-2 w-4 h-4" /> },
  ]

  // const BG_COLOR = scrolled
  //   ? "bg-[rgba(255,255,255,0.2)] backdrop-blur-[20px] shadow-lg"
  //   : "bg-transparent"

  return (
    <nav className={`bg-white shadow px-4 py-3 flex justify-between items-center relative`}>
      <div className="text-xl font-bold text-gray-800">Ladder.co</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="text-gray-700 hover:text-blue-600">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden z-[60]">
        <HamburgerButton toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      </div>

      {/* Flyout Panel */}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} navLinks={navLinks} />
    </nav>
  )
}