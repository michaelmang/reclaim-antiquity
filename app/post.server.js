import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

const posts = 'posts';

const postsPath = path.join(process.cwd(), `netlify/functions/server/${posts}`);

export async function getPost(slug) {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(
    file.toString()
  );
  const html = marked(body);
  return { slug, html, title: attributes.title };
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(
        path.join(postsPath, filename)
      );
      const { attributes } = parseFrontMatter(
        file.toString()
      );
      return {
        slug: posts + '/' + filename.replace(/\.md$/, ""),
        title: attributes.title
      };
    })
  );
}
