/**
 * reads from /posts and creates a new json file at app/posts.json
 * that contains the markdown content and the metadata
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const marked = require("marked");

const postsDirectory = path.join(process.cwd(), "posts");

const fileNames = fs.readdirSync(postsDirectory);

const posts = fileNames
  .map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf-8"
    );
    const {
      data: { title, draft, date, thumbnail },
      content,
    } = matter(fileContent);

    const html = marked.parse(content);
    return {
      id,
      title,
      firstLine: marked.parse(content.split("\n").filter(Boolean)[0]),
      draft,
      date,
      thumbnail,
      html,
    };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(
  path.join(process.cwd(), "app", "posts.json"),
  JSON.stringify(posts)
);
