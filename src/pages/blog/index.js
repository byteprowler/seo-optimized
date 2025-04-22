import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'blog'))
  
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'src', 'blog', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    }
  }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

  return {
    props: {
      posts,
    },
  }
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | My Site</title>
        <meta name="description" content="Latest blog posts" />
      </Head>
      
      {/* Hero Section */}
      <section
        id='hero'
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/4947007/pexels-photo-4947007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative min-h-[50vh] flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center p-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Blog Posts</h1>
          <p className="text-xl md:text-2xl">Discover our latest articles and insights</p>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid gap-12">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.frontmatter.title}
                  </h2>
                  
                  {post.frontmatter.date && (
                    <time 
                      className="text-gray-500 text-sm block mb-3"
                      dateTime={post.frontmatter.date}
                    >
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                  
                  {post.frontmatter.description && (
                    <p className="text-gray-700 mb-4">{post.frontmatter.description}</p>
                  )}
                  
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                    Read More
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}