/**
 * Security headers on every response.
 *
 * The policy is the part that cannot break Stripe's embedded checkout or
 * Google sign-in: no framing by other sites (clickjacking on billing and
 * admin screens), no plugins, no <base> rewriting, and forms may only post
 * here or to the two providers the app hands off to. A full script policy
 * needs per-request nonces and is left for when those are in place.
 */
const contentSecurityPolicy = [
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self' https://accounts.google.com https://checkout.stripe.com https://connect.stripe.com",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://js.stripe.com")' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // A verification build can write elsewhere, leaving a running dev server's .next alone.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  poweredByHeader: false,
  images: {
    // Only the avatars Google sign-in returns. An open pattern made the image
    // optimiser fetch and decode anything anyone pointed it at.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
