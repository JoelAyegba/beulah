import fs from 'fs';
import path from 'path';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDirectory = path.join(process.cwd(), 'app', 'blog');
  const slugs = fs.readdirSync(blogDirectory).filter(name => fs.statSync(path.join(blogDirectory, name)).isDirectory());

  const desiredSlugs = ['The-Quiet-Face-of-Hope', 'Silent-Battles'];
  const otherSlugs = slugs.filter(slug => !desiredSlugs.includes(slug));
  const orderedSlugs = [...desiredSlugs, ...otherSlugs];

  const posts: BlogPost[] = [];

  for (const slug of orderedSlugs) {
    const postPath = path.join(blogDirectory, slug, 'page.tsx');
    if (fs.existsSync(postPath)) {
      const fileContent = fs.readFileSync(postPath, 'utf-8');

      const metadataMatch = fileContent.match(/metadata = {([\s\S]*?)}/);
      let title = slug.replace(/-/g, ' ');
      let excerpt = 'No excerpt available.';
      let date = 'No date available.';
      let image = '/placeholder.jpg';

      if (metadataMatch && metadataMatch[1]) {
        const metadataContent = metadataMatch[1];
        const titleMatch = metadataContent.match(/title: "(.*?)"/);
        if (titleMatch) title = titleMatch[1];

        const descriptionMatch = metadataContent.match(/description:\s*"(.*?)"/);
        if (descriptionMatch) excerpt = descriptionMatch[1];
      }

      const dateMatch = fileContent.match(/<time dateTime="(.*?)">(.*?)<\/time>/);
      if (dateMatch) date = dateMatch[1];

      const imageMatch = fileContent.match(/<Image\s+[^>]*?src=(["'])(.*?)\1[^>]*?>/);
      if (imageMatch && imageMatch[2]) {
        image = imageMatch[2];
      }

      posts.push({
        slug,
        title,
        excerpt,
        date,
        image,
      });
    }
  }

  return posts;
}