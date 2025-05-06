import { useRouter } from "next/router";
import { posts } from "@/data/post";
import { NextSeo } from "next-seo";
import Loader from "@/components/Loader";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="flex w-screen h-screen items-center justify-center flex-col bg-indigo-300">
    <Loader />
    Loading
    </div>;

  return (
    <>
      <NextSeo
        title={post.title + " | J&L Powertools"}
        description={post.description}
        canonical={`https://yourdomain.com/blog/${post.slug}`}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://yourdomain.com/blog/${post.slug}`,
          siteName: "J&L Powertools",
        }}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-8">{new Date(post.date).toDateString()}</p>
        <div
           className="text-lg leading-relaxed text-gray-700 space-y-4 [&_p]:mb-4 [&_strong]:text-gray-900 [&_h2]:text-2xl [&_h2]:mt-6"
           dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </>
  );
}