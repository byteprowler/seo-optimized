import fs from "fs";
import path from "path";
import remark from "remark";
import html from "remark-html";

// Read and parse Markdown files
export function getPostData(slug) {
  const filePath = path.join(process.cwd(), "src", "blog", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const processedContent = remark().use(html).processSync(fileContent);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
  };
}

// Get all posts file names
export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "src", "blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    return {
      slug,
      title: slug.replace(/-/g, " "), // Convert slug to human-readable title
    };
  });
}
