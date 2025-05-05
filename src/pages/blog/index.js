import Link from "next/link";
import { posts } from "../data/post";
import { motion } from "framer-motion";

export default function BlogHome() {
  return (
    <main className="space-y-20">
      <section
      id="hero"
      className="relative min-h-screen flex space-y-8 flex-col overflow-hidden items-center justify-center text-center px-6 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519143009590-e3800b9df468?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h1 className="text-6xl uppercase font-bold mb-8">Blogs</h1>
      </section>
      <div className="max-w-5xl mx-auto px-6">
      <ul className="space-y-8">
        {posts.map((post) => (
          <motion.li 
          key={post.slug}
          className="border-b pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}>
            <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold text-blue-700 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-1">{post.description}</p>
            <p className="text-sm text-gray-400">{new Date(post.date).toDateString()}</p>
          </motion.li>
        ))}
      </ul>
      </div>
    </main>
  );
}
