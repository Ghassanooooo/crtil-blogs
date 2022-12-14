import rss from "@astrojs/rss";
import slugify from "../utility/slugify";

import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
const postImportResult = import.meta.glob("../blog/**/*.md", { eager: true });
const posts = Object.values(postImportResult);
export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: slugify(post.frontmatter.title),
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
    })),
  });
