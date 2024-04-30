import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkMdxImages from "remark-mdx-images";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMdxImages,
      [remarkFrontmatter],
      [remarkMdxFrontmatter]
    ]
  }
})

export default withMDX(nextConfig);
