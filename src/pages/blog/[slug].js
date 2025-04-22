import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
})

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src', 'blog'))
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'src', 'blog', `${slug}.md`),
      'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return { props: { frontmatter, content } }
  } catch (error) {
    return { notFound: true }
  }
}

export default function PostPage({ frontmatter, content }) {
  const [html, setHtml] = useState(null) // Initialize as null for loading state

  useEffect(() => {
    import('dompurify')
      .then((mod) => {
        const DOMPurify = mod.default
        setHtml(DOMPurify.sanitize(marked(content)))
      })
      .catch((err) => {
        console.error('Failed to load DOMPurify:', err)
        // Fallback to unsanitized content with warning
        setHtml(`<!-- WARNING: Content not sanitized -->\n${marked(content)}`)
      })
  }, [content])

  if (html === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading post...</div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title} | My Blog</title>
        <meta name="description" content={frontmatter.description || "Blog post"} />
      </Head>
      <article className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
          {frontmatter.date && (
            <time className="text-gray-600" dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString()}
            </time>
          )}
        </header>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </>
  )
}