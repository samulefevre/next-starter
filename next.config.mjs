// https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
