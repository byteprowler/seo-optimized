// app/products/page.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const ladders = [
  { name: "6ft Aluminium Ladder", image: "https://images.unsplash.com/photo-1711375164857-9910e8b8901a?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "10ft Multi-Purpose", image: "https://images.unsplash.com/photo-1575737685561-3ce224445a59?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Foldable Extension", image: "/ladders/ladder-3.jpg" },
];

export default function ProductsPage() {
  return (
    <main className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {ladders.map((ladder, i) => (
          <motion.div
            key={i}
            className="bg-white shadow rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Image src={ladder.image} alt={ladder.name} className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{ladder.name}</h2>
              <p className="text-gray-600 text-sm mt-1">Durable, rust-free and easy to carry.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}