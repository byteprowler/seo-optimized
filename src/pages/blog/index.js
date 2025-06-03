import Link from "next/link";
import { posts } from "@/data/post";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.050;
const BOX_FADE_DURATION = 0.25;

// const FADE_DELAY = 5;
// const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 50000;

const Typewrite = ({ examples }) => {
  const [restartKey, setRestartKey] = useState(0);
  const current = examples[restartKey % examples.length];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRestartKey((prev) => prev + 1); // re-trigger animation
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        Description:{" "}
        {current.split("").map((l, i) => (
          <motion.span
            key={`${restartKey}-${i}`} // force restart on key change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: i * LETTER_DELAY,
              duration: 0,
            }}
            className="relative"
          >
            {l}
            <motion.span
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};


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
            <Typewrite examples={post.description} />
            <p className="text-sm text-gray-400">{new Date(post.date).toDateString()}</p>
          </motion.li>
        ))}
      </ul>
      </div>
    </main>
  );
}
